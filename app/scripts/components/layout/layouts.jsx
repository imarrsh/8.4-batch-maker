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

var AppWrapper = function(props){
    return(
      <div className="wrapper">
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
