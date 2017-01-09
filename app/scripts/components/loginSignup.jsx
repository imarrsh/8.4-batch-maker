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
                value={this.props.user}
                name="username" type="email" 
                className="form-control" placeholder="Email" />
            </div>
            <div className="form-group">
              <input onChange={this.props.onChange}
                value={this.props.pass}
                name="password" type="password" 
                className="form-control" placeholder="Password" />
            </div>
            <div className="row">
              <div className="col-sm-9">
                <input type="submit" 
                  className="form-control btn btn-primary" 
                  value="Log In" />
              </div>
              <div className="col-sm-3">
                <input onClick={this.props.demo}
                  type="button" 
                  className="form-control btn btn-danger" 
                  value="Demo" 
                />
              </div>
            </div>
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

    // user.signUp();
    User.signUp(userCredentials);

  },
  handleLogIn: function(e){
    e.preventDefault();
    // console.log('login action');
    var self = this;
    var userCredentials = {
      username: this.state.username,
      password: this.state.password
    }

    User.logIn(userCredentials, function(){
      self.props.router.navigate('', {trigger: true});
    });


  },

  handleDemoInput: function(e){
    this.setState({ 
      username: "demo@demo.com",
      password: "demo"
    });
  },

  render: function(){
    return(
      <AppWrapper>
        <ContainerRow>

            <LoginForm 
              onChange={this.handleChange} 
              onSubmit={this.handleLogIn} 
              demo={this.handleDemoInput}
              user={this.state.username}
              pass={this.state.password}
            />

            <SignUpForm 
              onChange={this.handleChange} 
              onSubmit={this.handleSignUp}
            />
            
        </ContainerRow>
      </AppWrapper>
    )
  }
});

module.exports = {
  LoginContainer: LoginContainer
}