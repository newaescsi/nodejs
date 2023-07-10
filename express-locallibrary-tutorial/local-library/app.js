// Importieren des Mongoose-Moduls
const mongoose = require("mongoose");

// Setzen von `strictQuery: false`, um global die Filterung von Eigenschaften zu ermöglichen, die nicht im Schema vorhanden sind
// Hinzugefügt, um vorbereitende Warnungen für Mongoose 7 zu entfernen.
// Siehe: https://mongoosejs.com/docs/migrating_to_6.html#strictquery-is-removed-and-replaced-by-strict
mongoose.set("strictQuery", false);

// Definieren der Datenbank-URL, zu der eine Verbindung hergestellt werden soll.
// const mongoDB = "mongodb://127.0.0.1/my_database";
// const mongoDB = mongodb+srv://your_user_name:your_password@cluster0.lz91hw2.mongodb.net/local_library?retryWrites=true&w=majority
// const mongoDB = "mongodb+srv://:<>@cluster0.7grygap.mongodb.net/local_library?retryWrites=true&w=majority"
//const mongoDB1 = "mongodb+srv://<sugardb>:<xiA8C1W2UImP1siH>@cluster0.7grygap.mongodb.net/local_library?retryWrites=true&w=majority"
//ac-omjnfef-shard-00-01.7grygap.mongodb.net:27017
//ac-omjnfef-shard-00-00.7grygap.mongodb.net:27017
//ac-omjnfef-shard-00-02.7grygap.mongodb.net:27017


// Auf Verbindung zur Datenbank warten und bei Problemen einen Fehler protokollieren
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}



var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
// Mongoose-Verbindung einrichten
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
//const mongoDB2 = "ac-omjnfef-shard-00-01.7grygap.mongodb.net:27017";
const mongoDB = "mongodb+srv://<sugardb>:<xiA8C1W2UImP1siH>@cluster0.7grygap.mongodb.net/local-library?retryWrites=true&w=majority"

///main().catch((err) => console.log(err));
///async function main() {
///  await mongoose.connect(mongoDB);
///}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
