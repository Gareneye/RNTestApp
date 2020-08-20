import { combineReducers } from 'redux';
import { tickerReducer } from './reducers/TickerReducer';

const rootReducer = combineReducers({
  tickersBranch: tickerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
type SubStates = (keyof RootState)[];

export const persistedBranches: SubStates = ['tickersBranch'];

export default rootReducer;
