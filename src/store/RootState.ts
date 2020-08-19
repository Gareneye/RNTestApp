import { combineReducers } from 'redux';
import { testReducer } from './reducers/TestReducer';

export const rootReducer = combineReducers({
  testBranch: testReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
