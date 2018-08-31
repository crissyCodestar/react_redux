import React, { Component} from 'react';
import { render } from "react-dom";

import App from './components/App';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

import {BrowserRouter, Route} from 'react-router-dom';
import {Router} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

const routes = (
  <Router history={history}>
    <Route path="/" component={App}>
      <Route exact path="/" component={PhotoGrid}/>
      <Route path="/view/:postId" component={Single}/>
    </Route>
  </Router>
)

render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>, document.getElementById("root")
)
