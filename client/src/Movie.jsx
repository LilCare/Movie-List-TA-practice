import React from 'react';

var Movie = ({movie, toggleWatch}) => {
  function clickHandler(event) {
    event.preventDefault();
    toggleWatch({movie});
  }

  return (
    <div className="movie">
      <div className="title">
        {movie.title}
      </div>
      <div className="watched">
        <button onClick={clickHandler}>watched</button>
      </div>
    </div>
  );
}

export default Movie;