const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  first_name: { type: String, required: true, maxLength: 100 },
  family_name: { type: String, required: true, maxLength: 100 },
  date_of_birth: { type: Date },
  date_of_death: { type: Date },
});

// Virtuelles Attribut für den vollständigen Namen des Autors
AuthorSchema.virtual("name").get(function () {
  // Um Fehler zu vermeiden, wenn ein Autor keinen Nachnamen oder Vornamen hat,
  // stellen wir sicher, dass wir die Ausnahme behandeln, indem wir für diesen Fall einen leeren String zurückgeben
  let fullname = "";
  if (

this.first_name && this.family_name) {
    fullname = `${this.family_name}, ${this.first_name}`;
  }

  return fullname;
});

// Virtuelles Attribut für die URL des Autors
AuthorSchema.virtual("url").get(function () {
  // Wir verwenden keine Pfeilfunktion, da wir das this-Objekt benötigen
  return `/catalog/author/${this._id}`;
});

// Modell exportieren
module.exports = mongoose.model("Author", AuthorSchema);