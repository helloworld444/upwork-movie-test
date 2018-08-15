import React, {Component} from 'react';
import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import reducer from '../reducers';
import {Provider} from "react-redux";
import QueryForm from "./QueryForm";
import MoviesList from "./MoviesList";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  undefined,
  composeEnhancers(applyMiddleware(thunk))
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <QueryForm/>
          <MoviesList/>
        </div>
      </Provider>
    );
  }
}

export default App;
