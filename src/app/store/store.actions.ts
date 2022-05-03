import { createAction, props } from '@ngrx/store';
import { ICityForEdit, ICity } from '../types/city.interface';

export const requestCity = createAction(
  '[Search Component] Request City',
  props<{ term: string }>()
);
export const loadResults = createAction(
  '[Search Service] Load Results',
  props<{ cities: ICity }>()
);
export const addToFavoriets = createAction(
  '[Favorites Component] Add To Favorite',
  props<{ city: ICity }>()
);
export const removeFromFavoriets = createAction(
  '[Favorites Component] Remove From Favorite',
  props<{ city: ICity }>()
);
export const editFromFavoriets = createAction(
  '[Favorites Component] Edit From Favorite',
  props<{ cityForEdit: ICityForEdit }>()
);
