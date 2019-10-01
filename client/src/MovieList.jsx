import React from 'react';
import Movie from './Movie.jsx';

var MovieList = ({movies}) => (
  <section>
    {movies.map(movie => 
      <Movie key={movie.title} movie={movie} /> 
    )}
  </section>
)

export default MovieList;

