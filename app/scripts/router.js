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
    // console.log(recipes);
    
    recipes.add([
      {
        "objectId": "hvjsf7q4", //id value from the db
        "name": "Sweet Potato Casserole",
        "yieldName": "servings",
        "yieldQty": 12,
        "yieldMeasurement": 'imperial',
        "ingredients": [
          {
            "objectId": "fnjkw47e", 
            "name": "sweet potoato",
            "measureUnit": "pound",
            "measureQty": 2
          },
          {
            "objectId": "fnjkw47f", 
            "name": "marshmallows",
            "measureUnit": "cup",
            "measureQty": 2
          },
          {
            "objectId": "fnjkw47x", 
            "name": "brown sugar",
            "measureUnit": "cup",
            "measureQty": 1.5
          },
          {
            "objectId": "dnjkw47x", 
            "name": "crust",
            "measureUnit": "container",
            "measureQty": 1
          },
          {
            "objectId": "dnfkw47z", 
            "name": "banana",
            "measureUnit": "",
            "measureQty": 1
          }
        ]
      }
    ]);

    ReactDOM.render(
      React.createElement(AdjustRecipeContainer, {collection: recipes}),
      document.getElementById('app')
    );

    
    // maybe need a join table for this data?
  },
  login: function(){
    // login junk
  }
});

var router = new AppRouter();

module.exports = {
  router: router
};
