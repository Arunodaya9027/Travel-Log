const express = require("express");
const router = express.Router();
const Explore = require("../model/exploreModel.js");
const Card = require("../model/cardsModel.js");
const Content = require("../model/contentModel.js");
const cloudinary = require('../utils/cloudinary');
// const multer = require('multer');
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//        cb(null, './uploads')
//     }, 
//     filename: function (req, file, cb) {
//        cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
//     }
// });
const upload = require('../utils/multer');
// router.use(upload.array('images', 15));

router.get("/explore/:country", async(req, res) => {
  try {
    const content = await Content.find({holder: req.params.country});
    console.log("content", content);
    res.status(200).json(content);
  } catch (error) {
    console.error("Error getting content:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// router.post("/india/cards", async(req, res) => {
//     const explore = data.map((item) => new Explore(item));
//     explore.save()
//         .then((explore) => {
//             res.json(explore)
//         })
//         .catch((err) => {
//             res.json(err)
//         });
// })

router.post("/createJourney", async (req, res) => {
  console.log("res", req.body);
  try {
    const {country, city, state, zipcode, description, image} = req.body;
    const newJourney = await Explore.create(req.body);
    console.log("req", newJourney);
    res.status(201).json(newJourney);
  } catch (error) {
    console.error("Error creating journey", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/journey/india", async (req, res) => {
  console.log("journey get");
  try {
    console.log("inside");
    const journeys = await Explore.find({country: "India"});
    res.status(200).json(journeys);
  } catch (error) {
    console.error("Error getting journeys:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/journey/dubai", async (req, res) => {
  console.log("journey get");
  try {
    console.log("inside");
    const journeys = await Explore.find({country: "Dubai"});
    res.status(200).json(journeys);
  } catch (error) {
    console.error("Error getting journeys:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/journey/paris", async (req, res) => {
  console.log("journey get");
  try {
    console.log("inside");
    const journeys = await Explore.find({country: "Paris"});
    res.status(200).json(journeys);
  } catch (error) {
    console.error("Error getting journeys:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/journey/newyork", async (req, res) => {
  console.log("journey get");
  try {
    console.log("inside");
    const journeys = await Explore.find({country: "New York City"});
    res.status(200).json(journeys);
  } catch (error) {
    console.error("Error getting journeys:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/journey/switzerland", async (req, res) => {
  console.log("journey get");
  try {
    console.log("inside");
    const journeys = await Explore.find({country: "Switzerland"});
    res.status(200).json(journeys);
  } catch (error) {
    console.error("Error getting journeys:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// router.post("/newCard", upload.single('image1'), async (req, res) => {
//   console.log("res", req.body);
//   try {
//     console.log(req.body);
//     const {country, city, state, placeNames, zip, description, expenditure, timings} = req.body;
//     const result = await Explore.findOne({ country: country, state: state, city: city});

//     console.log("primary",result);
//     if (result == undefined || result == null || result == []) {
//       return res.status(404).json({ error: "Primary location not found" });
//     }
//     const primary = result._id.toString();
//     const zipcode = result.zipCode;

//     const imageURIs = []; // array to hold the image urls
//     console.log(req.files);
//     if (req.files) { // if you are adding multiple files at a go
//       const files = req.files; // array of images
//       for (const file of files) {
//         const { path } = file;
//         console.log(path);
//         imageURIs.push(path);
//       }; // add the urls to object
//     }

//     const card = {
//       primary: primary, 
//       country: country,
//       state: state, 
//       city: city, 
//       zipcode: zipcode,
//       places: placeNames, 
//       description: description, 
//       expenditure: expenditure, 
//       timings: timings,
//       images: imageURIs
//       // cloudinary_id: publicId
//     };
    
//     // const images = req.file.path;
//     // console.log('Images:', images);
//     // const imageUrls = [];
//     // for (const image of images) {
//     //   const result = await cloudinary.uploader.upload(image);
//     //   imageUrls.push(result.secure_url);
//     // }
//     // const cl = await cloudinary.uploader.upload(images.path);
//     // const imageUrls = cl.secure_url;
//     // const publicId = cl.public_id;
//     // console.log("publicId", publicId);

//     const newCard = await new Card(card);
//     console.log("req", newCard);
//     await newCard.save();
//   } catch (error) {
//     console.error("Error creating card", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

router.post("/newCard", async (req, res) => {
  console.log("res", req.body);
  try {
    console.log(req.body);
    const {country, city, state, placeNames, zip, description, expenditure, timings, images} = req.body;
    const result = await Explore.findOne({ country: country, state: state, city: city});

    console.log("primary",result);
    if (result == undefined || result == null || result == []) {
      return res.status(404).json({ error: "Primary location not found" });
    }
    const primary = result._id.toString();
    const zipcode = result.zipCode;

    const card = {
      primary: primary, 
      country: country,
      state: state, 
      city: city, 
      zipcode: zipcode,
      places: placeNames,
      description: description, 
      expenditure: expenditure, 
      timings: timings,
      images: images
    };

    const newCard = await new Card(card);
    console.log("req", newCard);
    await newCard.save();
  } catch (error) {
    console.error("Error creating card", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// app.post('/upload', async (req, res) => {
//   try {
//     const result = await cloudinary.uploader.upload(req.file.path);
//     console.log(result);
//     // Save the Cloudinary URL or public ID to your database
//     res.send('File uploaded successfully');
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Error uploading file');
//   }
// });


router.get("/explore/:country/cards", async (req, res) => {
  console.log(req.params);
  const result = await Content.findOne({holder: "india"});
  console.log(result);
  const explore = await Explore.find({country: result.country})
    .then((explore) => {
      res.json(explore);
    })
    .catch((err) => {
      res.json(err);
    });
});

// router.post("/explore", (req, res) => {
//     const id = req.body;
//     res.redirect()
// });

router.get("/explore/:country/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const cards = await Card.find({ primary: id })
    .then((cards) => {
      res.json(cards);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
