var React = require('react');

// form ui models
var IngredientBlock = require('../models/ingredientsForm.js').IngredientBlock;
var IngredientBlockCollection = require('../models/ingredientsForm.js').IngredientBlockCollection;

// data models
// var Ingredient = require('../models/recipe.js').Ingredient;
// var IngredientCollection = require('../models/recipe.js').IngredientCollection;
var Recipe = require('../models/recipe').Recipe;
var RecipeCollection = require('../models/recipe').RecipeCollection;


// layout components
var AppWrapper = require('./layout/layouts.jsx').AppWrapper;
var ContainerRow = require('./layout/layouts.jsx').ContainerRow;
var Section = require('./layout/layouts.jsx').Section;
var Row = require('./layout/layouts.jsx').Row;

// recipe creator, name,
var BasicInfoSet = React.createClass({
  handleFieldChange(e){
    this.props.onChange(e.target.name, e.target.value);
  },
  render: function () {
    var recipe = this.props.recipe;
    return(
      <fieldset className="form-group recipe-basic-info">
        <legend>Basic Info</legend>
        <Row>

          <div className="col-sm-3">
            <div className="photo-placeholder">+ Add Photo</div>
          </div>
          <div className="col-sm-9">
            <div className="form-group">
              <input value={recipe.get('name')} onChange={this.handleFieldChange} 
                type="text" name="name" className="form-control" placeholder="Recipe Name" 
              />
            </div>
            <div className="form-group">
              <input onChange={this.handleFieldChange} value={recipe.get('author')}
                type="text" name="author" className="form-control" placeholder="By You" 
              />
            </div>
            <div className="form-group">
              <input onChange={this.handleFieldChange} value={recipe.get('imageUrl')}
                type="text" name="imageUrl" className="form-control" placeholder="Image Url" 
              />
            </div>
            <div className="form-group">                      
              {/* TODO: make this work later if time permits
              <label>
                <input onChange={this.handleFieldChange} type="radio" name="isPublic" value={true}/> Make it Public
              </label> */}
              <label>
                <input onChange={this.handleFieldChange} 
                type="radio" name="isPublic" 
                defaultChecked disabled value={false}/> 
                  Keep it Private
              </label>
            </div>
          </div>

        </Row>
      </fieldset>
    );
  }
});

// some recipe details
var RecipeDetailSet = React.createClass({
  handleFieldChange(e){
    var value = e.target.value;

    // check the event target type for a number value
    if (e.target.type === "number"){
      value = parseFloat(value);
    }

    this.props.onChange(e.target.name, value);
  },
  // handleNumFieldChange(e){
  //   this.props.onChange(e.target.name, parseInt(e.target.value));
  // },
  render: function(){
    var recipe = this.props.recipe;
    return(
      <fieldset className="form-group recipe-details">
        <div className="form-group">
          <Row>

            <div className="col-sm-4">
              <select onChange={this.handleFieldChange} name="type" 
                id="recipe-type" className="form-control" defaultValue="" value={recipe.get('type')}>
                <option disabled value="">Recipe Type</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Side">Side</option>
                <option value="Dessert">Dessert</option>
                <option value="Snack">Snack</option>
              </select>
            </div>
            <div className="col-sm-2">
              <div className="input-group">
                <input onChange={this.handleFieldChange} value={recipe.get('prepTime')} id="prepTime" name="prepTime"  
                  type="number" placeholder="Prep" className="form-control" 
                />
                <div className="input-group-addon">mins</div>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="input-group">
                <input onChange={this.handleFieldChange} value={recipe.get('cookTime')} name="cookTime" 
                  type="number" placeholder="Cook" className="form-control" 
                />
                <div className="input-group-addon">mins</div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="input-group">
                <input onChange={this.handleFieldChange} value={recipe.get('cookTemp')} name="cookTemp" 
                  type="number" placeholder="Cook Temp" className="form-control"
                />
                <div className="input-group-addon">
                  <select onChange={this.handleFieldChange} value={recipe.get('cookTempScale')} name="cookTempScale" id="temp-scale">
                    <option value="F">&deg;F</option>
                    <option value="C">&deg;C</option>
                  </select>
                </div>
              </div>
            </div>
          </Row>
        </div>

        <div className="form-group">
          <Row>

            <div className="col-sm-3">
              This recipe will make
            </div>
            <div className="col-sm-2">
              <input onChange={this.handleFieldChange} value={recipe.get('yieldQty')} type="number" 
                name="yieldQty" placeholder="Amount" className="form-control" 
              />
            </div>
            <div className="col-sm-7">
              <input onChange={this.handleFieldChange} value={recipe.get('yieldName')} type="text" 
                name="yieldName" placeholder="cookies, loaves, ect." className="form-control" 
              />
            </div>
          </Row>

        </div>  

      </fieldset>
    );
  }
});



