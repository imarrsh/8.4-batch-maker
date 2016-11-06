var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var RecipeCollection = require('./models/recipe').RecipeCollection;

var LoginContainer = require('./components/loginSignup.jsx').LoginContainer;
var HomeContainer = require('./components/app.jsx').HomeContainer;
var NewRecipeForm = require('./components/recipeForm.jsx').NewRecipeForm;
var RecipePreviewContainer = require('./components/recipePreview.jsx').RecipePreviewContainer;
var AdjustRecipeContainer = require('./components/adjustRecipe.jsx').AdjustRecipeContainer;

var AppRouter = Backbone.Router.extend({
  'routes': {
    '': 'index', // home for user
    'login/': 'login', // place to login
    'recipe/new/': 'recipeNew', // new recipe
    'recipe/:id': 'recipePreviewId', // the correct recipe preview
    'recipe/:id/edit': 'recipeEdit', // recipe edit
    // temporary routes
    'recipe/': 'recipePreview', // recipe view
    'adjust/': 'adjust' // recipe adjuster
  },
  initialize: function(){
    this.recipes = new RecipeCollection();

    this.recipes.add([
      {
        'objectId': 'hvjsf7q4', //id value from the db
        'name': 'Sweet Potato Casserole',
        'image': 'http://www.seriouseats.com/recipes/assets_c/2015/11/20151110-sweet-potato-casserole-vicky-wasik-9-thumb-1500xauto-427744.jpg',
        'author': 'Jane Doe',
        'isPublic': false,
        'type': 'Side',
        'prepTime': 15,
        'cookTime': 30,
        'cookTemp': 400,
        'cookTempScale': 'F',
        'yieldName': 'servings',
        'yieldQty': 12,
        'yieldMeasurement': 'imperial',
        'notes': 'This Sweet Potato Casserole Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo culpa, facere illo repudiandae dolorem dolore veritatis esse nulla cupiditate quas voluptates quasi eos iure quibusdam eveniet accusamus officiis! Dolorem, esse.',
        'ingredients': [
          {
            'objectId': 'fnjkw47e',
            'name': 'sweet potoato',
            'measureUnit': 'pound',
            'measureQty': 2
          },
          {
            'objectId': 'fnjkw47f',
            'name': 'marshmallows',
            'measureUnit': 'cup',
            'measureQty': 2
          },
          {
            'objectId': 'fnjkw47x',
            'name': 'brown sugar',
            'measureUnit': 'cup',
            'measureQty': 1.5
          },
          {
            'objectId': 'dnjkw47x',
            'name': 'crust',
            'measureUnit': 'container',
            'measureQty': 1
          },
          {
            'objectId': 'dnfkw47z',
            'name': 'banana',
            'measureUnit': '',
            'measureQty': 1
          }
        ]
      },
      {
        'objectId': 'evjsf7q1', //id value from the db
        'name': 'Green Bean Casserole',
        'image': 'http://www.seriouseats.com/recipes/assets_c/2013/11/20131024-green-bean-cippolini-mushroom-thanksgiving-recipe-22-thumb-1500xauto-366559.jpg',
        'author': 'Jane Doe',
        'isPublic': false,
        'type': 'Side',
        'prepTime': 15,
        'cookTime': 30,
        'cookTemp': 400,
        'yieldName': 'servings',
        'yieldQty': 12,
        'yieldMeasurement': 'imperial',
        'notes': 'This Green Bean Casserole lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo culpa, facere illo repudiandae dolorem dolore veritatis esse nulla cupiditate quas voluptates quasi eos iure quibusdam eveniet accusamus officiis! Dolorem, esse.',
        'ingredients': [
          {
            'objectId': 'fnjkw47e',
            'name': 'green beans',
            'measureUnit': 'pound',
            'measureQty': 2
          },
          {
            'objectId': 'fnjkw47f',
            'name': 'crunchy onions',
            'measureUnit': 'cup',
            'measureQty': 2
          },
          {
            'objectId': 'fnjkw47x',
            'name': 'cream of mushroom soup',
            'measureUnit': 'can',
            'measureQty': 2
          },
          {
            'objectId': 'dnjkw47x',
            'name': 'shredded cheese',
            'measureUnit': 'bag',
            'measureQty': 2
          }
        ]
      }
    ]);
  },
  index: function(){

    ReactDOM.render(
      React.createElement(HomeContainer, {collection: this.recipes}),
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
    var model = this.recipes.get(id)
    ReactDOM.render(
      React.createElement(RecipePreviewContainer, {model: model}),
      document.getElementById('app')
    );
  },
  recipeEdit: function(id){
    // ReactDOM.render(
    //   React.createElement(RecipeEdit, {model: id}),
    //   document.getElementById('app')
    // );
  },
  recipePreview: function(){

    ReactDOM.render(
      React.createElement(RecipePreviewContainer, {collection: this.recipes}),
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
