import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { ActionType } from 'typesafe-actions';
import * as actions from './Actions';
import rootReducer, { RootState } from './RootState';
import { rootSaga } from './sagas/RootSaga';

export type AppAction = ActionType<typeof actions>;

export default function configureStore(preloadedState?: RootState) {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);
  sagaMiddleware.run(rootSaga);

  module.hot?.accept(() => {
    const nextRootReducer = require('./RootState').default;
    store.replaceReducer(nextRootReducer);
  });

  return store;
}

export const store = configureStore();
