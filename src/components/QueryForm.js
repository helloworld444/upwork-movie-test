import React from 'react';
import {reduxForm} from "redux-form";
import {compose} from "redux";
import {connect} from "react-redux";
import {fetchMovies} from "../actions/movie";
import FormField from "./FormField";

const QueryForm = ({handleSubmit}) => (
  <form onSubmit={handleSubmit}>
    <div>
      <div>Enter search query</div>
      <FormField name='query'/>
    </div>

    <input type='submit' value='Search'/>
  </form>
);


export default compose(
  connect(null, {onSubmit: fetchMovies}),
  reduxForm({form: 'query'}),
)(QueryForm);