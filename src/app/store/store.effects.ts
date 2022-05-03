import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { requestCity, loadResults } from './store.actions';
import { SearchService } from '../services/search.service';
import { of } from 'rxjs';
import { ICity } from '../types/city.interface';

@Injectable()
export class StoreEffects {
  loadResults$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestCity),
      exhaustMap((action) =>
        this.searchService.searchEntries(action.term).pipe(
          map((res: ICity) => loadResults({ cities: res })),
          catchError((err) => of(loadResults({ cities: err.error.message })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private searchService: SearchService
  ) {}
}
