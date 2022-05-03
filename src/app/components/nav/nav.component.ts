import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  actions = [
    {
      glyph: 'search',
      callback: () => this.router.navigate(['/']),
      label: 'search',
    },
    {
      glyph: 'favorite-list',
      callback: () => this.router.navigate(['/favoriets']),
      label: 'Notifications',
    },
  ];
}
