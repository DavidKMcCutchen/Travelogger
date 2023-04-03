import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TravelLocation } from '@sandbox/api-interfaces';

@Component({
  selector: 'sandbox-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.scss'],
})
export class AddDetailsComponent implements OnInit {
  localeInfo: TravelLocation = {
    tripTitle: '',
    id: '',
    city: '',
    state: '',
    country: '',
    description: '',
    date: new Date(),
    addressOne: '',
    addressTwo: '',
  };
  submitted = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  nextPage() {
    if (
      this.localeInfo.city &&
      this.localeInfo.tripTitle &&
      this.localeInfo.country
    ) {
      this.router.navigate(['/new-entry/describe']);
      return;
    }
    this.submitted = true;
  }
}


