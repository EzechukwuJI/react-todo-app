var React = require('react');
var uuid  = require('node-uuid');


var TodoList  = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');


var TodoApp = React.createClass({
  getInitialState: function(){
    return {
      showCompleted: false,
      searchText: "",
      todos: TodoAPI.getTodos()
    //   todos: [
    //     {id: uuid(), text:'walk the dog',completed:false},
    //     {id: uuid(), text:'clean the house',completed:true},
    //     {id: uuid(), text:'clean the roof',completed:false},
    //     {id: uuid(), text:'clean the hall',completed:true}
    // ]
  };
},
componentDidUpdate: function(){
  TodoAPI.setTodos(this.state.todos);
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
      text: text,
      completed:false
    }
  ]
  })
},
handleToggle: function(id){
  var updateTodos = this.state.todos.map((todo) => {
    if(todo.id === id){
      todo.completed = !todo.completed
    }
    return todo;
  });
  this.setState({
    todos: updateTodos
  });
},
  render: function(){
    var {todos} = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch} />
        <hr/>
        <TodoList todos = {todos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddTodo} />

      </div>
    );
  }
});


module.exports = TodoApp;
