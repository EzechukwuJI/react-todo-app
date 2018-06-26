var React = require('react');
var TodoList  = require('TodoList');
var AddTodo = require('AddTodo');


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

handleAddTodo: function(text){
  alert(text);
},
  render: function(){
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos = {todos} />,
        <AddTodo onFormSubmit={this.handleAddTodo} />
      </div>
    );
  }
});


module.exports = TodoApp;
