import React, { Component} from 'react';
import { render } from "react-dom";

import App from './components/App';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

import {BrowserRouter} from 'react-router-dom';
import { Route, Switch, Router} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

const router = (
    <BrowserRouter>
      <Router history={history}>
        <App>
          <Switch>
            <Route exact path="/" component={PhotoGrid}/>
            <Route pathe="/view/:postId" component={Single}/>
          </Switch>
        </App>
      </Router>
    </BrowserRouter>
)

render(
router, document.getElementById("root")
)
