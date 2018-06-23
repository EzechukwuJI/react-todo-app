var React = require('react');
var TodoList  = require('TodoList');


var TodoApp = React.createClass({
  getInitialState: function(){
    return {
      todos: [
        {id: 1, text:'walk the dog'},
        {id: 2, text:'clean the house'},
        {id: 3, text:'clean the roof'},
        {id: 4, text:'clean the hall'}
    ]
  };
},
  render: function(){
    var {todos} = this.state;
    return (
        <TodoList todos = {todos} />
    );
  }
});


module.exports = TodoApp;
