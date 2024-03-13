const mongoose = require('mongoose');

const BookmarkSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  media: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Media',
  },
});

const Bookmark = mongoose.model('Bookmark', BookmarkSchema);

module.exports = Bookmark;
