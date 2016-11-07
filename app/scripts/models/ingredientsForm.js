var Backbone = require('backbone');

var IngredientBlock = Backbone.Model.extend({
  // defaults: {
  //   name: '',
  //   measureUnit: '',
  //   measureQty: ''
  // }
});

var IngredientBlockCollection = Backbone.Collection.extend({
  model: IngredientBlock
});


module.exports = {
  IngredientBlock: IngredientBlock,
  IngredientBlockCollection: IngredientBlockCollection
};
