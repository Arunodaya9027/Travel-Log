const express = require('express');
const connect = require('./db/db.js');
const path = require('path');
const User = require('./model/userModel.js');
const Explore = require('./model/exploreModel.js');
const methodOverride = require( 'method-override' );
const ejsmate = require('ejs-mate');
const userRouter = require('./routes/userRoutes.js')
const exploreRouter = require('./routes/userRoutes.js')
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const app = express();
const port = 5000;
app.use(express.json());

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie:{
        httpOnly:true,
        maxAge: 10000
    }
}))

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true})); // parse url encoded data
app.use(methodOverride("_method")); // override with the HTTP request method (e.g. PUT or DELETE) in the query string 

passport.use('local-register', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {
    try {
        const user = await User.create(req.body);
        console.log(user);
        return done(null, user);
    } catch (error) {
        return done(error);
    }
}));


passport.use(new LocalStrategy(User.authenticate()));
app.use(passport.authenticate("session"));
// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(flash());

app.use((req, res, next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.warning = req.flash("warning");
    res.locals.info = req.flash("info");
    res.locals.currUser = req.user;
    next();
})

app.use(exploreRouter);
// app.use(reviewRouter);
app.use(userRouter)


// Connect to MongoDB
connect();

app.listen(port, () => console.log(`Listening on ${port}`));

// Home Page of travel log
// Home Page of travel log

// app.get('/', (req, res) => {
//     let sortBy = req.query.sortby || 'price_asc';
//     let sortOption = {};
//     if (sortBy === 'price_dsc') {
//         sortOption = { price: -1 };
//     } else {
//         sortOption = { price: 1 };
//     }

//     Product.find()
//        .sort(sortOption)
//        .exec((err, products) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.render('home', {
//                     title: 'Home',
//                     products: products,
//                 });
//             }
//         });
// });
