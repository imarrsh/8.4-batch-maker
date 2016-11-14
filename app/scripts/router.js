var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var User = require('./models/user').User;
var Recipe = require('./models/recipe').Recipe;

var parseHeaders = require('./parseUtils').parseHeaders;

var RecipeCollection = require('./models/recipe').RecipeCollection;

var LoginContainer = require('./components/loginSignup.jsx').LoginContainer;
var HomeContainer = require('./components/app.jsx').HomeContainer;
var NewEditRecipeForm = require('./components/recipeForm.jsx').NewEditRecipeForm;
var RecipePreviewContainer = require('./components/recipePreview.jsx').RecipePreviewContainer;
var AdjustRecipeContainer = require('./components/adjustRecipe.jsx').AdjustRecipeContainer;


var AppRouter = Backbone.Router.extend({
  'routes': {
    '': 'index', // home for user, recipe list view
    'login/': 'login', // place to login
    'recipe/new/': 'recipeNewEdit', // new recipe
    'recipe/:id/edit/': 'recipeNewEdit', // recipe edit
    'recipe/:id/': 'recipePreview', // the correct recipe preview
    // temporary routes
    // 'recipe/': 'recipePreview', // recipe view
    'adjust/': 'adjust', // recipe adjuster
    'logout/': 'logout'
  },

  checkUser: function(){
    var user = new User(JSON.parse(localStorage.getItem('user')));

    return user;
  },

  initialize: function(){
    if (!this.checkUser()){
      this.navigate('login/', {trigger: true, replace: true});
    }
    parseHeaders('mtparseserver', 'thompson1');
  },

  index: function(){

    ReactDOM.render(
      React.createElement(HomeContainer, {router: this, collection: this.recipes}),
      document.getElementById('app')
    );
  },

  login: function(){

    ReactDOM.render(
      React.createElement(LoginContainer, {router: this}),
      document.getElementById('app')
    );
  },

  recipeNewEdit: function(recipeId){

    ReactDOM.render(
      React.createElement(NewEditRecipeForm, {recipeId: recipeId, router: this}),
      document.getElementById('app')
    );
  },

  recipePreview: function(recipeId){

    ReactDOM.render(
      React.createElement(RecipePreviewContainer, {recipeId: recipeId, router: this}),
      document.getElementById('app')
    );
  },

  adjust: function(){

    ReactDOM.render(
      React.createElement(AdjustRecipeContainer, {collection: this.recipes, router: this}),
      document.getElementById('app')
    );
  },

  logout: function(){
    var self = this;
    User.logOut(function(){
      self.navigate('#login/', {trigger: true, replace: true});
    });
  }

});

var router = new AppRouter();

module.exports = {
  router: router
};
