import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  Subject,
  switchMap,
  takeUntil,
  Observable,
  of,
  pluck,
} from 'rxjs';
import { Store } from '@ngrx/store';

import { SearchService } from '../search.service';
import { State } from '../store/store.reducer';
import { requestCity } from '../store/store.actions';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit, OnDestroy {
  readonly results$!: Observable<any>;
  readonly form: FormGroup;
  private readonly cleanupSubject$ = new Subject();

  constructor(
    private readonly fb: FormBuilder,
    private store: Store<{ root: State }>
  ) {
    this.form = this.fb.group({
      searchInput: ['', [Validators.required]],
    });
    this.results$ = store.select('root');
  }

  ngOnInit(): void {
    const searchInput = this.form.get('searchInput');
    searchInput!.valueChanges
      .pipe(
        takeUntil(this.cleanupSubject$),
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap((value: string) =>
          of(this.store.dispatch(requestCity({ term: value })))
        )
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.cleanupSubject$.next(true);
  }
}
