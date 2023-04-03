import { Component, Input } from '@angular/core';
import { TravelLocation } from '@sandbox/api-interfaces';

@Component({
  selector: 'sandbox-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.scss'],
})
export class LocationDetailsComponent {
  @Input() locations: TravelLocation[] | null = [];
}
