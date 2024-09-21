import passport from "passport";
import GoogleStrategy from "passport-google-oauth20"
import keys from "../config/dev.js"

// const User = mongoose.model("googleUser");

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then((user) => {
            done(null, user);
        });
});

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: "/auth/google/callback",
    proxy: true
}, async (accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({googleId: profile.id})
    if (existingUser) {
        return done(null, existingUser)
    }
    const user = await new User({googleId: profile.id}).save()
    done(null, user)
}));