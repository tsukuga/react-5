import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { InfosReduer } from './reducks/infos/reducers';
import App from './App';
import './style.css';

const store = createStore(
    combineReducers({
        infos: InfosReduer,
    }),
    applyMiddleware(thunk)
);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'),
)
