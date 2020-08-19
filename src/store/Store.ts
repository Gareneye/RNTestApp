import AsyncStorage from '@react-native-community/async-storage';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { ActionType } from 'typesafe-actions';
import * as actions from './Actions';
import rootReducer, { persistedBranches, RootState } from './RootState';
import { rootSaga } from './sagas/RootSaga';

export type AppAction = ActionType<typeof actions>;

export default function configureStore(preloadedState?: RootState) {
  // Redux Saga
  const sagaMiddleware = createSagaMiddleware();

  // Redux Persist
  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: persistedBranches as string[],
  };

  const persistedRootReducer = persistReducer(persistConfig, rootReducer);

  // Rest Configuration
  const middlewares = [sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(
    persistedRootReducer,
    preloadedState,
    composedEnhancers,
  );
  sagaMiddleware.run(rootSaga);
  const persistor = persistStore(store as any);

  // Hot Reloading
  module.hot?.accept(() => {
    const nextRootReducer: typeof rootReducer = require('./RootState').default;
    const nexPersistedRootReducer = persistReducer(
      persistConfig,
      nextRootReducer,
    );
    store.replaceReducer(nexPersistedRootReducer);
  });

  return { store, persistor };
}

export const { store, persistor } = configureStore();
