const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "Author", required: true },
  summary: { type: String, required: true },
  isbn: { type: String, required: true },
  genre: [{ type: Schema.Types.ObjectId, ref: "Genre" }],
});

// Virtuelles Attribut für die URL des Buches
BookSchema.virtual("url").get(function () {
  // Wir verwenden keine Pfeilfunktion, da wir das this-Objekt benötigen
  return `/catalog/book/${this._id}`;
});

// Modell exportieren
module.exports = mongoose.model("Book", BookSchema);