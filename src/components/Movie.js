import React from 'react';

const Movie = ({id, title}) => (
  <div key={id}>
    {title}
  </div>
);

export default Movie;