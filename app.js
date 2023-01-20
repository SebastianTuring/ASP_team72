var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var recipesRouter = require('./routes/recipes');

require('dotenv').config();

const mongoose = require('mongoose');
main().catch(err => console.log(err));

async function main() {
  const user = process.env.DB_USER
  const pw = process.env.DB_PASSWD
  await mongoose.connect(`mongodb+srv://${user}:${pw}@asp-team72.4dbqihm.mongodb.net/?retryWrites=true&w=majority`);

  const recipeSchema = new mongoose.Schema({
    title: String,
    description: String,
    instruction: String,
    ingredients: [String],
    pictures: [String],
    tags: [String]
  });

  const Recipe = mongoose.model('Recipe', recipeSchema);

  const pizzaRecipe = new Recipe({ 
    title: 'Pizza', 
    description: "Delicious",
    instruction: "Make a dough and put it in the oven.",
    ingredients: ["cheese","tomato","flour"],
    pictures: ["https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_1280.jpg"],
    tags: ["cheese", "delicious"]
   });

   await pizzaRecipe.save();
   const recipes = await Recipe.find();
   console.log(recipes);

}

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/recipes', recipesRouter);

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

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = app;
