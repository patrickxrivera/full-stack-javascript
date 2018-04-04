const errorMsg = { error: 'You must be logged in' };

const sendErrorMsg = (res) => res.status(401).send(errorMsg);

const requireLogin = (req, res, next) =>
  req.user ? next() : sendErrorMsg(res);

export default requireLogin;
