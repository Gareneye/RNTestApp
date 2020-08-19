import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ActionType } from 'typesafe-actions';
import * as actions from './Actions';
import { rootReducer, RootState } from './RootState';

export type AppAction = ActionType<typeof actions>;

export default function configureStore(preloadedState?: RootState) {
  const middlewareEnhancer = applyMiddleware(...[]);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  module.hot?.accept(() => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });

  return store;
}

export const store = configureStore();
