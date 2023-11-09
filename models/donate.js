const mongoose = require('mongoose');

const descriptionSchema = new mongoose.Schema({
  id: String,
  details: String,
},{collection: 'description'});

const Description = mongoose.model('Description', descriptionSchema);

module.exports = Description;
