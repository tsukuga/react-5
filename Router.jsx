import React from 'react';
import {Route, Switch,BrowserRouter} from "react-router";

import Ello from '../Ello'


const Router = () => {
    return (
      <BrowserRouter>
        <Switch>
            <Route exact path="/sign" component={Ello} />
        </Switch>
      </BrowserRouter>
    );
};

export default Router;