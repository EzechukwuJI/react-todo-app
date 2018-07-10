var $ = require('jQuery');

module.exports = {
  setTodos: function(todos) {
    if($.isArray(todos)){
      localStorage.setItem('todos', JSON.stringify(todos)); // localStorage only stores strings as such we use stringify to convert the todos array to strings
      return todos;
    }
  },
  getTodos: function() {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];
    try{
      todos =  JSON.parse(stringTodos); // Tries to convert back the saved string to arrays
    } catch(e) {
    }
    return $.isArray(todos) ? todos : []; // checks to be sure we don't return an object instead of an array
  },

  filterTodos: function(todos, showCompleted, searchText){
    var filteredTodos = todos;

    // filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });
    // sort the TodoS
    filteredTodos.sort((a,b) => {
      if (!a.showCompleted && b.completed){
        return -1;
      } else if (a.completed && !b.completed){
        return 1;
      } else {
        return 0;
      }
    });

    // filter with searchtext
   filteredTodos = filteredTodos.filter((todo) => {
     var todoText = todo.text.toLowerCase();
     return searchText.length === 0 || todoText.indexOf(searchText) > -1;
   });

    return filteredTodos;
  }
};
