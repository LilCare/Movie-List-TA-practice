import React from 'react';
import MovieList from './MovieList';
import Search from './Search';
import Form from './Form';
import ToggleButtons from './ToggleButtons';
import exampleMovies from '../data/exampleMovieList.js';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      moviesToMount: []
    };
    this.mountAll = this.handleSearch.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.movieAdder = this.movieAdder.bind(this);
    this.toggleWatch = this.toggleWatch.bind(this);
    this.toggleList = this.toggleList.bind(this);
  }
  
  componentDidMount() {
    //call the handle search with the '*' query to get the full movieList
    //callback: setState with the full list
    axios.get('/movieList')
      .then(results => { this.setState({movies: results.data, moviesToMount: results.data}); })
      .then(() => console.log('State after getting movieList from db', this.state))
      .catch(err => { console.log(err) });
  }

  handleSearch(query) {
    let allMovies = this.state.movies;
    let queryLC = query.toLowerCase();
    let filtered = allMovies.reduce((posQuery, movie) => {
      let movieLC = movie.title.toLowerCase();
      if (movieLC.indexOf(queryLC) > -1) {
        posQuery.push(movie);
      }
      return posQuery;
    }, []);
    this.setState({moviesToMount: filtered})
  }

  movieAdder(movie) {
    //let movieList = this.state.movies.slice(0);
    axios.post('/movieList', {title: movie})
      .then(results => ( this.setState({movies: results.data, moviesToMount: results.data}) ))
      .then(() => console.log('State after getting movieList from db', this.state))
      .catch(err => { console.log(err) });
    // movieList.push({title: movie, watched: false});
    // console.log(movieList);
    // this.setState({movies: movieList, moviesToMount: movieList});
  }

  toggleWatch(movie) {
    console.log("this is the movie to toggle", movie);
    let movieList = this.state.movies;
    let movieToggleInd = movie.movie.id - 1;
    movieList[movieToggleInd].watched = 1;
    this.setState({movies: movieList});
  }

  toggleList(watchedBool) {
    //event.target.value = 0 for movies to watch, 1 for watched movies
    let movieList = this.state.movies;
    let toggleMatches = [];
    for (var i = 0; i < movieList.length; i++) {
      //need to compare as strings
      if (movieList[i].watched.toString() === watchedBool) {
        toggleMatches.push(movieList[i]);
      }
    this.setState({moviesToMount: toggleMatches});
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
          <ToggleButtons toggleList={this.toggleList} />
        </nav>
        <MovieList 
          movies={this.state.moviesToMount} 
          toggleWatch={this.toggleWatch} 
        />
        <footer>
          <button 
            class="showAll" 
            onClick={this.componentDidMount.bind(this)} 
          >Show All Movies</button>
        </footer>
      </div>
    );
  }
 };

 export default App;
