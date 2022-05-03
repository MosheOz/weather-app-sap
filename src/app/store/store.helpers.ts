import { ICityForEdit, ICity } from '../types/city.interface';
import { State } from './store.reducer';

export function addToFavoritesHelper(state: State, city: ICity): State {
  let isCityExists = state.favoriets.find((c: ICity) => c.id === city.id);
  if (isCityExists) {
    return { ...state };
  }
  return {
    ...state,
    citiesToDisplay: null,
    favoriets: [...state.favoriets, city],
  };
}

export function removeFromFavoritesHelper(state: State, city: ICity): State {
  let newFavorietsState = state.favoriets.filter(
    (c: ICity) => c.id !== city.id
  );

  return {
    ...state,
    citiesToDisplay: null,
    favoriets: [...newFavorietsState],
  };
}

export function editFromFavoritesHelper(
  state: State,
  city: ICityForEdit
): State {
  let newFavorietsState = state.favoriets.map((c: ICity) => {
    if (c.id === city.id) {
      return {
        ...c,
        main: {
          ...c.main,
          temp: city.temperature,
          temp_min: city.minTemp,
          temp_max: city.maxTemp,
        },
        wind: {
          ...c.wind,
          speed: city.speed,
        },
      };
    }
    return c;
  });

  return {
    ...state,
    citiesToDisplay: null,
    favoriets: [...(newFavorietsState as ICity[])],
  };
}
