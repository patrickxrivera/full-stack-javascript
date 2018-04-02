import express from 'express';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';
import passport from 'passport';

import User from './models/User';
import passportConfig from './services/passport';
import initAuthRoutes from './routes/auth';
import keys from './config/keys';
import { thirtyDays } from './utils/helpers';

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: thirtyDays,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

initAuthRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
