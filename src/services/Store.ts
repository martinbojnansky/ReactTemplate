import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { history } from 'services/History';
import { reducers } from 'reducers/Reducers';

export interface StoreState {
  joke: string
}

export function initialState(): StoreState
{
    return ({
        joke: "..."
    });
};

const middleware = 
[
  require('redux-thunk').default, 
  routerMiddleware(history)
];

export function getStore() {
  return createStore<StoreState>(
  connectRouter(history)(reducers),
  initialState(),
  compose(
      applyMiddleware(...middleware),
    ),
)};