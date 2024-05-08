const express = require('express')
const router = express.Router();
const User = require('../model/userModel');
const Session = require('../model/sessionModel');
const bcrypt = require('bcrypt');
const cors = require('cors');
const passport = require('passport');
const LocalStrategy = require('passport-local');

// router.get('/login', (req, res)=>{
//     res.render('auth/login')
// })

// router.get('/signup', (req, res)=>{
//     res.render('auth/signup')
// })


// router.post('/register', async(req, res)=>{
//     const {username, email, password} = req.body;

//     const user = new User({username, email});
//     // await User.create({username, email, password});

//     await User.register(user, password);

//     res.redirect('/login');
// })

// router.post('/register', passport.authenticate('local-register', {
//     successRedirect: '/login',
//     failureRedirect: '/register',
//     failureFlash: true
// }));

// router.post('/login', passport.authenticate(
//     'local', 
//     { failureRedirect: '/login' }), (req, res) => {
//         res.redirect('/product');
// });


// router.post('/subscribe',async(req,res)=>{
//     console.log(req.body);
//     console.log(res)
//     const transporter = nodemailer.createTransport({
//       // service: "Gmail",
//       host: "smtp.gmail.com",
//       port: 465,
//       secure: true,
//       auth: {
//         user: "master8525aps@gmail.com",
//         pass: "qimgcalnkeolxuob",
//       },
//     });

//     console.log("transporter", transporter);

//     const mailOptions = {
//       from: process.env.EMAIL_USER, // sender
//       to: req.body.email, //reciever
//       subject: "Registration",
//       text: "Thank you",
//       html: "<h1>Thank you for Registering🎉🎉</h1>",
//     };

//     console.log("mail optn$$$$$$$", mailOptions);

//     try {
//       const info = await transporter.sendMail(mailOptions);
//       console.log("Email sent:", info.response);
//     } catch (error) {
//       console.log("Email Unsent:", error);
//     }
// })


// register
router.post('/auth/register', async (req, res) => {
  console.log(req.body);
  try {
    // hashing the password
    console.log("pass1");
    const salt = await bcrypt.genSalt(10);  
    const hashPass = await bcrypt.hash(req.body.password, salt);
    console.log("pass2");
    const newUser = new User({
        firstName: "",
        lastName: "",
        username: req.body.userName,
        dob:"",
        gender:"Not Prefer To Say",
        pincode:"",
        phone:"",
        email: req.body.email,
        password: hashPass,
        cfp: req.body.cfp,
        cards: 3,
        subscription: "Classic",
        isEnd: "Never",
        profilePic: "https://res.cloudinary.com/dfd6fmijq/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1715039682/profile/default-profile-pic_cwtbgb.jpg",
        bio: "",
        address: ""
    });
    console.log(newUser);
    // adding the schemas of the user and cases
    // .populate;
    const user = await newUser.save();
    console.log(user);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/setup-profile/:id', async (req, res) => {
  console.log(req.body);
  try {
    console.log("pass1");
    const id = req.params.id;
    console.log(id);
    const user = await User.find({ _id: id });
    const {firstName, lastName, dob, gender, phone, pincode, profilePic, bio} = req.body;
    console.log("pass2");
    const update = {
      $set: {
        firstName: firstName,
        lastName: lastName,
        dob:dob,
        gender:gender,
        pincode: pincode,
        phone:phone,
        profilePic: profilePic,
        bio: bio
    }};
    console.log("update");
    const updatedUser = await User.updateOne({ _id: id }, update);
    res.status(200).json({ message: "Profile updated successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/setup-profile/:id', async(req, res) => {
  const id = req.params.id;
  console.log(id);
  const user = await User.find({ _id: id })
    .then((user) => {
      console.log(user);
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
});


  
// login
router.post('/auth/login', async (req, res) => {
  try {
    const filter = {
      $or: [
        { username: req.body.name },
        { email: req.body.name } // Assuming 'name' is intended for login here
      ],
    };
    const user = await User.findOne(filter);

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }
    console.log(user);
    console.log(req.body.password);

    
    const isPasswordValid = (req.body.password == user.cfp);

    if (!isPasswordValid) {
      return res.status(400).json({ error: "Wrong password" });
    }
    console.log("pass1");
    // Include additional fields (ContractAdd, Walletadd, Phone) in the response
    
    // const { ContractAdd, Walletadd, Phone } = userData;

    res.status(200).json({ user});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// router.get('/getlogin',async(req,res)=>{
//   const data = await User.findOne()
//   res.status(200).json(data);
// })

router.post('/auth/create-session', async (req, res) => {
  try {
    
    const {id, startTime} = req.body;
    const newSession = new Session({
      userId: id,
      startTime: startTime,
      endTime: null,
      status: true
  });
    // console.log("open");
    console.log(newSession);
    // adding the schemas of the user and cases
    // .populate;
    const session = await newSession.save();
    console.log(session);
    res.status(200).json(session);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/session/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findOne({_id: id});
    // console.log("open");
    if(!user) {
      return res.status(400).json({ error: "User not found" });
    }
    console.log(user);
    // adding the schemas of the user and cases
    // .populate;
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// logout
router.post('/logout/:id', async(req, res) => {
  // Destroy the session to log the user out
  try {
    const id = req.params.id;
    const { endTime} = req.body;
    const filter = {
      $and: [
        { userId: req.body.id }, // Assuming 'id' is the unique identifier for the user
        { status: true } // Filter for active users (assuming 'status' indicates active/inactive state)
      ]
    };
    const session = await Session.findOne(filter);
    if (!session) {
      return res.status(400).json({ error: "User not found" });
    }
    console.log(session);
    // adding the schemas of the user and cases
    // .populate;
    const update = {
      $set: {
        endTime: endTime
    }};
    console.log("update");
    const updatedUser = await User.updateOne({ userId: id }, update);
    res.status(200).json({ message: "Profile updated successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
}); 

// app.get('/', (req, res) => {
//   const isLoggedIn = req.session.user ? true : false;
//   res.render('home', { isLoggedIn });
// });


module.exports = router;