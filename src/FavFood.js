import React from 'react';

export function FavFood(props) {
  return (
    <h1>Here is my FavFood: {props.match.params.id}</h1>
    );
}
