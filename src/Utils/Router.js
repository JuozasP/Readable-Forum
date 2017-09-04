import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { BrowserHistory } from 'react-history';



const Router = () => (
    <BrowserRouter history={BrowserHistory}>
        <Switch>
            <Route exact path="/"/>
            <Route exact path="/search"/>
        </Switch>
    </BrowserRouter>

);

export default Router;