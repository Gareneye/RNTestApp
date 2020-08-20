import { AppAction } from 'store/Store';
import { ActionId } from 'store/ActionId';
import { Ticker } from 'models/Ticker';
import { TickerListSorting, sortTickers } from 'helpers/TickersSortingStrategies';

const initialState: {
  isLoading: boolean;
  tickers: Ticker[];
  sorted: Ticker[]; // Already sorted!
  sortBy: TickerListSorting;
} = {
  isLoading: false,
  tickers: [],
  sorted: [],
  sortBy: TickerListSorting.NONE,
};

export const tickerReducer = (
  state = initialState,
  action: AppAction,
): typeof initialState => {
  switch (action.type) {
    case ActionId.SORT_TICKERS_START: {
      return {
        ...state,
        isLoading: true,
        sortBy: action.payload.sortBy
      };
    }
    case ActionId.SORT_TICKERS_DONE: {
      return {
        ...state,
        isLoading: false,
        sorted: action.payload.sorted,
      };
    }
    case ActionId.FETCH_TICKER_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ActionId.FETCH_TICKER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        tickers: action.payload.tickers,
        sorted: sortTickers(action.payload.tickers, state.sortBy),
      };
    }
    case ActionId.FETCH_TICKER_ERROR: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};
