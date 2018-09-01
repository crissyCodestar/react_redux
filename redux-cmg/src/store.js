import { applyMiddleware, compose, createStore } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import  createBrowserHistory  from 'history/createBrowserHistory';

//import rootRouter from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

const history = createBrowserHistory();


const initialState = {
  posts,
  comments
}

const store = createStore(
    connectRouter(history)/*(rootRouter)*/,
      initialState,
        compose(
          applyMiddleware(
            routerMiddleware(history)
          )
        )
)

export default store;
