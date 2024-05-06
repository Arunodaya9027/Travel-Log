require("dotenv").config();

const express = require('express');
const cors = require('cors');
const connect = require('./db/db.js');
const path = require('path');
const User = require('./model/userModel.js');
const Explore = require('./model/exploreModel.js');
const methodOverride = require( 'method-override' );
const ejsmate = require('ejs-mate');
const userRouter = require('./routes/userRoutes.js')
const exploreRouter = require('./routes/exploreRoutes.js')
const subscritpionRouter = require('./routes/subscriptionRoutes.js')
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const cloudinary = require('./utils/cloudinary')
// const multer = require('multer');
// const upload = multer({ dest: 'uploads/' });
// const multer = require('multer')
// const bcrypt = require('bcrypt')
// const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT;
app.use(express.json({limit: '50mb'}));
app.use(cors());

app.use(session({
    secret: 'travister',
    resave: false,
    saveUninitialized: true,
    cookie:{
        httpOnly:true,
        maxAge: 10000
    }
}))

// //img upload
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//        cb(null, './uploads')
  
//     }, filename: function (req, file, cb) {
//        cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
//     },
//   })
  
//   // const upload = multer({ storage });
  
//   const uploader = multer({ dest: 'uploads/' });

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true, limit: '50mb'})); // parse url encoded data
app.use(methodOverride("_method")); // override with the HTTP request method (e.g. PUT or DELETE) in the query string 

// passport.use('local-register', new LocalStrategy({
//     usernameField: 'email',
//     passwordField: 'password',
//     passReqToCallback: true
// }, async (req, email, password, done) => {
//     try {
//         const user = await User.create(req.body);
//         console.log(user);
//         return done(null, user);
//     } catch (error) {
//         return done(error);
//     }
// }));


// passport.use(new LocalStrategy(User.authenticate()));
// app.use(passport.authenticate("session"));
// // use static serialize and deserialize of model for passport session support
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// app.use(flash());

// app.use((req, res, next)=>{
//     res.locals.success = req.flash("success");
//     res.locals.error = req.flash("error");
//     res.locals.warning = req.flash("warning");
//     res.locals.info = req.flash("info");
//     res.locals.currUser = req.user;
//     next();
// })

// cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg", { 
//     public_id: "olympic_flag" 
// }, function(error, result) {
//     console.log(result); 
// });

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
//   }
// });
// const upload = multer({ storage: storage });
// app.use(upload.array('images', 15));

app.use(exploreRouter);
app.use(subscritpionRouter);
app.use(userRouter)

// Connect to MongoDB
connect();

app.get('/api/config', (req, res) => {
    res.json({
      cloudName: process.env.CLOUDINARY_NAME,
      uploadPreset: process.env.CLOUDINARY_UPLOADPRESET
    });
  });

app.listen(port, () => console.log(`Listening on ${port}`));
