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

// special parse model layer for handling parse junk
var ParseModel = Backbone.Model.extend({
  // overload backbone save
  save: function(attributes, options){
    // remove some data that the server doesnt need
    delete this.attributes.createdAt;
    delete this.attributes.updatedAt;
    // re-delegate back to Backbone
    return Backbone.Model.prototype.save.call(this, attributes, options);
  }
});


// recipe model
var Recipe = ParseModel.extend({
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

  updateYield: function(newYield){ // 24 (or any number)
    var oldYield = this.get('yieldQty'); // 12
    // console.log(newYield / oldYield);
    this.updatePortions(newYield / oldYield);
    this.set('yieldQty', newYield);
  },

  updatePortions: function(yieldResult){
    var ingredients = this.get('ingredients'); // array of ing objects
    var updated = ingredients.map(function(ingredient){

      var measureQty = ingredient.get('measureQty');
      ingredient.set('measureQty', measureQty * yieldResult);

      return ingredient;
    });
    this.set('ingredients', new IngredientCollection(updated));
  }

}, {
  // class methods
  deleteRecipe: function(recipe, callback){
    recipe.destroy({success: function(model, response, options){
      callback();
    }});
  }
});

var RecipeCollection = Backbone.Collection.extend({
  model: Recipe,

  url: function(){
    var user = JSON.parse(localStorage.getItem('user'));
    // setup the url to filter  only the user's own recipes
    var url;

    if (user) {
      url = 'https://mt-parse-server.herokuapp.com/Classes/Recipe' +
      encodeURI('?where={"user":{"objectId":"' + user.objectId +
        '","__type":"Pointer","className":"_User"}}'
      );
    }

    return url;
  },

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
