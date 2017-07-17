import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import App from './App';

const myCompose = process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__())
    : compose(applyMiddleware(thunk));


const store = createStore(
    reducers,
    {},
    myCompose
);

ReactDOM.render(
    <Provider store={store}>
        <App store={store} />
    </Provider>,
    document.getElementById('root')
);
