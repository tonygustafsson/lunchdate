import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import fetch from 'isomorphic-fetch'

const nock = require('nock');

const datesList = nock('http://localhost:8081')
  .get('/lunchdate/date/list')
  .reply(200, [{
    "id": "7a0445a0-e8a7-45a4-b34f-e2c354669ba0",
    "note": "",
    "participants": [ "Leffe" ],
    "place": "Nonna",
    "takeaway": false,
    "time": "12:00",
    "user": "Leffe"
  }]);

const placesList = nock('http://localhost:8081')
  .get('/lunchdate/place/list')
  .reply(200, [
    {
      "id": "31cca615-d33c-41fc-bc00-7cc2dd8c0238",
      "identifier": "barabicu",
      "name": "Barabicu",
      "imageUrl": "/img/places/barabicu.png"
    },
    {
      "id": "447cdc7f-2fb8-40aa-9452-5cdddf0441bd",
      "identifier": "beijing8",
      "name": "Beijing8",
      "imageUrl": "/img/places/beijing8.png"
    },
    {
      "id": "75f429ff-52e6-4e86-9a42-11c27b865976",
      "identifier": "biljardpalatset",
      "name": "Biljardpalatset",
      "imageUrl": "/img/places/biljardpalatset.png"
    }
  ]);

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
