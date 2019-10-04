import React from 'react';

var Movie = ({movie, toggleWatch}) => {
  function clickHandler(event) {
    console.log("This is the event target for the movie I clicked", event.target);
    event.preventDefault();
    {toggleWatch({movie})};
  }

  return (
    <div class="movie">
      <div class="title">
        {movie.title}
      </div>
      <div class="watched">
        <button onClick={clickHandler}>watched</button>
      </div>
    </div>
  );
}

export default Movie;