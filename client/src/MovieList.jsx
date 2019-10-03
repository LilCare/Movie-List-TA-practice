import React from 'react';
import Movie from './Movie.jsx';

var MovieList = ({movies, toggleWatch}) => (
  <section>
    <div>
      {movies.map(movie => 
        <Movie key={movie.title} movie={movie} toggleWatch={toggleWatch} /> 
      )}
    </div>
  </section>
)

export default MovieList;



