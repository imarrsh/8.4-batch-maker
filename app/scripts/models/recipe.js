var Backbone = require('backbone');

// ingredient model
var Ingredient = Backbone.Model.extend({
  defaults: {
    name: '',
    measureUnit: '',
    measureQty: ''
  }
});

var IngredientCollection = Backbone.Collection.extend({
  model: Ingredient
});



// recipe model
var Recipe = Backbone.Model.extend({
  idAttribute: 'objectId',
  // set the url root for the model
  urlRoot: 'https://mt-parse-server.herokuapp.com/Classes/Recipe',
  // default ingredients should be a collection
  defaults: {
    ingredients: new IngredientCollection() || []
  },
  parse: function(data){
    // convert array from parse server to collection
    data.ingredients = new IngredientCollection(data.ingredients);
    return data;
  },
  initialize: function(){
    // this.set('ingredients', new IngredientCollection());
  },
  // defaults: {
  //   name: 'Recipe Name',
  //   yieldName: 'servings',
  //   yieldQty: 1,
  //   yieldMeasurement: 'imperial',
  //   ingredients: []
  // },
  updateYield: function(newYield){ // 24 (or any number)
    var oldYield = this.get('yieldQty'); // 12
    // console.log(newYield / oldYield);
    this.updatePortions(newYield / oldYield);
    this.set('yieldQty', newYield);
  },
  updatePortions: function(yieldResult){
    var ingredients = this.get('ingredients'); // array of ing objects
    var updated = ingredients.map(function(ing){
       // return an object that looks like the one we mapped over.
       // this is pretty terrible, but it works for now...
       // TODO: make this better
      return {
        // "objectId": ing.objectId,
        "name": ing.name,
        "measureUnit": ing.measureUnit,
        "measureQty": ing.measureQty * yieldResult
      };
    });
    this.set('ingredients', updated);
    // console.log(this.get('ingredients'), this);
    // return this;
  },
  getRecipeState: function(){
    return this;
  }
});

var RecipeCollection = Backbone.Collection.extend({
  model: Recipe,
  url: 'https://mt-parse-server.herokuapp.com/Classes/Recipe',
  parse: function(data){
    return data.results;
  }
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
