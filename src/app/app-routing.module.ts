import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { SearchInputComponent } from './components/search-input/search-input.component';

const routes: Routes = [
  { path: 'search', component: SearchInputComponent },
  { path: 'favoriets', component: FavoritesComponent },
  { path: '', redirectTo: 'search', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
