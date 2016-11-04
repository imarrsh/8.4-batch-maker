var Backbone = require('backbone');

var Recipe = Backbone.Model.extend({
  idAttribute: 'objectId',
  initialize: function(){
    this.set('ingredients', new IngredientCollection());
  },
  defaults: {
    name: 'Recipe Name',
    yeildName: 'servings',
    yeildQty: 1,
    yeildMeasurement: 'imperial'
  }
});

var RecipeCollection = Backbone.Model.extend({
  model: Recipe,
  // url: 'http://mtparseserver.herokuapp.com/classes/Recipe'
});

var Ingredient = Backbone.Model.extend({
  idAttribute: 'objectId',
  defaults: {
    qty: 1
  }
});

var IngredientCollection = Backbone.Model.extend({
  model: Ingredient,
  // url: 'http://mtparseserver.herokuapp.com/classes/Ingredient'
});

module.exports = {
  Recipe: Recipe,
  RecipeCollection: RecipeCollection,
  Ingredient: Ingredient,
  IngredientCollection: IngredientCollection
};

// recipe model sample
// var data = {
//   "objectId": "hvjsf7q4", //id value from the db
//   "name": "Recipe Name",
//   "yeildName": "Recipe Name",
//   "yeildQty": 1,
//   "yeildMeasurement": 'imperial',
//   "ingredients": [
//     {
//       "objectId": "fnjkw47e", // foreign key
//       "name": "ingredient name",
//       "measureUnit": "ounce",
//       "measuerQty": 2
//     },
//     {
//       "objectId": "fnjkw47e", // foreign key
//       "name": "ingredient name",
//       "measureUnit": "cup",
//       "measuerQty": 2
//     }
//   ]
// };
