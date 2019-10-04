import React from 'react';

var Movie = ({movie, toggleWatch}) => {
  function clickHandler(event) {
    console.log("This is the event target for the movie I clicked", event.target);
    event.preventDefault();
    {toggleWatch({movie})};
  }

  //Conditional: If movie.watched is false, render To Watch Button, else Watched

  return (
    <div class="movie">
      <div class="title">
        {movie.title}
      </div>
      <div >
        <button class="watched" onClick={clickHandler}>To Watch</button>
      </div>
    </div>
  );
}

export default Movie;