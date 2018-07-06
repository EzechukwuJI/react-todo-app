var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe("TodoAPI", () => {
  it("should exist", () => {
    expect(TodoAPI).toExist();
  });

  describe("setTodos", () => {
    beforeEach(()=> { // this is a built-in mocha method whic runs before each test is executed. There also exist the afterEach() whic does exactly the opposite.
      localStorage.removeItem("todos");
    });
    it("should set valid todos to array", () => {
      var todos = [{id: 23, text:"test text", completed: false}];
      TodoAPI.setTodos(todos);
      var actualTodos = JSON.parse(localStorage.getItem('todos'));
      expect(actualTodos).toEqual(todos);
    });
    it("should not set invalid todos to array", () => {
      var badTodos = {a: "b"};
      TodoAPI.setTodos(badTodos);
      expect(localStorage.getItem('todos')).toBe(null);
    });
  });
  describe("get todos", () => {
    it("should return empty array for bad local storage data", () => {
      var actualTodos  =  TodoAPI.getTodos(); // note that at this point no todo element in local localStorage
      expect(actualTodos).toEqual([]);
    });
    it("should array if valid data in localstorage", () => {
      var todos = [{id: 23, text:"test text", completed: false}];
      // add todo to local storage before testing
      localStorage.setItem('todos', JSON.stringify(todos));
      var expectedTodo = TodoAPI.getTodos();
      expect(expectedTodo).toEqual(todos);
    })
  });
})
