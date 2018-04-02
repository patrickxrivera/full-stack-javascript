import passport from 'passport';
import googlePassport from 'passport-google-oauth20';
import mongoose from 'mongoose';

import keys from '../config/keys';

const User = mongoose.model('users');

const GoogleStrategy = googlePassport.Strategy;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

const passportConfig = passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then((existingUser) => {
        if (existingUser) {
          done(null, existingUser);
        } else {
          new User({ googleId: profile.id })
            .save()
            .then((newUser) => done(null, newUser));
        }
      });
    }
  )
);

export default passportConfig;
