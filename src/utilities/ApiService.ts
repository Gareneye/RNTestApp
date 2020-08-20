import axios from 'axios';
import { Urls } from 'constants/Urls';
import { Ticker } from 'models/Ticker';

import { plainToClass } from 'class-transformer';

export default {
  getTickersForAllCoins: () =>
    axios
      .get(Urls.getTickersForAllCoins())
      .then(response => plainToClass(Ticker, response.data)),
};
