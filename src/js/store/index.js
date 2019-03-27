import { applyMiddleware, createStore } from 'redux';
// import logger from 'redux-logger';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducers';

const logger = createLogger({
  collapsed: true,
});

export const store = createStore(
  rootReducer,
  {},
  applyMiddleware(thunk, logger)
);
// logger must be the last middleware in chain
