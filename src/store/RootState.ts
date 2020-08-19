import { combineReducers } from 'redux';
import { testReducer } from './reducers/TestReducer';

const rootReducer = combineReducers({
  testBranch: testReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
