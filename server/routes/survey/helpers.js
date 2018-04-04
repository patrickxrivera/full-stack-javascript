import map from 'lodash/map';
import split from 'lodash/split';
import compose from 'lodash/fp/compose';

import requireLogin from '../../middlewares/requireLogin';
import requireCredits from '../../middlewares/requireCredits';

export const middlewares = compose(requireLogin, requireCredits);

const toEmail = (email) => ({ email: email.trim() });

// TODO - use lodash compose

export const mapRecipients = (recipients) => recipients.split(',').map(toEmail);
