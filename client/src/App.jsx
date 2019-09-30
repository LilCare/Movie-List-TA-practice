import React from 'react';
import MovieList from './MovieList';
import Search from './Search';
import exampleMovies from '../data/exampleMovieList.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {movies: exampleMovies}
    //set initial state with an empty movieList
  }
  
  componentDidMount () {
    //call the handle search with the '*' query to get the full movieList
    //callback: setState with the full list
  }

  handleSearch(query, cb) {
    
    //query the dataBase for all movies that match the term
    //invoke callback
  }

  render() {
    return (
      <div>
        <header>
        <h1>Movie List</h1>
        </header>
        <nav>
          <Search handleSearch={this.handleSearch.bind(this)} />
        </nav>
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
 };

 export default App;
