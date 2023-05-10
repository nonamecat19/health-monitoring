
const GoogleStrategy = require('passport-google-oauth20').Strategy
const passport = require('passport')

const GOOGLE_CLIENT_SECRET = "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"
const GOOGLE_CLIENT_ID = '261937984929-1d97orbeqrnblqg6k4jdbo71o7jn7587.apps.googleusercontent.com'


passport.use(new GoogleStrategy({
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
        scope: ["profile", "email"]
    },
    function(accessToken, refreshToken, profile, done) {

        const data = profile._json
        const name = data.name
        const email = data.email
        const organization = data.hd

        if (organization === 'student.ztu.edu.ua') {
            return done(null, {profile, accessToken})
        }
        return done()

    }
))

passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser((user, done) => {
    done(null, user)
})
