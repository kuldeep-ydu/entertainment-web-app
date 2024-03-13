const mongoose = require('mongoose');

const ThumbnailSchema = new mongoose.Schema({
  small: {
    type: String,
    required: true,
  },
  medium: String,
  large: {
    type: String,
    required: true,
  },
});

ThumbnailSchema.set('toJSON', {
  transform(document, returnedObject) {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const MediaSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  thumbnail: {
    trending: ThumbnailSchema,
    regular: {
      type: ThumbnailSchema,
      required: true,
    },
  },
  year: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  isTrending: {
    type: Boolean,
    required: true,
  },
});

MediaSchema.set('toJSON', {
  transform(document, returnedObject) {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Media = mongoose.model('Media', MediaSchema);

module.exports = Media;
