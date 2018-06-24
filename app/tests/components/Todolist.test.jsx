var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');
var React = require('react');
var ReactDOM = require('react-dom');
var TodoList = require('TodoList');

var Todo   =  require('Todo');


describe("TodoList", () => {
  it('Should exist', () => {
    expect(TodoList).toExist();
  });
  it("should render one todo component for each todo item", () => {
    var todos = [{id:1,text:"value 1"},{id:2, text:"value 2"}];
    var todoList  = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo); //returns an array of renderded components of type "Todo" rendered inside of todoList component
    expect(todoComponents.length).toBe(todos.length);// checks if length of returned array equals length of defined array.

  });
});
