import React from 'react';

var Movie = ({movie}) => ( 
  <div className="movie">
    <div className="title">
      {movie.title}
    </div>
      <button>watched</button>
  </div>
)

export default Movie;