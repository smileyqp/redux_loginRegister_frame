import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import thunk from 'redux-thunk';

import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import {createStore,applyMiddleware} from 'redux';
import rootReducers from './reducers';

import {Provider} from 'react-redux';


const store = createStore(
    rootReducers,
    composeWithDevTools(
        applyMiddleware(thunk,logger),
    )
);

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
