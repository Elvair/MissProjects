const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const projectSchema = new Schema({
    templates: { type: String, enum: ['searcher','onlineService','socialNetwork','onlineShop'] },
    code: String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;