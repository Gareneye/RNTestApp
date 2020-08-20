const BASE_URL = 'https://api.coinpaprika.com/v1/';

export const Urls = {
  getAllCoins: () => `${BASE_URL}coins`,
  getTickersForAllCoins: () => `${BASE_URL}tickers`,
};
