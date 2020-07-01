import React from 'react';
import {Route, Switch,BrowserRouter} from "react-router";

import Ello from './templates/Ello'


const Router = () => {
    return (
     
        <Switch>
            <Route exact path="/" component={Ello} />
            <Route exact path="/d" component={Ello} />
        </Switch>
      
    );
};

export default Router;