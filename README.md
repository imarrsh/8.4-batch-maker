# Batch Maker
#### (8.4-batch-maker)

This project is from the end of week 8 at [The Iron Yard Greenville](https://theironyard.com). The learning goal for this project was to build a larger web application to tie together all of the concepts learned during the cohort. It served as a predecessor to the final project and required full CRUD functionality, user authentication, local storage, responsive interface and more.

#### Login / Sign Up / Logout
The login and sign up process are helped by Backbone Models with methods to set up authentication headers for the Parse server. There is an `auth()` method on the user model instance that gets called from the class methods, depending how the user is entering or exiting the app.

#### Recipes
The app data is driven by Backbone's `Model` and `Collection` objects that handle the JSON coming down from the Parse back-end. This app features a simple interface for users to create, modify or delete recipes associated with their account. The recipe view also provides a nifty calculator to recalculate a recipes yield based on how much they want to make. In its current iteration there is not a way to upload a recipe photo, but a photo url may be provided.

#### Demo
To demo this project, you can sign in with the following credentials. The initial response time from the server may be a few seconds due to utilizing the free hosting tier at Heroku.

Username: demo@demo.com <br />
Password: demo

[Check it out here](https://imarrsh.github.io/7.4-react-majestic-thai/).

## Tooling and Dependencies
+ [React](https://facebook.github.io/react/)
+ [Backbone](http://backbonejs.org/)
+ [npm](https://www.npmjs.com/)
    - [bootstrap-sass](https://github.com/twbs/bootstrap-sass)
    - [Underscore](http://underscorejs.org/)
    - [Backbone.React.Component](https://github.com/magalhas/backbone-react-component)
+ [Bootstrap](http://getbootstrap.com/)
+ [Sass](http://sass-lang.com/)
+ [Parse Server](https://parse.com/) - utilizing the [REST API](http://parseplatform.github.io/docs/rest/guide/)
+ [MongoDB](https://www.mongodb.com/) - configured within Heroku
+ [Heroku](https://www.heroku.com/)

