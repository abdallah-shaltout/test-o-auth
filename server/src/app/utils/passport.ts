// @ts-nocheck
import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import { Strategy as FacebookStrategy } from 'passport-facebook'
export default function PassportConfig() {
    passport.initialize()
    const googleOptions = {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL
    }
    const facebookOptions = {
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        callbackURL: process.env.FACEBOOK_CALLBACK_URL,
        profileFields: ['id', 'displayName', 'photos', 'email']
    }

    passport.use(
        new GoogleStrategy(googleOptions, (_accessToken, _refreshToken, profile, done) => {
            done(null, profile)
        })
    )

    passport.use(
        new FacebookStrategy(facebookOptions, function (_accessToken, _refreshToken, profile, cb) {
            return cb(null, profile)
        })
    )

    passport.serializeUser((user, done) => {
        done(null, user)
    })

    passport.deserializeUser(
        (
            user: {
                username: string
                password: string
            },
            done
        ) => {
            return done(null, user)
        }
    )
    return passport
}
