'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _User = require('./models/User');

var _User2 = _interopRequireDefault(_User);

var _passport3 = require('./services/passport');

var _passport4 = _interopRequireDefault(_passport3);

var _auth = require('./routes/auth');

var _auth2 = _interopRequireDefault(_auth);

var _keys = require('./config/keys');

var _keys2 = _interopRequireDefault(_keys);

var _init = require('./utils/init');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.connect(_keys2.default.mongoURI);

var app = (0, _express2.default)();

app.use((0, _init.initCookieSession)());
app.use(_passport2.default.initialize());
app.use(_passport2.default.session());

(0, _auth2.default)(app);

var PORT = (0, _init.initPORT)();
app.listen(PORT);
//# sourceMappingURL=index.js.map