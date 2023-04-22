// table.component.ts

import { Component, OnDestroy, OnInit } from '@angular/core';
import { TravelLocation } from '@sandbox/api-interfaces';
import { LocationsFacade } from '@sandbox/core-state';
import { SharedDataService } from '@sandbox/core-data';
import { Subject, takeUntil } from 'rxjs';


@Component({
  selector: 'sandbox-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, OnDestroy {
  locations: TravelLocation[] = [];
  cityFilter = '';

  private destroy$ = new Subject<void>();

  constructor(
    private locationsFacade: LocationsFacade,
    private shareData: SharedDataService,
  ) {}

  ngOnInit(): void {
    this.shareData.currentData$
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.locations = data;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // selectLocation(location: TravelLocation) {
  //   this.locationsFacade.selectLocation(location.id);
  // };

  // viewLocation(locationId: TravelLocation) {
  //   this.router.navigate(['/locations', locationId]);
  // }

  // onTableRowClick(locationId: string): void {
  //   this.updateLocation(locationId);
  // }
  
  // updateLocation(locationId: string): void {
  //   // access the store
  //   this.store.dispatch(
  //     new LocationsActions.LocationSelected(locationId)
  //   );


  // onEdit(location: TravelLocation) {
  //   this.editedLocation = { ...location };
  // }
  
  // onUpdate(location: TravelLocation) {
  //   this.store.dispatch(updateLocation({ location }));
  //   this.editedLocation = null;
  // }
  

  onEditComplete(event: any, location: TravelLocation) {
    const updatedLocation: TravelLocation = event.data;
    this.locationsFacade.updateLocation({ ...location, ...event.data });
  }

  get filteredCities(): TravelLocation[] {
    return this.locations.filter((tripData) =>
      tripData.city.toLowerCase().includes(this.cityFilter.toLowerCase())
    );
  }
}
