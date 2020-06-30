import React from 'react';
import {Route, Switch} from "react-router";

import {Ello} from './templates/Ello'
import {App} from './App'


const Router = () => {
    return (
        <Switch>
            <Route exact path="/signin" component={Ello} />
            <Route exact path="/sign" component={App} />
        </Switch>
    );
};

export default Router;