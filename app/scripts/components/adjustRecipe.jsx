var React = require('react');

var AppWrapper = require('./layout/layouts.jsx').AppWrapper;
var ContainerRow = require('./layout/layouts.jsx').ContainerRow;
var Section = require('./layout/layouts.jsx').Section;
var Row = require('./layout/layouts.jsx').Row;
 

var IngredientList = React.createClass({
  render: function(){

    return(
      <div className="recipe-ingredients">
        <ul className="ingredients-list">
          <li className="ingredients-item">
            <label>
              <input type="checkbox" /> 2 cups flour
            </label>
          </li>
          <li className="ingredients-item">
            <label>
              <input type="checkbox" /> 2 1/2 cups milk
            </label>
          </li>
        </ul>
      </div>
    );
  }
});

var AdjustRecipeForm = React.createClass({
  render: function(){
    console.log(this.props.collection);
    return(
      <div className="recipe-adjust-controls">
        <form>
          <label className="form-inline">
            Makes <input className="form-control yield-num" type="number" placeholder="16"/> servings
          </label>
          <div className="measurements-control">
            <label htmlFor="measurement-us" className="radio-stack">
              <input id="measurement-us" type="radio" name="measurements" value="imperial" /> 
              <span>US</span>
            </label>
            <label htmlFor="measurement-metric" className="radio-stack">
              <input id="measurement-metric" type="radio" name="measurements" value="metric" />
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
  render: function(){
    return (  
      <AppWrapper>
        <Section>
          <ContainerRow>

            <div className="col-md-6 col-md-offset-3">

            <div className="card card-recipe-adjust">
              <AdjustRecipeForm />
              <div className="recipe-ingredients">
                <ul className="ingredients-list">
                  <li className="ingredients-item">
                    <label>
                      <input type="checkbox" /> 2 cups flour
                    </label>
                  </li>
                  <li className="ingredients-item">
                    <label>
                      <input type="checkbox" /> 2 1/2 cups milk
                    </label>
                  </li>
                </ul>
              </div>
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