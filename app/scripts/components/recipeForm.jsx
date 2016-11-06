var React = require('react');

var AppWrapper = require('./layout/layouts.jsx').AppWrapper;
var ContainerRow = require('./layout/layouts.jsx').ContainerRow;
var Section = require('./layout/layouts.jsx').Section;
var Row = require('./layout/layouts.jsx').Row;

var BasicInfoSet = React.createClass({
  getInitialState: function(){
    return {
      name: '',
      author: ''
    };
  },
  nameChangeHandler: function(e){
    this.setState({recipeName: e.target.value});
  },
  authorChangeHandler: function(e){
    this.setState({recipeAuthor: e.target.value});
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
              <input onChange={this.nameChangeHandler} value={this.state.recipeName} 
               type="text" name="recipe-name" className="form-control" placeholder="Recipe Name"
              />
            </div>
            <div className="form-group">
              <input onChange={this.authorChangeHandler} value={this.state.recipeAuthor} 
                type="text" name="recipe-author" className="form-control" placeholder="By You" 
              />
            </div>
            <div className="form-group">                      
              {/* TODO: make this work later if time permits
              <label>
                <input type="radio" name="privacy-setting" disbabled value={true}/> Make it Public
              </label> */}
              <label>
                <input type="radio" name="privacy-setting" defaultChecked value={false}/> Keep it Private
              </label>
            </div>
          </div>

        </Row>
      </fieldset>
    );
  }
});

var RecipeDetailSet = React.createClass({
  getInitialState: function(){
    return {
      type: '',
      prepTime: '',
      cookTime: '',
      cookTemp: '',
      cookTempScale: 'F',
      yieldName: '',
      yieldQty: ''
    };
  },
  fieldChangeHandler: function(e){
    // get the target changed name and value
    // set the state
    this.setState({[e.target.name]: e.target.value});
    console.log(changeObj);
  },
  render: function(){
    return(
      <fieldset className="form-group recipe-details">
        <div className="form-group">
          <Row>

            <div className="col-sm-4">
              <select onChange={this.fieldChangeHandler} name="type" 
                id="recipe-type" className="form-control">

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
              <input onChange={this.fieldChangeHandler} name="prepTime"  
                type="text" placeholder="Prep Time (mins)" className="form-control" 
              />
            </div>
            <div className="col-sm-2">
              <input onChange={this.fieldChangeHandler} name="cookTime" 
                type="text" placeholder="Cook Time (mins)" className="form-control" 
              />
            </div>
            <div className="col-sm-4">
              <div className="input-group">
                <input onChange={this.fieldChangeHandler} name="cookTemp" 
                  type="text" placeholder="Cook Temp" className="form-control"
                />
                <div className="input-group-addon">
                  <select onChange={this.fieldChangeHandler} name="cookTempScale" id="temp-scale">
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
              <input onChange={this.fieldChangeHandler} type="text" 
                name="yieldQty" placeholder="Amount" className="form-control" 
              />
            </div>
            <div className="col-sm-7">
              <input onChange={this.fieldChangeHandler} type="text" 
                name="yieldName" placeholder="cookies, loaves, ect." className="form-control" 
              />
            </div>
          </Row>

        </div>  

      </fieldset>
    );
  }
});

var RecipeStepsSet = React.createClass({
  getInitialState: function(){
    return {
      measureQty: '',
      measureUnit: '',
      name: ''
    };
  },
  render: function(){
    return(
      <fieldset className="form-group recipe-steps">
        <legend>Ingedients</legend>
        
        <div className="form-group">
          <div className="row">
            <div className="col-sm-2">
              <input type="text" name="ingredient-qty" className="form-control" placeholder="Qty" />
            </div>
            <div className="col-md-3">
              <input type="text" name="ingredient-unit" className="form-control" placeholder="Unit" />
            </div>
            <div className="col-md-6">
              <input type="text" name="ingredient-name" className="form-control" placeholder="Ingredient" />
            </div>
            <div className="col-md-1">
              <button type="button" className="btn btn-default"><b>+</b></button>
            </div>
          </div>
        </div>

        {/* <div className="form-group">
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

var RecipeNotesSet = React.createClass({
  render: function(){
    return(
      <fieldset className="form-group recipe-steps">
        <legend>Personal Notes</legend>

        <div className="form-group">
          <div className="row">
            <div className="col-sm-12">
              <textarea name="recipeNotes" className="form-control" rows="6"></textarea>
            </div>
          </div>
        </div>

      </fieldset>
    );
  }
});

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
  render: function(){
    return(
      <AppWrapper>
        <Section>
          <ContainerRow>

            <div className="col-md-8 col-md-offset-2">

              <div className="new-recipe-form">

                <form id="new-recipe">
                  
                  <BasicInfoSet />

                  <RecipeDetailSet />

                  <RecipeStepsSet />

                  <RecipeNotesSet />

                  <RecipeSaveSet />

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