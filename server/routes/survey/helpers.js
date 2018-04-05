import map from 'lodash/fp/map';
import filter from 'lodash/fp/filter';
import compact from 'lodash/fp/compact';
import uniqBy from 'lodash/fp/uniqBy';
import split from 'lodash/fp/split';
import flow from 'lodash/fp/flow';
import each from 'lodash/fp/each';
import Path from 'path-parser';
import { URL } from 'url';

import { updateDb } from './queries';

const p = new Path('/api/surveys/:surveyId/:choice');

const handleMatch = ({ surveyId, choice }) => ({ surveyId, choice });

const isMatch = (match) => (match ? handleMatch(match) : undefined);

const testPath = (pathname) => p.test(pathname);

const getPath = (url) => new URL(url).pathname;

const getMatch = flow(getPath, testPath, isMatch);

const formatReq = ({ email, url }) => {
  const match = getMatch(url);
  return { email, ...match };
};

export const handleSurveyResponse = flow(
  map(formatReq),
  compact,
  uniqBy('email'),
  each(updateDb)
);

// ========================

const toEmail = (email) => ({ email: email.trim() });

export const mapRecipients = flow(split(','), map(toEmail));
