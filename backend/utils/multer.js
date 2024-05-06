const multer = require('multer');
const cloudinary = require('./cloudinary');
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const path = require('path');

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "uploads",
        allowed_format: ["jpg", "png", "webp", "jpeg", "svg"], // supports promises as well
        public_id: (req, file) => {
            console.log(
                new Date().toISOString().replace(/:/g, "_") + file.originalname
            );
            return (
                new Date().toISOString().replace(/:/g, "_") + file.originalname
            );
        },
    },
});
const upload = multer ({ storage: storage });
module.exports = upload;