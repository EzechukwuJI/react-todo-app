var React = require('react');
var TodoList  = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid  = require('node-uuid');


var TodoApp = React.createClass({
  getInitialState: function(){
    return {
      showCompleted: false,
      searchText: "",
      todos: [
        {id: uuid(), text:'walk the dog'},
        {id: uuid(), text:'clean the house'},
        {id: uuid(), text:'clean the roof'},
        {id: uuid(), text:'clean the hall'}
    ]
  };
},
handleSearch: function(showCompleted, searchText) {
 this.setState({
   showCompleted: showCompleted,
   searchText: searchText.toLowerCase
 });
},
handleAddTodo: function(text){
  this.setState({
    todos: [...this.state.todos,
    {
      id: uuid(),
      text: text
    }
  ]
  })
},
  render: function(){
    var {todos} = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch} />
        <hr/>
        <TodoList todos = {todos} />
        <AddTodo onAddTodo={this.handleAddTodo} />

      </div>
    );
  }
});


module.exports = TodoApp;
