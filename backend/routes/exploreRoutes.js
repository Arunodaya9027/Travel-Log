const express = require('express')
const router = express.Router();
const Explore = require('../model/exploreModel.js');
const Card = require('../model/cardsModel.js');
// const data = require('../data/explores.json');

// router.post("/explore", async(req, res) => {
//     const explore = data.map((item) => new Explore(item));
//     explore.save()
//         .then((explore) => {
//             res.json(explore)
//         })
//         .catch((err) => {
//             res.json(err)
//         });
// })

router.get("/explore", async(req, res) => {
    const explore = await Explore.find({})
        .then((explore) => {
            res.json(explore)
        })
        .catch((err) => {
            res.json(err)
        });
});

// router.post("/explore", (req, res) => {
//     const id = req.body;
//     res.redirect()
// });

router.get("/explore/:id", async(req, res) => {
    const id = req.params.id;
    console.log(id);
    const cards = await Card.find({ primary: id })
        .then((cards) => {
            res.json(cards);
        })
        .catch((err) => {
            res.json(err);
        });
})

module.exports = router;