import { AppAction } from 'store/Store';
import { ActionId } from 'store/ActionId';

const initialState = {
  title: '',
};

export const testReducer = (
  state = initialState,
  action: AppAction,
): typeof initialState => {
  switch (action.type) {
    case ActionId.TEST_MESSAGE: {
      return {
        ...state,
        title: action.payload.title,
      };
    }
    default:
      return state;
  }
};
