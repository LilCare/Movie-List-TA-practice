import React from 'react';
import ReactDom from 'react-dom';
import App from './src/App.jsx';
import exampleMovies from './data/exampleMovieList.js'
const movies = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
];

ReactDom.render(<App movies={exampleMovies} />, document.getElementById('app'));
