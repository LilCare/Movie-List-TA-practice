import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {query: 'Search...'};
  }

  handleChange(event) {
    this.setState({query: event.target.value});
  }

  handleSubmit(event) {
    alert('A movie was searched: ' + this.state.query);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          <input type="text" value={this.state.query} onChange={this.handleChange.bind(this)} />
        </label>
        <input type="submit" value="Go!" />
      </form>
    );
  }
}

export default Search;