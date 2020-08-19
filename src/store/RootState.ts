import { combineReducers } from 'redux';
import { testReducer } from './reducers/TestReducer';

const rootReducer = combineReducers({
  testBranch: testReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
type SubStates = (keyof RootState)[];

export const persistedBranches: SubStates = ['testBranch'];

export default rootReducer;
