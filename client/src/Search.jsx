import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {query: ''};
  }

  handleChange(event) {
    this.setState({query: event.target.value});
  }

  handleSubmit(event) {
    
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Search...
          <input type="text" value={this.state.query} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Search" />
      </form>
    );
  }
}

export default Search;