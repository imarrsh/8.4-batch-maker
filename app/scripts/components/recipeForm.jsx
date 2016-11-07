var React = require('react');

// form ui models
var IngredientBlockCollection = require('../models/ingredientsForm.js').IngredientBlockCollection;

// data models
var Ingredient = require('../models/recipe.js').Ingredient;
var IngredientCollection = require('../models/recipe.js').IngredientCollection;

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
    return(
      <fieldset className="form-group recipe-basic-info">
        <legend>Basic Info</legend>
        <Row>

          <div className="col-sm-3">
            <div className="photo-placeholder">+ Add Photo</div>
          </div>
          <div className="col-sm-9">
            <div className="form-group">
              <input onChange={this.handleFieldChange} 
                type="text" name="name" className="form-control" placeholder="Recipe Name"
              />
            </div>
            <div className="form-group">
              <input onChange={this.handleFieldChange}
                type="text" name="author" className="form-control" placeholder="By You" 
              />
            </div>
            <div className="form-group">                      
              {/* TODO: make this work later if time permits
              <label>
                <input onChange={this.handleFieldChange} type="radio" name="isPublic" value={true}/> Make it Public
              </label> */}
              <label>
                <input onChange={this.handleFieldChange} type="radio" name="isPublic" defaultChecked disabled value={false}/> Keep it Private
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
    this.props.onChange(e.target.name, e.target.value);
  },
  render: function(){
    return(
      <fieldset className="form-group recipe-details">
        <div className="form-group">
          <Row>

            <div className="col-sm-4">
              <select onChange={this.handleFieldChange} name="type" 
                id="recipe-type" className="form-control">
                {/* throws an error, but i want this behavior */}
                <option selected disabled value>Recipe Type</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Side">Side</option>
                <option value="Dessert">Dessert</option>
                <option value="Snack">Snack</option>
              </select>
            </div>
            <div className="col-sm-2">
              <input onChange={this.handleFieldChange} name="prepTime"  
                type="text" placeholder="Prep Time (mins)" className="form-control" 
              />
            </div>
            <div className="col-sm-2">
              <input onChange={this.handleFieldChange} name="cookTime" 
                type="text" placeholder="Cook Time (mins)" className="form-control" 
              />
            </div>
            <div className="col-sm-4">
              <div className="input-group">
                <input onChange={this.handleFieldChange} name="cookTemp" 
                  type="text" placeholder="Cook Temp" className="form-control"
                />
                <div className="input-group-addon">
                  <select onChange={this.handleFieldChange} name="cookTempScale" id="temp-scale">
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
              <input onChange={this.handleFieldChange} type="text" 
                name="yieldQty" placeholder="Amount" className="form-control" 
              />
            </div>
            <div className="col-sm-7">
              <input onChange={this.handleFieldChange} type="text" 
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
    var newIngredient = new Ingredient();
    return {
      measureQty: '',
      measureUnit: '',
      name: ''
    };
  },
  handleInput: function(e){ // update this input groups state
    var ingredient = this.props.model;
    ingredient.set(e.target.name, e.target.value);

    // console.log(e.target.name, e.target.value, ingredient);
    // this.setState({[e.target.name]: e.target.value});
    this.props.onChange('ingredients', ingredient);
  },
  handleAddNewRow: function(e) { // add a new row
    // Collect data in an object
    var ingredient = {
      measureQty: this.state.measureQty,
      measureUnit: this.state.measureUnit,
      name: this.state.name
    };

    // hand off to smart component
    this.props.newRow(ingredient);
  },
  render: function(){
    var cid = this.props.key;
    return(
      <div className="form-group">
        <div className="row">
          <div className="col-sm-2">
            <input onChange={this.handleInput}
              type="text" name="measureQty" className="form-control" placeholder="Qty" />
          </div>
          <div className="col-md-3">
            <input onChange={this.handleInput} type="text" 
              name="measureUnit" className="form-control" placeholder="Unit" />
          </div>
          <div className="col-md-6">
            <input onChange={this.handleInput} type="text" 
              name="name" className="form-control" placeholder="Ingredient" />
          </div>
          <div className="col-md-1">
            <button onClick={this.handleAddNewRow} type="button" className="btn btn-default"><b>+</b></button>
          </div>
        </div>
      </div>
    );
  }
});






// just adding ingredients here
var RecipeStepsSet = React.createClass({
  getInitialState: function(){
    var ingredientInputs = new IngredientBlockCollection();
    return {
      ingredientInputs: ingredientInputs, // from new IngredientBlockCollection()
      ingredientCollection: [] // need to fill this up with objects
    };
  },
  componentWillMount: function(){
    // hacking the collection for UI state, add empty model
    this.state.ingredientInputs.add([{}]); // first ingredient
  },
  addNewIngredientRow: function(ingredient){

    var currentIngredients = this.state.ingredients; // get the current ingredients
    currentIngredients.push(ingredient); // push the new ingredient

    this.setState({ingredients: currentIngredients}); // the the state for ingredients

    // checking my work
    console.log('adding a new ingredient row...', this.state.ingredients, this.state.ingredientInputs);
    
    // more collection hacking to add inputs
    this.state.ingredientInputs.add([{}]);

    this.setState({
      ingredientInputs: this.state.ingredientInputs
    });
    /*
      I need to be able to update the ingredients on the top level state.
      when an empty model is added, i need to be able to tie the model 
      to a new ingredient object in the ingredients array.
     */
  },
  render: function(){
    var self = this;
    return(
      <fieldset className="form-group recipe-steps">
        <legend>Ingedients</legend>
        
        {this.state.ingredientInputs.map(function(input){
          return (
            <RecipeIngredientRow 
              key={input.cid} 
              model={input} 
              newRow={self.addNewIngredientRow} 
              onChange={self.props.onChange} />
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
    return(
      <fieldset className="form-group recipe-steps">
        <legend>Personal Notes</legend>

        <div className="form-group">
          <div className="row">
            <div className="col-sm-12">
              <textarea onChange={this.handleFieldChange} name="notes" className="form-control" rows="6"></textarea>
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
            </div>
          </div>
        </div>

      </fieldset>
    );
  }
});


var NewRecipeForm = React.createClass({
  getInitialState: function(){

    return {
      // basic info
      name: '',
      author: '',
      isPublic: false,
      // details
      type: '',
      prepTime: '',
      cookTime: '',
      cookTemp: '',
      cookTempScale: 'F',
      yieldName: '',
      yieldQty: '',
      ingredients : [],
      notes: ''
    }
  },
  handleSubmit: function(e){
    e.preventDefault();
    console.log(this.state)
  },
  handleFieldChange: function(key, value){
    this.setState({[key]: value});
    console.log(key, value, this.state);
  },
  render: function(){
    return(
      <AppWrapper>
        <Section>
          <ContainerRow>

            <div className="col-md-8 col-md-offset-2">

              <div className="new-recipe-form">

                <form id="new-recipe" onSubmit={this.handleSubmit}>
                  
                  <BasicInfoSet onChange={this.handleFieldChange} />

                  <RecipeDetailSet onChange={this.handleFieldChange} />

                  <RecipeStepsSet onChange={this.handleFieldChange}/>

                  <RecipeNotesSet onChange={this.handleFieldChange} />

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
  NewRecipeForm: NewRecipeForm
}