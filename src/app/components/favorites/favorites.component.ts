import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from 'src/app/store/store.reducer';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  root$!: Observable<State>;

  constructor(private store: Store<{ root: State }>) {
    this.root$ = this.store.select('root');
  }

  ngOnInit(): void {}
}
