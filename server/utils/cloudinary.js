require('dotenv').config();

const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const handleUpload = async (file) => {
  const response = await cloudinary.uploader.upload(file, {
    folder: 'EntertainmentWebApp/user-avatars',
    resource_type: 'auto',
  });
  return response;
};

module.exports = handleUpload;
