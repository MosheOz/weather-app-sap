import { createReducer, on } from '@ngrx/store';
import { ICity } from '../types/city.interface';
import {
  requestCity,
  loadResults,
  addToFavoriets,
  removeFromFavoriets,
  editFromFavoriets,
} from './store.actions';
import {
  addToFavoritesHelper,
  editFromFavoritesHelper,
  removeFromFavoritesHelper,
} from './store.helpers';

export interface State {
  citiesToDisplay: ICity | null;
  favoriets: ICity[];
}

export const initialState: State = {
  citiesToDisplay: null,
  favoriets: [] as any,
};

export const storeReducer = createReducer(
  initialState,
  on(requestCity, (state) => ({ ...state })),
  on(loadResults, (state, { cities }) => ({
    ...state,
    citiesToDisplay: cities,
  })),
  on(addToFavoriets, (state, { city }) => addToFavoritesHelper(state, city)),
  on(removeFromFavoriets, (state, { city }) =>
    removeFromFavoritesHelper(state, city)
  ),
  on(editFromFavoriets, (state, { cityForEdit }) =>
    editFromFavoritesHelper(state, cityForEdit)
  )
);
