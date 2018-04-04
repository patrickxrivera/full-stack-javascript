import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import bodyParser from 'body-parser';
import path from 'path';

import './models/Survey';
import './models/User';
import './services/passport';
import initAuthRoutes from './routes/auth';
import initBillingRoutes from './routes/billing';
import initSurveyRoutes from './routes/survey';
import keys from './config/keys';
import { initEnv, initCookieSession, initPORT } from './utils/init';
import { isProdEnv } from './utils/helpers';

initEnv();

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(initCookieSession());
app.use(passport.initialize());
app.use(passport.session());

initAuthRoutes(app);
initBillingRoutes(app);
initSurveyRoutes(app);

if (isProdEnv()) {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = initPORT();
app.listen(PORT);
