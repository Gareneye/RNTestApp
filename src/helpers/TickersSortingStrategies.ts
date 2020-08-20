import { Ticker } from 'models/Ticker';

export enum TickerListSorting {
  NONE,
  LOWER_PRICE,
  HIGHER_PRICE,
}

export const sortTickers = (tickers: Ticker[], sortBy: TickerListSorting) => {
  switch (sortBy) {
    case TickerListSorting.LOWER_PRICE: {
      return tickers.sort((a, b) => a.quotes.USD.price - b.quotes.USD.price); // Todo: move hardcoded USD to store
    }
    case TickerListSorting.HIGHER_PRICE: {
      return tickers.sort((a, b) => b.quotes.USD.price - a.quotes.USD.price); // Todo: move hardcoded USD to store
    }
    case TickerListSorting.NONE: {
      return tickers;
    }
  }
};
