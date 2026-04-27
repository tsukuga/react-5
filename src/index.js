import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createHashHistory } from 'history';
import createStore from './reducks/store/store';
import App from './App';
import './style.css';

const history = createHashHistory();
export const store = createStore(history);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'),
)
