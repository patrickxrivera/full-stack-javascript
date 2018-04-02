'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dev = require('./dev');

var _dev2 = _interopRequireDefault(_dev);

var _prod = require('./prod');

var _prod2 = _interopRequireDefault(_prod);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isProdEnv = function isProdEnv() {
  return process.env.NODE_ENV === 'production';
};

var getKeys = function getKeys() {
  return isProdEnv() ? _prod2.default : _dev2.default;
};

var keys = getKeys();

exports.default = keys;
//# sourceMappingURL=keys.js.map