'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initAuthRoutes = function initAuthRoutes(app) {
  app.get('/auth/google', _passport2.default.authenticate('google', {
    scope: ['profile', 'email']
  }));

  app.get('/auth/google/callback', _passport2.default.authenticate('google'));

  app.get('/api/current_user', function (req, res) {
    res.send(req.user);
  });

  app.get('/api/logout', function (req, res) {
    req.logout();
    res.send(req.user);
  });
};

exports.default = initAuthRoutes;
//# sourceMappingURL=auth.js.map