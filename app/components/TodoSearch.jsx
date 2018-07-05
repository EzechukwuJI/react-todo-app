var React = require('react');


var todoSearch = React.createClass({
  handleSearch:  function(){
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;
    this.props.onSearch(showCompleted, searchText);
  },
render: function () {
  return (
    <div>
      <div>
        <input type="text" ref = "searchText" onChange= {this.handleSearch} placeholder="Enter search text"/>
      </div>
      <div>
          <label>
              <input type="checkbox" ref="showCompleted" onChange={this.handleSearch} />
              Show completed Todos
        </label>
      </div>
    </div>
  )
}

});

module.exports = todoSearch;
