import React from 'react';
import MovieList from './MovieList';
import Search from './Search';
import Form from './Form';
import exampleMovies from '../data/exampleMovieList.js';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.movieAdder = this.movieAdder.bind(this);
    //set initial state with an empty movieList
  }
  
  componentDidMount() {
    //call the handle search with the '*' query to get the full movieList
    //callback: setState with the full list
    axios.get('movieList/')
      .then(results => {console.log(results); this.setState({movies: results.data}); })
      .catch(err => {console.log(err)});
  }

  handleSearch(query, cb) {
    
    //query the dataBase for all movies that match the term
    //invoke callback
  }

  movieAdder(movie) {
    var movieList = this.state.movies.slice(0);
    movieList.push({title: movie, watched: false});
    this.setState({movies: movieList});
  }

  render() {
    return (
      <div>
        <header>
        <h1>Movie List</h1>
        </header>
        <nav>
          <Form movieAdder={this.movieAdder} />
          <Search handleSearch={this.handleSearch} />
        </nav>
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
 };

 export default App;
