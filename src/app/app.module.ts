import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FundamentalNgxCoreModule } from '@fundamental-ngx/core';
import { IconModule } from '@fundamental-ngx/core/icon';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityCardComponent } from './components/city-card/city-card.component';
import { storeReducer } from './store/store.reducer';
import { StoreEffects } from './store/store.effects';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    CityCardComponent,
    SearchInputComponent,
    FavoritesComponent,
    NavComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FundamentalNgxCoreModule,
    IconModule,
    StoreModule.forRoot({ root: storeReducer }),
    EffectsModule.forRoot([StoreEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
