import axios from 'axios';
import { Urls } from 'constants/Urls';

export default {
  getTestData: () =>
    axios.get(Urls.testUrl('Test')).then(response => response.data),
  // .then(response => plainToClass(ExampleModel, response.data))
  // .catch(error => {
  //   throw plainToClass(ExampleModel /* error */, error.response.data);
  // }),
};
