var React = require('react');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var ReactDOM = require('react-dom');
var $ = require('jQuery');

var TodoSearch = require('TodoSearch');


describe('TodoSearch', () => {
  it("should exist", () => {
      expect(TodoSearch).toExist();
  });

  it("should call onSearch with entered search input", () => {
    var spy = expect.createSpy();
    var todoSearch  = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);
    todoSearch.refs.searchText.value = "Searching";
    TestUtils.Simulate.change(todoSearch.refs.searchText);
    expect(spy).toHaveBeenCalledWith(false, "Searching");
  });
  it("should call onSearch when checkbox is toggled", () => {
    var spy = expect.createSpy();
    var todoSearch  = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);
    todoSearch.refs.searchText.value = "Searching";
     todoSearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(todoSearch.refs.searchText);
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);

    // todoSearch.refs.showCompleted.checked = true;
    expect(spy).toHaveBeenCalledWith(true, "Searching");
  });
});
