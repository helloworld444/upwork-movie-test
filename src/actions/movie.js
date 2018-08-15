import {API_KEY} from "../utils/const";

export const MOVIES_FETCHED = 'MOVIES_FETCHED';
export const MOVIES_FETCHED_FOR_PAGE = 'MOVIES_FETCHED_FOR_PAGE';

export const fetchMovies = ({query}) =>
  async (dispatch) => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`);
    dispatch({type: MOVIES_FETCHED, movies: await response.json(), query});
  };

export const fetchMoviesForPage = (page) =>
  async (dispatch, getState) => {
    const query = getState().movie.query;
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`);
    dispatch({type: MOVIES_FETCHED_FOR_PAGE, movies: await response.json()});
  };