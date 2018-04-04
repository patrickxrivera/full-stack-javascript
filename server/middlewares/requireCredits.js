import { sendErrorMsg } from './helpers';

const errorMsg = { error: 'Not enough credits' };

const hasEnoughCredits = ({ user }) => user.credits >= 1;

const requireCredits = (req, res, next) =>
  hasEnoughCredits(req) ? next() : sendErrorMsg(res, errorMsg);

export default requireCredits;
