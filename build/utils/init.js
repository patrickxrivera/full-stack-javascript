'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initEnv = exports.initPORT = exports.initCookieSession = undefined;

var _cookieSession = require('cookie-session');

var _cookieSession2 = _interopRequireDefault(_cookieSession);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _keys = require('../config/keys');

var _keys2 = _interopRequireDefault(_keys);

var _helpers = require('./helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initCookieSession = exports.initCookieSession = function initCookieSession() {
  return (0, _cookieSession2.default)({
    maxAge: _helpers.thirtyDays,
    keys: [_keys2.default.cookieKey]
  });
};

var initPORT = exports.initPORT = function initPORT() {
  return process.env.PORT || 5000;
};

var initEnv = exports.initEnv = function initEnv() {
  _dotenv2.default.config();
};
//# sourceMappingURL=init.js.map