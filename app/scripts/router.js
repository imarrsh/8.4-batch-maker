var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var RecipeCollection = require('./models/recipe').RecipeCollection;

var AdjustRecipeContainer = require('./components/adjustRecipe.jsx').AdjustRecipeContainer;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'login/': 'login'
  },
  index: function(){
    var recipes = new RecipeCollection();

    console.log('hi');
    ReactDOM.render(
      React.createElement(AdjustRecipeContainer, {collection: recipes}),
      document.getElementById('app')
    );

    recipes.add([
      {
        "objectId": "hvjsf7q4", //id value from the db
        "name": "Recipe Name",
        "yeildName": "Recipe Name",
        "yeildQty": 1,
        "yeildMeasurement": 'imperial',
        "ingredients": [
          {
            "objectId": "fnjkw47e", // foreign key
            "name": "ingredient name",
            "measureUnit": "ounce",
            "measuerQty": 2
          },
          {
            "objectId": "fnjkw47e", // foreign key
            "name": "ingredient name",
            "measureUnit": "cup",
            "measuerQty": 2
          }
        ]
      }
    ]);

  },
  login: function(){

  }
});

var router = new AppRouter();

module.exports = {
  router: router
};
