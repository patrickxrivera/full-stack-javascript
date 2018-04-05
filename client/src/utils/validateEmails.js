import map from 'lodash/fp/map';
import flow from 'lodash/fp/flow';
import split from 'lodash/fp/split';
import filter from 'lodash/fp/filter';

const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const renderErrorMsg = (invalidEmails) =>
  `These emails are invalid: ${invalidEmails}`;

const renderInvalidEmails = (invalidEmails) =>
  invalidEmails.length ? renderErrorMsg(invalidEmails) : undefined;

const getInvalidEmails = (email) => re.test(email) === false;

const trimEmails = (email) => email.trim();

const validateEmails = flow(
  split(','),
  map(trimEmails),
  filter(getInvalidEmails),
  renderInvalidEmails
);

export default validateEmails;
