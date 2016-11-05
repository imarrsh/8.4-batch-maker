var React = require('react');

var AppWrapper = require('./layout/layouts.jsx').AppWrapper;
var ContainerRow = require('./layout/layouts.jsx').ContainerRow;
var Section = require('./layout/layouts.jsx').Section;
var Row = require('./layout/layouts.jsx').Row;



var NewRecipeForm = React.createClass({
  render: function(){
    return(
      <AppWrapper>
        <Section>
          <ContainerRow>

            <div className="col-md-8 col-md-offset-2">

              <div className="new-recipe-form">

                <form id="new-recipe">

                  <fieldset className="form-group recipe-basic-info">
                    <legend>Basic Info</legend>
                    <div className="row">

                      <div className="col-sm-3">
                        <div className="photo-placeholder">+ Add Photo</div>
                      </div>
                      <div className="col-sm-9">
                        <div className="form-group">
                          <input type="text" name="recipe-name" className="form-control" placeholder="Recipe Name" />
                          <input type="text" name="recipe-author" className="form-control" placeholder="By" />
                        </div>
                        <div className="form-group">                      
                          <label>
                            <input type="radio" name="privacy-setting" /> Make it Public
                          </label>
                          <label>
                            <input type="radio" name="privacy-setting" /> Keep it Private
                          </label>
                        </div>
                      </div>

                    </div>
                  </fieldset>

                  <fieldset className="form-group recipe-details">
                    <div className="form-group">
                      <div className="row">

                        <div className="col-sm-4">
                          <select name="recipe-type" id="recipe-type" className="form-control">
                            <option selected disabled value>Recipe Type</option>
                            <option value="breakfast">Breakfast</option>
                            <option value="lunch">Lunch</option>
                            <option value="dinner">Dinner</option>
                            <option value="dessert">Dessert</option>
                          </select>
                        </div>
                        <div className="col-sm-2">
                          <input type="text" name="recipe-prep-time" placeholder="Prep Time" className="form-control" />
                        </div>
                        <div className="col-sm-2">
                          <input type="text" name="recipe-cook-time" placeholder="Cook Time" className="form-control" />                      
                        </div>
                        <div className="col-sm-4">
                          <div className="input-group">
                            <input type="text" name="recipe-cook-temp" placeholder="Cook Temp" className="form-control" />
                            <div className="input-group-addon">
                              <select name="recipe-type" id="recipe-type">
                                <option value="farenheit">&deg;F</option>
                                <option value="celsius">&deg;C</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="row">

                        <div className="col-sm-3">
                          This recipe will make
                        </div>
                        <div className="col-sm-2">
                          <input type="text" name="yeildQty" placeholder="Amount" className="form-control" />
                        </div>
                        <div className="col-sm-7">
                          <input type="text" name="yeildName" placeholder="cookies, loaves, ect." className="form-control" />                        
                        </div>
                      </div>

                    </div>  

                  </fieldset>

                  <fieldset className="form-group recipe-steps">
                    <legend>Step 1</legend>
                    
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
                          <button type="button" className="btn btn-default">+</button>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="row">
                        <div className="col-sm-12">
                          <textarea name="stepDirections" className="form-control" rows="4" placeholder=""></textarea>
                        </div>
                      </div>
                    </div>

                  </fieldset>

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

                  <fieldset className="form-group recipe-steps">

                    <div className="form-group">
                      <div className="row">
                        <div className="col-sm-12">
                          <input type="submit" value="Save Recipe" className="btn btn-primary" />
                        </div>
                      </div>
                    </div>

                  </fieldset>



                </form>

              </div> {/*<!-- end form container -->*/}

            </div> {/*<!-- end column -->*/}

          </ContainerRow>
        </Section>
      </AppWrapper>
    )
  }
})

module.exports = {
  NewRecipeForm: NewRecipeForm
}