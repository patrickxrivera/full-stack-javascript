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

const createNewUser = async (profile) => {
  const newUser = await new User({ googleId: profile.id }).save();
  done(null, newUser);
};

const passportConfig = passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      existingUser ? done(null, existingUser) : createNewUser(profile);
    }
  )
);

export default passportConfig;
