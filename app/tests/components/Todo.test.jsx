var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');
var React = require('react');
var ReactDOM = require('react-dom');
var Todo = require('Todo');


describe("Todo", () => {
  it('Should exist', () => {
    // var todolist  = TestUtils.renderIntoDocument(<TodoList />);
    expect(Todo).toExist();
  });
});
