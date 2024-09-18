const express = require("express");
const router = express.Router();
const { getDetails, addDetails, updateDetails, deleteDetails } = require("../../controllers/Admin/details.controller.js");
const upload = require("../../middlewares/multer.middleware.js")
const cloudinary = require("../../utils/cloudinary.js");


router.post("/getDetails", getDetails);


router.post("/addDetails", upload.single("profile"),
async (req,res)=>{
    console.log(req.file.path)


    const x= await cloudinary.uploader.upload(req.file.path)
    console.log("cloudianry",x)

    const newvar = new Image({Image_Url:x.secure_url});
    newvar.save().then(() => console.log('kaam ho gaya'));
    
    // Delete example_file.txt 
     fs.unlink((req.file.path),
     function(err){ 
     if (err) console.log(err); 
     else console.log("\nDeleted file");
   }) 
   res.json({
    msg:"file uploaded",
    your_url:{image_url:x.secure_url}
   })
},
addDetails);
// router.post("/addDetails", upload.single("profile"), addDetails);

router.put("/updateDetails/:id", upload.single("profile"), updateDetails);

router.delete("/deleteDetails/:id", deleteDetails);

module.exports = router;
