var React = require('react');

var Recipe = require('../models/recipe').Recipe;

var AppWrapper = require('./layout/layouts.jsx').AppWrapper;
var ContainerRow = require('./layout/layouts.jsx').ContainerRow;
var Section = require('./layout/layouts.jsx').Section;
var Row = require('./layout/layouts.jsx').Row;

// other components
var AdjustRecipeContainer = require('./adjustRecipe.jsx').AdjustRecipeContainer;

// 1
var RecipeTitle = React.createClass({
  render: function(){
    var recipe = this.props.recipe;
    // console.log(recipe)
    return(
      <Row>
        <div className="col-xs-12">
          <h1>{recipe.get('name')}</h1>
          <h5>by {recipe.get('author')}</h5>
        </div>
      </Row>
    );
}
});

// 2
var RecipeImage = React.createClass({
  render: function(){
    var recipe = this.props.recipe;
    return(
      <Row>
        <div className="col-xs-12">
          <img className="recipe-photo" src={recipe.get('imageUrl')} alt={recipe.get('name')} />
        </div>
      </Row>
    );
  }
});

var RecipeDetail = React.createClass({
  render: function(){
    var recipe = this.props.recipe;
    return(
      <Row>
        <div className="col-sm-12">

            <ul className="list-group">
              <li className="col-xs-3 list-group-item">
                <h6>Recipe Type</h6>
                <h2>{recipe.get('type')}</h2>
              </li>
              <li className="col-xs-3 list-group-item">
                <h6>Prep Time</h6>
                <h2>{recipe.get('prepTime')}<small>min</small></h2>
              </li>
              <li className="col-xs-3 list-group-item">
                <h6>Cook Time</h6>
                <h2>{recipe.get('cookTime')}<small>min</small></h2>
              </li>
              <li className="col-xs-3 list-group-item">
                <h6>Cook Temp</h6>
                <h2>{recipe.get('cookTemp')}&deg;<small>F</small></h2>
              </li>
            </ul>

        </div>
      </Row>
    )
  }
});

var RecipeTable = React.createClass({
  render: function(){
    var recipe = this.props.recipe;
    // console.log(recipe);
    return(
      <Row>
        <div className="col-xs-10 col-xs-offset-1">
          <div className="recipe-table">

            <Row>

                <ul className="list-group">
                  <li className="recipe-title list-group-item">
                    <h4>
                      {recipe.get('yieldQty')} {recipe.get('yieldName')} 
                      <button className="btn btn-default">Adjust</button>
                    </h4>
                  </li>
                  {recipe.get('ingredients').map(function(ingredient){
                    return(
                      <li key={ingredient.cid} className="list-group-item">
                        <Row>
                          <div className="col-xs-3">
                            <h4>{ingredient.get('measureQty')} {ingredient.get('measureUnit')}</h4>
                          </div>
                          <div className="col-xs-9">
                            <h4>{ingredient.get('name')}</h4>
                          </div>
                        </Row>
                      </li>
                    );
                  })}
                </ul>
            
            </Row>

          </div>
        </div>
      </Row>
    );
  }
});

// TODO: make this work if time permits!
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
    var recipe = this.props.recipe;
    return(
      <Row>
        <div className="col-xs-10 col-xs-offset-1">
          <div className="recipe-notes">
            <h3>Notes</h3>
            <p>{recipe.get('notes')}</p>
          </div>
        </div>
      </Row>
    )
  }
})

var RecipeEdit = React.createClass({
  
  handleDelete: function(){
    var self = this;
    var recipe = this.props.recipe;

    Recipe.deleteRecipe(recipe, function(){
      self.props.router.navigate('', {trigger: true, replace: true});
    });

  },
  
  render: function(){
    return(
      <Row>
        <div className="col-xs-10 col-xs-offset-1">
          <div className="recipe-edit">
            <p>
              <a href={'#recipe/' + this.props.recipe.get('objectId') + '/edit/'} 
              className="btn btn-primary">Edit Recipe</a>
              <button onClick={this.handleDelete} className="btn btn-danger pull-right">Delete recipe</button>
            </p>
          </div>
        </div>
      </Row>
    );
  }
})

/**
 * RecipePreviewContainer Smart Component
 */
var RecipePreviewContainer = React.createClass({
  getInitialState: function(){
    // var recipe = this.props.collection.get('hvjsf7q4');
    return {
      recipe: new Recipe()
    }
  },
  componentWillMount: function(){
    var recipe = this.state.recipe
    , recipeId = this.props.recipeId;

    // no recipe ID - stop here
    // this would come from an anchor
    if (!recipeId){
      return;
    }

    recipe.set('objectId', recipeId);
    recipe.fetch().then(() => this.setState({recipe: recipe}));

  },
  render: function(){
    var recipe = this.state.recipe;
    // console.log('RECIPE', recipe)
    return(
      <AppWrapper>
        <ContainerRow>

          <div className="col-md-8 col-md-offset-2">    
            <div className="recipe-preview">
              
              <RecipeTitle recipe={recipe}/>

              <RecipeImage recipe={recipe}/>

              <RecipeDetail recipe={recipe}/>

              <AdjustRecipeContainer recipe={recipe} />

              {/* <RecipeTable recipe={recipe}/> */}
              
              {/* TODO: add this in later */}
              {/* <RecipeSteps recipe={recipe}/> */}
              
              <RecipeNotes recipe={recipe}/>

              <RecipeEdit recipe={recipe} router={this.props.router}/>

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
