import * as actions from '../actions/movie';

const initialState = {
  movies: {results: []},
  query: undefined
};

export default function movie(state = initialState, action) {
  switch (action.type) {
    case actions.MOVIES_FETCHED:
      return {
        ...state,
        movies: action.movies,
        query: action.query
      };
    case actions.MOVIES_FETCHED_FOR_PAGE:
      return {
        ...state,
        movies: action.movies,
      };
    default:
      return state;
  }
}
