import React from 'react';
import {connect} from "react-redux";
import Movie from "./Movie";
import Pages from "./Pages";

const MoviesList = ({movies}) => (
  <div>
    <Pages />
    {movies.map(Movie)}
  </div>
);

export default connect(({movie: {movies: {results}}}) => ({movies: results}))(MoviesList);