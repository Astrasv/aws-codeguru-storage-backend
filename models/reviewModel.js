const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  reviewarn: {
    type: String,
    required : [true , "Please add user CodeReviewARN"],
    unique: [true, "CodeReviewARN already used"]
  },
  type: {
    type: String,
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  },
},
{
  timestamps: true
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
