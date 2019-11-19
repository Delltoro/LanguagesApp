import passport from 'passport';
import {Strategy as GoogleStrategy} from 'passport-google-oauth20';
import { googleClientID , googleClientSecret } from '../config/keys';


passport.use(
    new GoogleStrategy(
    {
        clientID: googleClientID,
        clientSecret: googleClientSecret,
        callbackURL: '/auth/google/callback'
    }
    , (accessToken , refreshToken , profile , done) => {
        console.log('access token' , accessToken);
        console.log('refresh token' , refreshToken);
        console.log(' profile' , profile);
    })
);