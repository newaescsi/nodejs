const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  name: { type: String, required: true, minLength: 3, maxLength: 100 }
});

// Virtuelles Attribut für die URL des Genres
GenreSchema.virtual('url').get(function() {
  return '/genres/' + this._id;
});

// Exportieren des Modells
module.exports = mongoose.model('Genre', GenreSchema);