var React = require('react');

var AppWrapper = require('./layout/layouts.jsx').AppWrapper;
var ContainerRow = require('./layout/layouts.jsx').ContainerRow;
var Section = require('./layout/layouts.jsx').Section;
var Row = require('./layout/layouts.jsx').Row;


var IngredientList = React.createClass({
  render: function(){
    var recipe = this.props.recipe;
    // console.log(recipe);
    var ingredients = recipe.get('ingredients');
    return(
      <div className="recipe-ingredients">
        <ul className="ingredients-list">
          {ingredients.map(function(item){
            return(
              <li key={item.cid} className="ingredients-item">
                <label>
                  <input type="checkbox" /> {item.get('measureQty')} {item.get('measureUnit')} {item.get('name')}
                </label>
              </li>
            );
          }) }
        </ul>
      </div>
    );
  }
});

var AdjustRecipeForm = React.createClass({
  getInitialState: function(){
    return {
      yieldQty: this.props.recipe.get('yieldQty')
    };
  },

  componentWillReceiveProps: function(nextProps){
    // var yieldQty = nextProps.recipe.get('yieldQty');
    this.setState({yieldQty: nextProps.recipe.get('yieldQty')});
  },

  handleYield: function(e){
    this.setState({yieldQty: e.target.value});
  },

  handleSubmit: function(e){
    e.preventDefault();
    var yieldQty = this.state.yieldQty;
    this.props.updateRecipe(yieldQty);
  },

  render: function(){
    var yieldQty = this.state.yieldQty;
    var recipe = this.props.recipe;
    
    return(
      <div className="recipe-adjust-controls">
        <form  onSubmit={this.handleSubmit}>
          <label className="form-inline">
            Makes &nbsp;
            <input className="form-control yield-num"
              onChange={this.handleYield}
              value={yieldQty}
              type="number" />
            &nbsp; {recipe.get('yieldName')}
          </label>
          <div className="measurements-control">
            <label htmlFor="measurement-us" className="radio-stack">
              <input defaultChecked id="measurement-us" type="radio" 
                name="measurements" value="imperial" /> 
              <span>US</span>
            </label>
            <label htmlFor="measurement-metric" className="radio-stack">
              <input disabled id="measurement-metric" type="radio" 
                name="measurements" value="metric" />
              <span>Metric</span>
            </label>
          </div>
          <input type="submit" value="Adjust Recipe" className="btn btn-default pull-right" />
        </form>
      </div>
    );
  }
});

var AdjustRecipeContainer = React.createClass({
  getInitialState: function(){

    var recipe = this.props.recipe;

    return {
      recipe: recipe
    };
  },

  // componentWillReceiveProps(nextProps){
  //   this.setState({recipe: nextProps.recipe});
  // },

  // getDefaultProps: function(){
  //   return {
  //     recipe: this.props.collection.get('hvjsf7q4')
  //   };
  // },

  updateRecipe: function(newYield){
    console.log(newYield);
    var recipe = this.state.recipe;

    recipe.updateYield(newYield);

    this.setState({recipe: recipe})
  },

  render: function(){
    var recipe = this.state.recipe;
    // console.log('AdjustRecipeContainer', recipe)
    return (
      <Row>
        <div className="col-sm-10 col-sm-offset-1">
          <div className="card card-recipe-adjust">
            <AdjustRecipeForm recipe={recipe} updateRecipe={this.updateRecipe} />
            <IngredientList recipe={recipe}/>
          </div>
        </div>
      </Row>
    );
  }
});

module.exports = {
  AdjustRecipeContainer: AdjustRecipeContainer
}