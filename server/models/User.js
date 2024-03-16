const mongoose = require('mongoose');
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: isEmail,
      message: 'Please provide a valid email',
    },
  },
  avatar: {
    type: String,
    unique: true,
    required: true,
  },
  passwordHash: {
    type: String,
    unique: true,
    required: true,
  },
  bookmarks: [
    {
      ref: 'Media',
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
});

userSchema.set('toJSON', {
  transform(document, returnedObject) {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwordHash;
  },
});

module.exports = mongoose.model('User', userSchema);
