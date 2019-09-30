import React from 'react';
import MovieList from './MovieList';


const App = ({movies}) => {
  return (
    <div>
      <header>
        <h1>Movie List</h1>
      </header>
      <MovieList movies={movies} />
    </div>
  );
};

export default App;



//{movies[0].title}

