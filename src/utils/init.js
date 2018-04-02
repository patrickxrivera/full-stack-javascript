import cookieSession from 'cookie-session';
import dotenv from 'dotenv';

import keys from '../config/keys';
import { thirtyDays } from './helpers';

export const initCookieSession = () =>
  cookieSession({
    maxAge: thirtyDays,
    keys: [keys.cookieKey]
  });

export const initPORT = () => process.env.PORT || 5000;

export const initEnv = () => {
  dotenv.config();
};
