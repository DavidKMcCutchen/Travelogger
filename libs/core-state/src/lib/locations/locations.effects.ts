import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { LocationService } from "@sandbox/core-data";
import { map, mergeMap, catchError, concatMap } from "rxjs/operators";
import { TravelLocation } from "@sandbox/api-interfaces";
import * as LocationActions from './locations.actions';

@Injectable()
export class LocationEffects {
  loadLocation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LocationActions.loadLocation),
      concatMap(action =>
        this.locationService
          .getOneTravelLocation(action.locationId)
          .pipe(
            map((location: TravelLocation) => LocationActions.loadLocationSuccess({ location })),
            catchError(error => [LocationActions.loadLocationFailure({ error })])
          )
      )
    ));

  loadLocations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LocationActions.loadLocations),
      mergeMap(() =>
        this.locationService
          .getTravelLocations()
          .pipe(
            map((locations: TravelLocation[]) => LocationActions.loadLocationsSuccess({ locations })),
            catchError(error => [LocationActions.loadLocationsFailure({ error })])
          )
      )
    ));

  createLocation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LocationActions.createLocation),
      concatMap(action =>
        this.locationService
          .createTravelLocation(action.location)
          .pipe(
            map((location: TravelLocation) => LocationActions.createLocationSuccess({ location })),
            catchError(error => [LocationActions.createLocationFailure({ error })])
          )
      )
    ));

  updateLocation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LocationActions.updateLocation),
      concatMap(action =>
        this.locationService
          .updateTravelLocation(action.location)
          .pipe(
            map((location: TravelLocation) => LocationActions.updateLocationSuccess({ location })),
            catchError(error => [LocationActions.updateLocationFailure({ error })])
          )
      )
    ));

  deleteLocation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LocationActions.deleteLocation),
      concatMap(action =>
        this.locationService
          .deleteTravelLocation(action.location)
          .pipe(
            map((location: TravelLocation) => LocationActions.deleteLocationSuccess({ location })),
            catchError(error => [LocationActions.deleteLocationFailure({ error })])
          )
      )
    ));

  constructor(
    private actions$: Actions,
    private locationService: LocationService
  ) {}
}
