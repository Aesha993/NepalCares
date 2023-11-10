const mongoose = require('mongoose');

const descriptionSchema = new mongoose.Schema({
  id: String,
  details: String,
<<<<<<< HEAD
  image: String,
=======
  image : String,
>>>>>>> 31dbd7b27ae01d7998773bb28ae3606acd0d3156
},{collection: 'description'});

const Description = mongoose.model('Description', descriptionSchema);

module.exports = Description;
