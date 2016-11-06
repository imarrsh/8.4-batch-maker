var React = require('react');

var AppWrapper = require('./layout/layouts.jsx').AppWrapper;
var ContainerRow = require('./layout/layouts.jsx').ContainerRow;
var Section = require('./layout/layouts.jsx').Section;
var Row = require('./layout/layouts.jsx').Row;

var HomeContainer = React.createClass({
  render: function(){
    return(
      <AppWrapper>
        <ContainerRow>
          <div className="col-md-10 col-md-offset-1">
            <div className="recipe-list">
              <h1>My Recipes</h1>
              <div className="list-group">
                <a href="#recipe/" className="list-group-item">Peanut Butter Pancakes</a>
                <a href="" className="list-group-item">Sweet Potato Casserole</a>
                <a href="" className="list-group-item">Buffalo Chicken Dip</a>
                <a href="" className="list-group-item">Banana-Nut Muffins</a>
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
