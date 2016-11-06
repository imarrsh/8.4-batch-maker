var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var RecipeCollection = require('./models/recipe').RecipeCollection;

var LoginContainer = require('./components/loginSignup.jsx').LoginContainer;
var HomeContainer = require('./components/app.jsx').HomeContainer;
var NewRecipeForm = require('./components/recipeForm.jsx').NewRecipeForm;
var RecipePreview = require('./components/recipePreview.jsx').RecipePreview;
var AdjustRecipeContainer = require('./components/adjustRecipe.jsx').AdjustRecipeContainer;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index', // home for user
    'login/': 'login', // place to login
    'recipe/new/': 'recipeNew', // new recipe
    'recipe/:id' : 'recipePreviewId', // the correct recipe preview
    'recipe/:id/edit': 'recipeEdit', // recipe edit
    // temporary routes
    'recipe/': 'recipePreview', // recipe view 
    'adjust/' : 'adjust' // recipe adjuster
  },
  initialize: function(){
    this.recipes = new RecipeCollection();
    
    this.recipes.add([
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
  },
  index: function(){


    ReactDOM.render(
      React.createElement(HomeContainer),
      document.getElementById('app')
    );
  },
  login: function(){

    ReactDOM.render(
      React.createElement(LoginContainer),
      document.getElementById('app')
    );
  },
  recipeNew: function(){

    ReactDOM.render(
      React.createElement(NewRecipeForm),
      document.getElementById('app')
    );
  },
  recipePreviewId: function(id){
    
    // ReactDOM.render(
    //   React.createElement(RecipePreview, {model: id}),
    //   document.getElementById('app')
    // );
  },
  recipeEdit: function(id){
    // ReactDOM.render(
    //   React.createElement(RecipeEdit, {model: id}),
    //   document.getElementById('app')
    // );
  },
  recipePreview: function(){
    
    ReactDOM.render(
      React.createElement(RecipePreview),
      document.getElementById('app')
    );
  },
  adjust: function(){

    ReactDOM.render(
      React.createElement(AdjustRecipeContainer, {collection: this.recipes}),
      document.getElementById('app')
    );
  }
});

var router = new AppRouter();

module.exports = {
  router: router
};
