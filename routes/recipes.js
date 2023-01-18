var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([{
    id: 1,
    name: "Recipe1",
    ingredients: ["egg", "bacon"],
    instruction: "Fry the ingredients",
  }, {
    id: 2,
    name: "Recipe2",
    ingredients: ["apple","banana"],
    instruction: "Cut the ingredients"
  }]);
});

module.exports = router;

