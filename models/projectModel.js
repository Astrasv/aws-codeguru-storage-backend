const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required : [true , "Please add project name"],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
},
{
  timestamps: true
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
