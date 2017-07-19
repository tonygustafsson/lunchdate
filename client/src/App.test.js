import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import fetch from 'isomorphic-fetch'


const myCompose = compose(applyMiddleware(thunk));

const store = createStore(
    reducers,
    {},
    myCompose
);

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
      <Provider store={store}>
          <App store={store} />
      </Provider>, div
  );
});
