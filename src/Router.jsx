import React from 'react';
import { Route, Switch } from 'react-router';
import { HashRouter } from 'react-router-dom';
import Ello from './templates/Ello';

const Router = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Ello} />
                <Route exact path="/d" component={Ello} />
            </Switch>
        </HashRouter>
    );
};

export default Router;