// individual ingredient row
var RecipeIngredientRow = React.createClass({

  getInitialState: function(){
    // get the ingredient model
    var ingredient = this.props.model;
    return {
      ingredient: ingredient // put the model in state
    };
  },

  handleInput: function(e){ 
    // get the ingredient from state
    var ingredient = this.state.ingredient;
    

    // store the values in variables
    var name = e.target.name;
    var value = e.target.value;

    if (e.target.type === "number"){
      value = parseFloat(value);
    }

    // populate the model, name: value
    ingredient.set(name, value);
    // also, update the state
    this.setState({[name]: value});

  },

  render: function(){
    var ingredient = this.state.ingredient;
    return(
      <div className="form-group">
        <div className="row">
          <div className="col-sm-2">
            <input onChange={this.handleInput} value={ingredient.get('measureQty')}
              type="number" name="measureQty" className="form-control" placeholder="Qty" />
          </div>
          <div className="col-md-3">
            <input onChange={this.handleInput} value={ingredient.get('measureUnit')}
              type="text" name="measureUnit" className="form-control" placeholder="Unit" />
          </div>
          <div className="col-md-6">
            <input onChange={this.handleInput} value={ingredient.get('name')}
              type="text" name="name" className="form-control" placeholder="Ingredient" />
          </div>
          <div className="col-md-1">
            <button onClick={() => this.props.removeIngredientRow(ingredient) } 
              type="button" className="btn btn-danger"><b>—</b></button>
          </div>
        </div>
      </div>
    );
  }

});






// just adding ingredients here
var RecipeStepsSet = React.createClass({
  getInitialState: function(){
    // var ingredientInputs = new IngredientBlockCollection();
    var recipe = this.props.recipe;
    return {
      recipe: recipe // from new IngredientBlockCollection()
    };
  },

  addIngredientRow: function(e){
    e.preventDefault();
    var recipe = this.state.recipe;
    var ingredients = recipe.get('ingredients');

    ingredients.add([{}]);
    
    this.setState({ recipe: recipe });

  },
  
  removeIngredientRow: function(ingredient){
    var recipe = this.state.recipe
    , ingredients = recipe.get('ingredients');

    ingredients.remove(ingredient);
    this.setState({recipe: recipe});
  },

  render: function(){

    var recipe = this.state.recipe
    , ingredients = recipe.get('ingredients');

    return(
      <fieldset className="form-group recipe-steps">
        <legend>Ingedients <button onClick={this.addIngredientRow} className="btn btn-success pull-right">Add</button></legend>
        
        {ingredients.map(ingredient => {
          return (
            <RecipeIngredientRow 
              key={ingredient.cid} 
              model={ingredient} 
              removeIngredientRow={this.removeIngredientRow} 
              onChange={this.props.onChange} />
          );
        })}

        {/* TODO: for actual recipe steps 
        <div className="form-group">
          <div className="row">
            <div className="col-sm-12">
              <textarea name="stepDirections" className="form-control" rows="4" placeholder=""></textarea>
            </div>
          </div>
        </div> */}

      </fieldset>
    );
  }
});






