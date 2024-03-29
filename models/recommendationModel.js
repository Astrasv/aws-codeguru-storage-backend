const mongoose = require('mongoose');

const recommendationSchema = new mongoose.Schema({
  filepath: {
    type: String,
    required : [true , "Please add filepath"],
  },
  startline: {
    type: Number,
  },
  endline:{
    type: Number,
  },
  description: {
    type: String,
  },
  severity: {
    type: String,
  },
  category: {
    type: String,
  },
  review: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review'
  },

});

const Recommendation = mongoose.model('Recommendation', recommendationSchema);

module.exports = Recommendation;
