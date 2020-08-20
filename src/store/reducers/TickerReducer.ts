import { AppAction } from 'store/Store';
import { ActionId } from 'store/ActionId';
import { Ticker } from 'models/Ticker';

enum TickerListFilter {
  NONE,
}

const initialState: {
  isLoading: boolean;
  tickers: Ticker[]; // Already sorted!
  activeFilter: TickerListFilter;
} = {
  isLoading: false,
  tickers: [],
  activeFilter: TickerListFilter.NONE,
};

export const tickerReducer = (
  state = initialState,
  action: AppAction,
): typeof initialState => {
  switch (action.type) {
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
