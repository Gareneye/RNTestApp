import { action } from 'typesafe-actions';
import { ActionId } from './ActionId';

export const testAction = (title: string) =>
  action(ActionId.TEST_MESSAGE, { title });
