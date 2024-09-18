// const upload = require("../../middlewares/multer.middleware.js")
const cloudinary = require("../utils/cloudinary");
// const fs = require('fs'); 
// const mongoose =require("mongoose")


const uploadToCloudinary = (fileBuffer, folder) => {
    return new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        { folder: folder },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      ).end(fileBuffer);
    });
  };
  
  module.exports = { uploadToCloudinary };