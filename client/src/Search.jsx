import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {query: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({query: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSearch(this.state.query);
    this.setState({query: ''});
    //alert('A movie was searched: ' + this.state.query);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} class="nav" >
        <label>
          <input type="text" class="textbox" placeholder="Search..." value={this.state.query} onChange={this.handleChange} />
        </label>
        <input type="submit" class="submit" value="Go!" />
      </form>
    );
  }
}

export default Search;