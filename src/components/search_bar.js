import React, { Component } from 'react';

// FUNCTIONAL COMPONENT
// const SearchBar = () => {
//   return <input />
// };

// CLASS COMPONENT
class SearchBar extends Component {
  constructor(props) {
    super(props);
    // The object we assign here will contain properties we want
    // to record on the state
    this.state = { term: '' };
    // Only inside the constructor function do we change the state with a
    // simple assignment operator; we must manipulate state w/ this.setState({obj})
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
