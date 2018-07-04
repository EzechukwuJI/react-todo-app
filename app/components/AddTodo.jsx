var React = require('react');



var AddTodo = React.createClass({
  // getInitialState: function(){
  //   return {
  //
  //   }
  // }
  handleSubmit: function(e){
    e.preventDefault();
    var todoText  =  this.refs.todo_text.value;
    if (todoText.length > 0){
      this.props.onAddTodo(todoText);
      this.refs.todo_text.value="";
    } else {
      alert("you have not entered any text");
      this.refs.todo_text.focus();
    }
  },

  renderTodoForm: function(){
    return (
      <form ref="add_todo_form" onSubmit = {this.handleSubmit} >
        <input type= "text" ref="todo_text" placeholder="What do you want to do?"/>
        <button className="button">Add Todo</button>
      </form>
    );
  },

  render: function(){
    return (
      <div>
        {this.renderTodoForm()}
      </div>
    );
  }
});

module.exports = AddTodo;
