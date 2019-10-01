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
    event.preventDefault();
    this.setState({value: ''});
    alert('A movie was searched: ' + this.state.query);
    //
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          <input type="text" placeholder="Search..." value={this.state.query} onChange={this.handleChange.bind(this)} />
        </label>
        <input type="submit" value="Go!" />
      </form>
    );
  }
}

export default Search;