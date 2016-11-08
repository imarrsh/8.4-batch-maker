var Backbone = require('backbone');

var IngredientBlock = Backbone.Model.extend({
  defaults: {
    name: '',
    measureUnit: '',
    measureQty: 0
  }
});

var IngredientBlockCollection = Backbone.Collection.extend({
  model: IngredientBlock,
  // url: 'https://mt-parse-server.herokuapp.com/Classes/Recipe'
});


module.exports = {
  IngredientBlock: IngredientBlock,
  IngredientBlockCollection: IngredientBlockCollection
};
