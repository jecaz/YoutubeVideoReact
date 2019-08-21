import React, { Component } from 'react';

// Class component
class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })}
          placeholder="Search for videos..." />
      </div>
    );
  }
}

export default SearchBar;