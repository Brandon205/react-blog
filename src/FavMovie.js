import React from 'react';

export function FavMovie(props) {
  let mappedMovies = props.movies.map(movie => <li>{movie}</li>)
  return (
    <>
    <h1>Here are my favorite movies: </h1>
    <ul>
      {mappedMovies}
    </ul>
    </>
  );
}