// add notes
var RecipeNotesSet = React.createClass({
  handleFieldChange(e){
    this.props.onChange(e.target.name, e.target.value);
  },
  render: function(){
    var recipe = this.props.recipe;
    return(
      <fieldset className="form-group recipe-steps">
        <legend>Personal Notes</legend>

        <div className="form-group">
          <div className="row">
            <div className="col-sm-12">
              <textarea onChange={this.handleFieldChange} value={recipe.get('notes')} name="notes" className="form-control" rows="6"></textarea>
            </div>
          </div>
        </div>

      </fieldset>
    );
  }
});

// save recipe
var RecipeSaveSet = React.createClass({
  render: function(){
    return(
      <fieldset className="form-group recipe-steps">

        <div className="form-group">
          <div className="row">
            <div className="col-sm-12">
              <input type="submit" value="Save Recipe" className="btn btn-primary" />
              <input onReset={this.props.handleReset} type="reset" 
                value="Cancel" className="btn btn-default pull-right" />
            </div>
          </div>
        </div>

      </fieldset>
    );
  }
});


var NewEditRecipeForm = React.createClass({
  getInitialState: function(){
    return {
      recipe: new Recipe()
    }
  },

  componentWillMount: function(){
    this.getRecipe();
  },

  componentWillReceiveProps: function(){
    this.getRecipe();
  },

  getRecipe: function(){
    var recipe = this.state.recipe;
    // comes in from the router if selected
    var recipeId = this.props.recipeId;

    // if not editing a recipe then return now
    if (!recipeId){
      return;
    }

    recipe.set('objectId', recipeId);
    recipe.fetch().then(() => this.setState({recipe: recipe}))

  },

  handleSubmit: function(e){
    e.preventDefault();
    var recipe = this.state.recipe;
    var ingredients = recipe.get('ingredients');

    recipe.set('ingredients', ingredients.toJSON());

    var currentUser = JSON.parse(localStorage.getItem('user'));
    // console.log(recipe);
    recipe.save({ 
      user: {
        __type: 'Pointer',
        className: '_User',
        objectId: currentUser.objectId
      }
    });

    this.props.router.navigate('', {trigger: true, replace: true});
  },

  handleReset: function (e) {
    e.preventDefault();
    window.history.back();
  },

  handleFieldChange: function(key, value){
    var recipe = this.state.recipe;
    recipe.set({[key]: value});
    this.setState({recipe: recipe});
  },

  render: function(){
    var recipe = this.state.recipe;
    var heading = recipe.isNew() ? 'Add' : 'Editing';
    // console.log(this.state.recipe)
    return(
      <AppWrapper>
        <Section>
          <ContainerRow>

            <div className="col-md-8 col-md-offset-2">

              <div className="new-recipe-form">
                <h1>{heading} {recipe.get('name') || 'Recipe'}</h1>
                <form id="new-recipe" onSubmit={this.handleSubmit} 
                  onReset={this.handleReset}>
                  
                  <BasicInfoSet recipe={recipe} onChange={this.handleFieldChange} />

                  <RecipeDetailSet recipe={recipe} onChange={this.handleFieldChange} />

                  <RecipeStepsSet recipe={recipe} onChange={this.handleFieldChange} 
                    ingredientBlocks={this.state.ingredients} />

                  <RecipeNotesSet recipe={recipe} onChange={this.handleFieldChange} />

                  <RecipeSaveSet onSubmit={this.handleSubmit}/>

                </form>

              </div> {/*<!-- end form container -->*/}

            </div> {/*<!-- end column -->*/}

          </ContainerRow>
        </Section>
      </AppWrapper>
    );
  }
});

module.exports = {
  NewEditRecipeForm: NewEditRecipeForm
}