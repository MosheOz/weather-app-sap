import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  addToFavoriets,
  editFromFavoriets,
  removeFromFavoriets,
} from '../store/store.actions';
import { State } from '../store/store.reducer';
import { ToastService } from '../toast.service';
import { ICity } from '../types/city.interface';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss'],
})
export class CityCardComponent implements OnInit, OnChanges {
  @Input() city: ICity | null = null;
  @Input() isRemoveAailable = false;

  form!: FormGroup;

  cityIcon = '';
  name = '';
  country = '';
  temperature: number | null = null;
  minTemp: number | null = null;
  maxTemp: number | null = null;
  speed: number | null = null;
  isEditMode = false;

  editValuesArray = [
    { label: 'Temperature', formControl: 'temperature' },
    { label: 'Min Temperature', formControl: 'minTemp' },
    { label: 'Max Temperature', formControl: 'maxTemp' },
    { label: 'Wind Speed', formControl: 'speed' },
  ];

  constructor(
    private store: Store<{ root: State }>,
    private toastService: ToastService,
    private readonly fb: FormBuilder
  ) {
    this.buildForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    let city = changes['city'].currentValue;

    if (!city) return;

    this.setProps(city);
    this.buildForm();
  }

  setProps(city: ICity): void {
    if (!city?.weather) return;

    this.cityIcon = city.weather[0]?.icon;
    this.name = city.name;
    this.country = city.sys.country;
    this.temperature = city.main.temp;
    this.minTemp = city.main.temp_min;
    this.maxTemp = city.main.temp_max;
    this.speed = city.wind.speed;
  }

  addToFavorites(): void {
    if (!this.city) return;
    this.isRemoveAailable
      ? this.store.dispatch(removeFromFavoriets({ city: this.city as ICity }))
      : this.store.dispatch(addToFavoriets({ city: this.city as ICity }));
    this.toastService.open(
      this.isRemoveAailable ? 'Removed Successfully' : 'Added Successfully'
    );
  }

  editMode(): void {
    if (this.isEditMode) {
      this.store.dispatch(
        editFromFavoriets({
          cityForEdit: {
            id: this.city?.id as number,
            ...this.form.value,
          },
        })
      );
    }
    this.isEditMode = !this.isEditMode;
  }

  buildForm(): void {
    this.form = this.fb.group({
      temperature: [this.city?.main?.temp, [Validators.required]],
      minTemp: [this.city?.main?.temp_min, [Validators.required]],
      maxTemp: [this.city?.main?.temp_max, [Validators.required]],
      speed: [this.city?.wind?.speed, [Validators.required]],
    });
  }

  ngOnInit(): void {}
}
