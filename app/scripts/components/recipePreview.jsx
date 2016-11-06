var React = require('react');

var AppWrapper = require('./layout/layouts.jsx').AppWrapper;
var ContainerRow = require('./layout/layouts.jsx').ContainerRow;
var Section = require('./layout/layouts.jsx').Section;
var Row = require('./layout/layouts.jsx').Row;

// 1
var RecipeTitle = React.createClass({
  render: function(){
    return(
      <Row>
        <div className="col-xs-12">
          <h1>Recipe title</h1>
          <h5>by Recipe Author</h5>
        </div>
      </Row>
    );
}
});

// 2
var RecipeImage = React.createClass({
  render: function(){
    return(
      <Row>
        <div className="col-xs-12">
          <img src="http://placehold.it/800x450" alt="recipe-photo" />
        </div>
      </Row>
    );
  }
});

var RecipeDetail = React.createClass({
  render: function(){
    return(
      <Row>
        <div className="col-sm-10 col-sm-offset-1">
          <Row>
            <ul className="list-group">
              <li className="col-sm-3 list-group-item">
                <h6>Recipe Type</h6>
                <h2>Type</h2>
              </li>
              <li className="col-sm-3 list-group-item">
                <h6>Prep Time</h6>
                <h2>15<small>min</small></h2>
              </li>
              <li className="col-sm-3 list-group-item">
                <h6>Cook Time</h6>
                <h2>20<small>min</small></h2>
              </li>
              <li className="col-sm-3 list-group-item">
                <h6>Cook Temp</h6>
                <h2>350&deg;<small>F</small></h2>
              </li>
            </ul>
          </Row>
        </div>
      </Row>
    )
  }
});

var RecipeTable = React.createClass({
  render: function(){
    return(
      <Row>
        <div className="col-xs-10 col-xs-offset-1">
          <div className="recipe-table">

            <Row>

                <ul className="list-group">
                  <li className="recipe-title list-group-item">
                    <h4>
                      12 units <button className="btn btn-default">Adjust</button>
                    </h4>
                  </li>
                  <li className="list-group-item">
                    <Row>
                      <div className="col-xs-2">
                        <h4>.5 cup</h4>
                      </div>
                      <div className="col-xs-10">
                        <h4>Sugar</h4>
                      </div>
                    </Row>
                  </li>
                </ul>
            
            </Row>

          </div>
        </div>
      </Row>
    );
  }
});

var RecipeSteps = React.createClass({
  render: function(){
    return(
      <Row>
        <div className="col-xs-10 col-xs-offset-1">
          <div className="recipe-step">
            <h3>Step 1</h3>
            <Row>
              <div className="col-sm-8">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat obcaecati veritatis earum ea minus, quae consectetur nam, cupiditate libero iusto aspernatur. Beatae doloremque sit unde eaque aliquam, sed nesciunt aliquid.</p>
              </div>
              <div className="col-sm-4">
                <ul className="list-group">
                  <li className="list-group-item">
                    <div className="ing-qty">.5 cup</div>
                    <div className="ing-name">Sugar</div>
                  </li>
                  <li className="list-group-item">
                    <div className="ing-qty">.5 cup</div>
                    <div className="ing-name">flour</div>
                  </li>
                  <li className="list-group-item">
                    <div className="ing-qty">1 lb.</div>
                    <div className="ing-name">apples</div>
                  </li>
                </ul>
              </div>
            </Row>
          </div>
        </div>
      </Row>
    );
  }
});

var RecipeNotes = React.createClass({
  render: function(){
    return(
      <Row>
        <div className="col-xs-10 col-xs-offset-1">
          <div className="recipe-notes">
            <h3>Notes</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident cupiditate eius facilis id, cumque consectetur distinctio, facere veniam ratione amet iste explicabo optio voluptatum consequatur quam. Quas dolorum ut praesentium.</p>
          </div>
        </div>
      </Row>
    )
  }
})

var RecipeEdit = React.createClass({
  render: function(){
    return(
      <Row>
        <div className="col-xs-10 col-xs-offset-1">
          <div className="recipe-edit">
            <p>
              Edit this recipe <a href="#recipe/id/edit" className="btn btn-primary">Start</a>
            </p>
          </div>
        </div>
      </Row>
    );
  }
})

var RecipePreviewContainer = React.createClass({
  render: function(){
    return(
      <AppWrapper>
        <ContainerRow>

          <div className="col-md-8 col-md-offset-2">    
            <div className="recipe-preview">
              
              <RecipeTitle />

              <RecipeImage />

              <RecipeDetail />

              <RecipeTable />
              
              <RecipeSteps />
              
              <RecipeNotes />

              <RecipeEdit />

            </div>
          </div>

        </ContainerRow>
      </AppWrapper> 
    );
  }
});

module.exports = {
  RecipePreviewContainer: RecipePreviewContainer
}
