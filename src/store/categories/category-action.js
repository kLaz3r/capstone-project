import { createAction } from '../../utils/reducer/reducer';
import { CATEGORIES_ACTION_TYPES } from './category-types';

export const setCategories = (categories) => {
  return createAction(
    CATEGORIES_ACTION_TYPES.SET_CATEGORIES,
    categories
  );
};
