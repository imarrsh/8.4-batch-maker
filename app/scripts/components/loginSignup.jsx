var React =  require('react');

var User = require('../models/user').User;

var AppWrapper = require('./layout/layouts.jsx').AppWrapper;
var ContainerRow = require('./layout/layouts.jsx').ContainerRow;
var Section = require('./layout/layouts.jsx').Section;
var Row = require('./layout/layouts.jsx').Row;

var LoginForm = React.createClass({
  render: function(){
    return(
      <div className="col-md-5">
        <div className="login-card">
          <h2>Login</h2>
          <form onSubmit={this.props.onSubmit}>
            <div className="form-group">
              <input onChange={this.props.onChange} 
                name="username" type="email" 
                className="form-control" placeholder="Email" />
            </div>
            <div className="form-group">
              <input onChange={this.props.onChange} 
                name="password" type="password" 
                className="form-control" placeholder="Password" />
            </div>
            <input type="submit" 
              className="form-control btn btn-primary" 
              value="Log In" />
          </form>
        </div>
      </div>
    );
  }
});

var SignUpForm = React.createClass({
  render: function(){
    return(
      <div className="col-md-5 col-md-offset-2">
        <div className="login-card">
          <h2>No Account? Sign Up!</h2>
          <form onSubmit={this.props.onSubmit}>
            <div className="form-group">
              <input onChange={this.props.onChange}
                type="email" name="username" 
                className="form-control" placeholder="Email" />
            </div>
            <div className="form-group">
              <input onChange={this.props.onChange}
                name="password" type="password"
                className="form-control" placeholder="Password" />
            </div>
            <input type="submit" 
              className="form-control btn btn-primary" 
              value="Sign me Up!" />
          </form>
        </div>
      </div>
    );
  }
});

var LoginContainer = React.createClass({
  getInitialState: function(){
    return {
      username: '',
      password: ''
    }
  },
  handleChange(e){
    var name = e.target.name,
        value = e.target.value;
    this.setState({[name]: value});
  },
  handleSignUp: function(e){
    e.preventDefault();
    var user = new User();

    console.log('signup action');
    var userCredentials = {
      username: this.state.username,
      password: this.state.password
    }

    user.signUp(userCredentials);

  },
  handleLogIn: function(){
    e.preventDefault();
    console.log('login action');
  },
  render: function(){
    return(
      <AppWrapper>
        <ContainerRow>

            <LoginForm onChange={this.handleChange} onSubmit={this.handleLogIn}/>

            <SignUpForm onChange={this.handleChange} onSubmit={this.handleSignUp}/>
            
        </ContainerRow>
      </AppWrapper>
    )
  }
});

module.exports = {
  LoginContainer: LoginContainer
}