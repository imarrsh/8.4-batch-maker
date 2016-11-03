var React = require('react');

var AppWrapper = require('./layout/layouts.jsx').AppWrapper;
var ContainerRow = require('./layout/layouts.jsx').ContainerRow;
var Section = require('./layout/layouts.jsx').Section;
var Row = require('./layout/layouts.jsx').Row;
 

var AdjustRecipeContainer = React.createClass({
  render: function(){
    return (  
      <AppWrapper>
        <Section>
          <ContainerRow>

            <div></div>

          </ContainerRow>
        </Section>
      </AppWrapper>
    );
  }
});

module.exports = {
  AdjustRecipeContainer: AdjustRecipeContainer
}