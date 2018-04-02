import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';

import User from './models/User';
import passportConfig from './services/passport';
import initAuthRoutes from './routes/auth';
import keys from './config/keys';
import { initCookieSession, initPORT } from './utils/init';

mongoose.connect(keys.mongoURI);

const app = express();

app.use(initCookieSession());
app.use(passport.initialize());
app.use(passport.session());

initAuthRoutes(app);

const PORT = initPORT();
app.listen(PORT);
