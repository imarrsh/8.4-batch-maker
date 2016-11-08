var Backbone = require('backbone');
var router = require('../router');

var parseHeaders = require('../parseUtils').parseHeaders;

var ParseUser = Backbone.Model.extend({
  idAttribute: 'objectId',
  // rootUrl: 'http://mt-parse-server.herokuapp.com/users',
  signUp: function(userCredentials){
    parseHeaders('mtparseserver', 'thompson1');
    this.url = 'http://mt-parse-server.herokuapp.com/users';

    this.save(userCredentials)
      .then(function(response){
        var token = response.sessionToken;
        localStorage.setItem('sessionToken', token);

        // if (token) {
        //   router.navigate('#', {trigger: true});
        // }
      });

  },
  logIn: function(){},
});

var User = ParseUser.extend({

});

module.exports = {
  User: User
};
