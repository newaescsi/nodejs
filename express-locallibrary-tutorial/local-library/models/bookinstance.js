const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookInstanceSchema

 = new Schema({
  book: { type: Schema.Types.ObjectId, ref: "Book", required: true }, // Verweis auf das zugehörige Buch
  imprint: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: ["Available", "Maintenance", "Loaned", "Reserved"],
    default: "Maintenance",
  },
  due_back: { type: Date, default: Date.now },
});

// Virtuelles Attribut für die URL der Buchinstanz
BookInstanceSchema.virtual("url").get(function () {
  // Wir verwenden keine Pfeilfunktion, da wir das this-Objekt benötigen
  return `/catalog/bookinstance/${this._id}`;
});

// Modell exportieren
module.exports = mongoose.model("BookInstance", BookInstanceSchema);