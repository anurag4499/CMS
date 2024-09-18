const express = require("express");
const mongoose =require("mongoose")
const router = express.Router();
const fs = require('fs'); 
const { getDetails, addDetails, updateDetails, deleteDetails } = require("../../controllers/Admin/details.controller.js");
const upload = require("../../middlewares/multer.middleware.js")
const cloudinary = require("../../utils/cloudinary.js");
const {uploadImage} = require("../../utils/uploder.js")


router.post("/getDetails", getDetails);


router.post("/addDetails", upload.single("profile"), addDetails);
// router.post("/addDetails", upload.single("profile"), addDetails);

router.put("/updateDetails/:id", upload.single("profile"), updateDetails);

router.delete("/deleteDetails/:id", deleteDetails);

module.exports = router;
