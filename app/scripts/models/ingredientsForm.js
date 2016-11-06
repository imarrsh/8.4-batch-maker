var Backbone = require('backbone');

var IngredientFormBlock = Backbone.Model.extend({
  defaults: {
    name: '',
    measureUnit: '',
    measureQty: ''
  }
});

var IngredientFormBlockCollection = Backbone.Collection.extend({
  model: IngredientFormBlock
});


module.exports = {
  IngredientFormBlock: IngredientFormBlock,
  IngredientFormBlockCollection: IngredientFormBlockCollection
};
