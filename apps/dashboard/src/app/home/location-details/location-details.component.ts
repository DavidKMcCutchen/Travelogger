import { Component, Input, OnInit } from '@angular/core';
import { TravelLocation } from '@sandbox/api-interfaces';

@Component({
  selector: 'sandbox-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.scss'],
})
export class LocationDetailsComponent implements OnInit {
  @Input() locations: TravelLocation[] | null = [];

  options: any;

  overlays: any[] = [];

  ngOnInit() {
    this.options = {
      center: { lat: 28.5384, lng: -81.3789 },
      zoom: 2,
    };
  }
}
