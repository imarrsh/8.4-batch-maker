var React = require('react');

var RecipeCollection = require('../models/recipe').RecipeCollection;

var AppWrapper = require('./layout/layouts.jsx').AppWrapper;
var ContainerRow = require('./layout/layouts.jsx').ContainerRow;
var Section = require('./layout/layouts.jsx').Section;
var Row = require('./layout/layouts.jsx').Row;

var HomeContainer = React.createClass({
  getInitialState: function(){
    var recipes = new RecipeCollection();
    return {
      recipes: recipes
    };
  },
  componentWillMount(){
    var recipes = this.state.recipes;

    recipes.fetch().then(() => this.setState({recipes: recipes}) );
  },
  componentDidMount: function(){
    var router = this.props.router;
    // router.navigate('#login/', {trigger: true});
    // console.log('router', this.props.router);
  },
  render: function(){
    var recipes = this.state.recipes;
    return(
      <AppWrapper>
        <ContainerRow>
          <div className="col-md-10 col-md-offset-1">
            <div className="recipe-list">
              <h1>My Recipes</h1>
              <div className="list-group">
                {recipes.map(function(recipe){
                  return(
                    <a key={recipe.get('objectId')} 
                       href={'#recipe/' + recipe.get('objectId') + '/'} 
                       className="list-group-item">
                         {recipe.get('name')}
                    </a>
                  );
                  
                })}
              </div>
            </div>
          </div>
        </ContainerRow>
      </AppWrapper>
    )
  }
});

module.exports = {
  HomeContainer: HomeContainer
}
