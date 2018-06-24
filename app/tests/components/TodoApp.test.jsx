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
});
