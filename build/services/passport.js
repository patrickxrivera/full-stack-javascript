'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _passportGoogleOauth = require('passport-google-oauth20');

var _passportGoogleOauth2 = _interopRequireDefault(_passportGoogleOauth);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _keys = require('../config/keys');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = _mongoose2.default.model('users');

var GoogleStrategy = _passportGoogleOauth2.default.Strategy;

_passport2.default.serializeUser(function (user, done) {
  done(null, user.id);
});

_passport2.default.deserializeUser(function (id, done) {
  User.findById(id).then(function (user) {
    done(null, user);
  });
});

var passportConfig = _passport2.default.use(new GoogleStrategy({
  clientID: _keys2.default.googleClientID,
  clientSecret: _keys2.default.googleClientSecret,
  callbackURL: '/auth/google/callback',
  proxy: true
}, function (accessToken, refreshToken, profile, done) {
  User.findOne({ googleId: profile.id }).then(function (existingUser) {
    if (existingUser) {
      done(null, existingUser);
    } else {
      new User({ googleId: profile.id }).save().then(function (newUser) {
        return done(null, newUser);
      });
    }
  });
}));

exports.default = passportConfig;
//# sourceMappingURL=passport.js.map