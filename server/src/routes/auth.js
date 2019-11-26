import passport from 'passport';

module.exports = (app) => {
    app.get('/auth/google', passport.authenticate('google' , {
        scope: ['profile','email']
    })
    );
    
    app.get('/auth/google/callback' , passport.authenticate('google'));
    
    app.get('/api/logout' , (req , res) => {
        req.logout();
        res.send(req.user);
    })

    app.get('/api/current_user' , (req , res) => {
        // Passport attach automaticly req.user obj
        res.send(req.user);
    })
}

