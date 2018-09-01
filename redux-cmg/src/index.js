import React, { Component} from 'react';
import { render } from "react-dom";

import App from './components/App';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';
import store from './store';
import history from './store';

import { Route, Switch} from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux'



const router = (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <App/>
          <Switch>
            <Route exact path="/" component={PhotoGrid}/>
            <Route pathe="/view/:postId" component={Single}/>
          </Switch>
        </div>
      </ConnectedRouter>
    </Provider>
)

render(
router, document.getElementById("root")
)
