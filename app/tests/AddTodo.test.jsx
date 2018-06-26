var React = require('react');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');
var ReactDOM = require('react-dom');

var AddTodo  =   require('AddTodo');


describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should call onFormSubmit if valid string is entered', () => {
    var spy = expect.createSpy();
    var addtodoForm = TestUtils.renderIntoDocument(<AddTodo onFormSubmit={spy} />);
    var $el = $(ReactDOM.findDOMNode(addtodoForm));
    addtodoForm.refs.todo_text.value="my first todo";
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toHaveBeenCalledWith("my first todo");
  });

  it('should not call onFormSubmit if todotext is empty', () => {
    var spy = expect.createSpy();
    var addtodoForm = TestUtils.renderIntoDocument(<AddTodo onFormSubmit={spy} />);
    var $el = $(ReactDOM.findDOMNode(addtodoForm));
    addtodoForm.refs.todo_text.value="";
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toNotHaveBeenCalled();
  });
});
