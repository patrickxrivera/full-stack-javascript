import { sendErrorMsg } from './helpers';

const errorMsg = { error: 'You must be logged in' };

const requireLogin = (req, res, next) =>
  req.user ? next() : sendErrorMsg(res, errorMsg);

export default requireLogin;
