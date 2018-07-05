var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');
var React = require('react');
var ReactDOM = require('react-dom');
var TodoApp = require('TodoApp');


describe("TodoApp", () => {
  it('Should exist', () => {
    expect(TodoApp).toExist();
  });
  it('Should add Todo to the todos state on handleAddTodo', () => {
    var todoText   =  "test text";
    var todoApp  =  TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({todos:[]});
    todoApp.handleAddTodo(todoText);
    expect(todoApp.state.todos[0].text).toBe(todoText);
    expect(todoApp.state.todos.length).toBe(1);
  });
});
