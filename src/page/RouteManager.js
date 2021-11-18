import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login/Login';
import Register from './Register/Register'
import TermCondition from './TermCondition/TermCondition';


function RouteManager() {
    return (
        <Switch>
            <Route exact path="/">
                <Login />
            </Route>
            <Route  path="/register">
                <Register />
            </Route>
            <Route  path="/termCondition">
                <TermCondition />
            </Route>
        </Switch>
    )
}

export default RouteManager
