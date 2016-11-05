var React = require('react');

var AppWrapper = require('./layout/layouts.jsx').AppWrapper;
var ContainerRow = require('./layout/layouts.jsx').ContainerRow;
var Section = require('./layout/layouts.jsx').Section;
var Row = require('./layout/layouts.jsx').Row;
 

var IngredientList = React.createClass({
  render: function(){
    var recipe = this.props.recipe;
    console.log(recipe);
    var ingredients = recipe.get('ingredients');
    return(
      <div className="recipe-ingredients">
        <ul className="ingredients-list">
          {ingredients.map(function(item){
            return(
              <li key={item.objectId} className="ingredients-item">
                <label>
                  <input type="checkbox" /> {item.measureQty} {item.measureUnit} {item.name}
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
      yield: this.props.recipe.get('yieldQty')
    };
  },
  handleYield: function(e){
    this.setState({yield: e.target.value});
  },
  handleSubmit: function(e){
    e.preventDefault();
    var recipe = this.props.recipe;
    recipe.updateYield(this.state.yield);
    this.props.updateRecipe(recipe.getRecipeState());
  },
  render: function(){
    var recipe = this.props.recipe;
    // console.log(recipe.get('yieldQty'));
    return(
      <div className="recipe-adjust-controls">
        <form  onSubmit={this.handleSubmit}>
          <label className="form-inline">
            Makes &nbsp;
            <input className="form-control yield-num"
              defaultValue={recipe.get('yieldQty')}
              onChange={this.handleYield} 
              type="number"
            />&nbsp; {recipe.get('yieldName')}
          </label>
          <div className="measurements-control">
            <label htmlFor="measurement-us" className="radio-stack">
              <input defaultChecked id="measurement-us" type="radio" name="measurements" value="imperial" /> 
              <span>US</span>
            </label>
            <label htmlFor="measurement-metric" className="radio-stack">
              <input disabled id="measurement-metric" type="radio" name="measurements" value="metric" />
              <span>Metric</span>
            </label>
          </div>
          <input type="submit" value="Adjust Recipe" className="btn btn-default" />
        </form>
      </div>
    );
  }
});

var AdjustRecipeContainer = React.createClass({
  getInitialState: function(){
    return {
      recipe: this.props.collection.get('hvjsf7q4')
    };
  },
  // getDefaultProps: function(){
  //   return {
  //     recipe: this.props.collection.get('hvjsf7q4')
  //   };
  // },
  updateRecipe: function(updatedRecipe){
    this.setState({recipe: updatedRecipe})
  },
  render: function(){
    var recipe = this.state.recipe;
    return (  
      <AppWrapper>
        <Section>
          <ContainerRow>

            <div className="col-md-6 col-md-offset-3">

            <div className="card card-recipe-adjust">
              <AdjustRecipeForm recipe={recipe} updateRecipe={this.updateRecipe} />
              <IngredientList recipe={recipe}/>
            </div>

          </div>

          </ContainerRow>
        </Section>
      </AppWrapper>
    );
  }
});

module.exports = {
  AdjustRecipeContainer: AdjustRecipeContainer
}