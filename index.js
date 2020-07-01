import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import * as History from 'history';
import createStore from './reducks/store/store';
import App from './App';

import Draggable from './Hello';
import './style.css';

// connected-react-router - action経由でルーティングが可能、push,replace..
// historyを強化
const history = History.createBrowserHistory();
export const store = createStore(history);

render(
    <Provider store={store}>
    <ConnectedRouter history={history}>
    <App/>
    </ConnectedRouter>
    </Provider>,
    document.getElementById('root'),
)


