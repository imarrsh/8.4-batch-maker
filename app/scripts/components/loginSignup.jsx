var React =  require('react');

var AppWrapper = require('./layout/layouts.jsx').AppWrapper;
var ContainerRow = require('./layout/layouts.jsx').ContainerRow;
var Section = require('./layout/layouts.jsx').Section;
var Row = require('./layout/layouts.jsx').Row;

var SignUpForm = React.createClass({
  render: function(){
    return(
      <div className="col-md-5 col-md-offset-2">
        <div className="login-card">
          <h2>No Account? Sign Up!</h2>
          <form action="">
            <div className="form-group">
              <input type="email" className="form-control" placeholder="Email" />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" placeholder="Password" />
            </div>
            <input type="submit" className="form-control btn btn-primary" value="Sign me Up!" />
          </form>
        </div>
      </div>
    );
  }
})

var LoginForm = React.createClass({
  render: function(){
    return(
      <div className="col-md-5">
        <div className="login-card">
          <h2>Login</h2>
          <form action="">
            <div className="form-group">
              <input type="email" className="form-control" placeholder="Email" />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" placeholder="Password" />
            </div>
            <input type="submit" className="form-control btn btn-primary" value="Log In" />
          </form>
        </div>
      </div>
    );
  }
})

var LoginContainer = React.createClass({
  render: function(){
    return(
      <AppWrapper>
        <ContainerRow>

            <LoginForm />

            <SignUpForm />
            
        </ContainerRow>
      </AppWrapper>
    )
  }
});

module.exports = {
  LoginContainer: LoginContainer
}