import React from 'react';
import {connect} from "react-redux";
import {fetchMoviesForPage} from "../actions/movie";

const wrapWithPage = (onClick, i) => () => onClick(i);

const Page = ({i, onClick}) => (
  <button key={i} onClick={wrapWithPage(onClick, i)}>
    {i}
  </button>
);

export default connect(null, {onClick: fetchMoviesForPage})(Page);