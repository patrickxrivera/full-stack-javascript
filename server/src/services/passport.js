import passport from 'passport';
import googlePassport from 'passport-google-oauth20';
import keys from '../config/keys';

const GoogleStrategy = googlePassport.Strategy;

const passportConfig = passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile) => {
      console.log({ accessToken, refreshToken, profile });
    }
  )
);

export default passportConfig;
