const mongoose = require('mongoose');
const { Schema } = mongoose;
const timestamp = require('../modules/timestamp');

const commentSchema = new Schema({
  product: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Product'
  },
  author: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User'
  },
  text: String,
  mark: Number
});

commentSchema.plugin(timestamp);

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;