var React = require('react');

var Row = function(props){
  return(
    <div className="row">
      {props.children}
    </div>
  )
};

var Container = function(props){
  return(
    <div className="container">
        {props.children}
    </div>
  )
};


var ContainerRow = function(props){
  return(
    <div className="container">
      <div className="row">
        {props.children}
      </div>
    </div>
  )
};

var Section = function(props){
  return(
    <section id={props.id}>
      {props.children}
    </section>
  )
};

var AppHeader = function(props){
  return(
    <header className="app-header">
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-default">
            <ul className="nav navbar-nav">
              <li><a href="#">My Recipes</a></li>
              <li><a href="#recipe/new/">New Recipe</a></li>
            </ul>
            <p className="navbar-text pull-right">Signed in as {props.username}</p>
          </nav>
        </div>
      </div>
    </header>
  );
};

var AppWrapper = function(props){
  return(
    <div className="wrapper">
      <AppHeader username={"USER_NAME"}/>
      {props.children}
    </div>
  )
};

module.exports = {
  AppWrapper: AppWrapper,
  Section: Section,
  Container: Container,
  Row: Row,
  ContainerRow: ContainerRow
}
