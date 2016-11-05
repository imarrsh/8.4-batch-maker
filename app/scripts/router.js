var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var RecipeCollection = require('./models/recipe').RecipeCollection;

var AdjustRecipeContainer = require('./components/adjustRecipe.jsx').AdjustRecipeContainer;
var NewRecipeForm = require('./components/recipeForm.jsx').NewRecipeForm;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index', // home for user
    'login/': 'login', // place to login
    'recipe/new/': 'recipeNew',
    // 'recipe/:id: 'recipeView'
    // 'recipe/:id/edit': 'recipeEdit'
  },
  index: function(){
    var recipes = new RecipeCollection();
    // console.log(recipes);
    
    recipes.add([
      {
        "objectId": "hvjsf7q4", //id value from the db
        "name": "Sweet Potato Casserole",
        "author": "Jane Doe",
        "isPublic": false,
        "type": "Dinner",
        "prepTime": 15,
        "cookTime": 30,
        "cookTemp": 400,
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

    // eventually needs to be the home view
    // ReactDOM.render(
    //   React.createElement(AdjustRecipeContainer, {collection: recipes}),
    //   document.getElementById('app')
    // );

    
    // maybe need a join table for this data? TODO
  },
  login: function(){
    // login junk
  },
  recipeNew: function(){

    ReactDOM.render(
      React.createElement(NewRecipeForm),
      document.getElementById('app')
    );
  }
});

var router = new AppRouter();

module.exports = {
  router: router
};
