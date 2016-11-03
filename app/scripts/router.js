var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var AdjustRecipeContainer = require('./components/adjustRecipe.jsx').AdjustRecipeContainer;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'login/': 'login'
  },
  index: function(){
    console.log('hi');
    ReactDOM.render(
      React.createElement(AdjustRecipeContainer),
      document.getElementById('app')
    );
  },
  login: function(){

  }
});

var router = new AppRouter();

module.exports = {
  router: router
};
