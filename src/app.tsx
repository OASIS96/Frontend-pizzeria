import React from 'react';
import { Redirect, BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/home/home.page';

export const App = () => {
    return (
      <Router>
        <Switch >
          
          <Route exact path="/home" >
            <HomePage />
          </Route>
          <Redirect from="/" to="home" />
        </Switch>
      </Router>
    );
}
       