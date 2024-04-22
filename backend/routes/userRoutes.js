const express = require('express')
const router = express.Router();
const User = require('../model/userModel');
const passport = require('passport');
const LocalStrategy = require('passport-local');

// router.get('/login', (req, res)=>{
//     res.render('auth/login')
// })

// router.get('/signup', (req, res)=>{
//     res.render('auth/signup')
// })


router.post('/register', async(req, res)=>{
    const {username, email, password} = req.body;

    const user = new User({username, email});
    // await User.create({username, email, password});

    await User.register(user, password);

    res.redirect('/login');
})

router.post('/register', passport.authenticate('local-register', {
    successRedirect: '/login',
    failureRedirect: '/register',
    failureFlash: true
}));

router.post('/login', passport.authenticate(
    'local', 
    { failureRedirect: '/login' }), (req, res) => {
        res.redirect('/product');
});

// // register
// app.post('/register', async (req, res) => {
//     try {
//         const salt = await bcrypt.genSalt(10);  
//         const hashPass = await bcrypt.hash(req.body.password, salt);

//         const newUser = new User({
//             name: req.body.name,
//             email: req.body.email,
//             password: hashPass,
//             phone:req.body.phone,
//             contract:req.body.contract,
//             Wallet:req.body.Wallet,
//             metaWallet:req.body.metaWallet
//         })
//         // adding the schemas of the user and cases
//         // .populate;
//         const user = await newUser.save();
//         res.status(200).json(user);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });


  
// // login
// app.post('/login', async (req, res) => {
//   try {
//     const user = await User.findOne({ name: req.body.name });

//     if (!user) {
//       return res.status(400).json({ error: "User not found" });
//     }

//     const isPasswordValid = await bcrypt.compare(req.body.password, user.password);

//     if (!isPasswordValid) {
//       return res.status(400).json({ error: "Wrong password" });
//     }

//     // Include additional fields (ContractAdd, Walletadd, Phone) in the response
//     const { password, ...userData } = user._doc;
//     // const { ContractAdd, Walletadd, Phone } = userData;

//     res.status(200).json({ userData});
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// app.get('/getlogin',async(req,res)=>{
//   const data = await User.findOne()
//   res.status(200).json(data);
// })


// // logout
// app.get('/logout', (req, res) => {
//   // Destroy the session to log the user out
//   req.session.destroy(err => {
//     if (err) {
//       console.error(err);
//       res.status(500).json({ error: 'Internal server error' });
//     } else {
//       // Redirect to the home page after logout
//       res.redirect('/');
//     }
//   });
// });

// app.get('/', (req, res) => {
//   const isLoggedIn = req.session.user ? true : false;
//   res.render('home', { isLoggedIn });
// });

module.exports = router;