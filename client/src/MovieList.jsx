import React from 'react';

var MovieList = ({movies}) => (
  <div>
    <ul>
      {movies.map(movie => 
        <li key={movie.title}>{movie.title}</li> 
      )}
    </ul>
  </div>
)

export default MovieList;

