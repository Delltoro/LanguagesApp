import passport from 'passport';
import {Strategy as GoogleStrategy} from 'passport-google-oauth20';
import { googleClientID , googleClientSecret } from '../config/keys';
import mongoose from 'mongoose';

const User = mongoose.model('users');

passport.serializeUser((user , done) => {
    done(null , user.id);
});

passport.deserializeUser((id , done) => {
    User.findById(id)
        .then( (user) => {
            done(null,user);
        })
})


passport.use(
    new GoogleStrategy(
    {
        clientID: googleClientID,
        clientSecret: googleClientSecret,
        callbackURL: '/auth/google/callback'
    }
    , (accessToken , refreshToken , profile , done) => {
        
        User.findOne({ googleId: profile.id })
            .then( (existingUser) => {
                if(existingUser) {
                    // We have user with the given googleId
                    done(null , existingUser);
                }else {
                    // We don't have user with the given profile id , so create new
                    new User({
                        googleId: profile.id,
                        name: 'NewUser',
                        experience: 0})
                        .save()
                        .then( user => done(null , existingUser));
                    }
            })
        
        
    })
);