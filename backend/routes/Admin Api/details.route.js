const express = require("express");
const router = express.Router();
const { getDetails, addDetails, updateDetails, deleteDetails } = require("../../controllers/Admin/details.controller.js");
const upload = require("../../middlewares/multer.middleware.js")
const cloudinary = require("../../utils/cloudinary.js");


router.post("/getDetails", getDetails);


router.post("/addDetails", upload.single("profile"), 

function (req, res) {
    cloudinary.uploader.upload(req.file.path, function (err, result){
      if(err) {
        console.log(err);
        return res.status(500).json({
          success: false,
          message: "Error"
        })
      }
  
      res.status(200).json({
        success: true,
        message:"Uploaded!",
        data: result
      })
    })
  },

addDetails);
// router.post("/addDetails", upload.single("profile"), addDetails);

router.put("/updateDetails/:id", upload.single("profile"), updateDetails);

router.delete("/deleteDetails/:id", deleteDetails);

module.exports = router;
