import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { LocationService } from "@sandbox/core-data";
import { map, mergeMap, catchError } from "rxjs/operators";
import { fetch, pessimisticUpdate } from "@nrwl/angular";
import { TravelLocation } from "@sandbox/api-interfaces";
import * as LocationActions from './locations.actions';

@Injectable()
export class LocationEffects {
    loadLocation$ = createEffect(() =>
    this.actions$.pipe(
        ofType(LocationActions.loadLocation),
        fetch({
            run: (action) => 
                this.locationService
                .getOneTravelLocation(action.locationId)
                .pipe(map((location: TravelLocation) => LocationActions.loadLocationSuccess({ location }))),
                onError: (action, error) => LocationActions.loadLocationFailure({ error })
        })
    ));

    loadLocations$ = createEffect(() =>
    this.actions$.pipe(
        ofType(LocationActions.loadLocations),
        fetch({
            run: () =>
            this.locationService
            .getTravelLocations()
            .pipe(map((locations: TravelLocation[]) => LocationActions.loadLocationsSuccess({ locations }))),
            onError: (action, error) => LocationActions.loadLocationsFailure({ error })
        })
    ));
    createLocation$ = createEffect(() =>
    this.actions$.pipe(
        ofType(LocationActions.createLocation),
        pessimisticUpdate({
            run: (action) =>
            this.locationService
            .createTravelLocation(action.location)
            .pipe(map((location: TravelLocation) => LocationActions.createLocationSuccess({ location }))),
            onError: (action, error) => LocationActions.createLocationFailure({ error })
        })
    ));

    updateLocation$ = createEffect(() =>
    this.actions$.pipe(
        ofType(LocationActions.updateLocation),
        pessimisticUpdate({
            run: (action) =>
            this.locationService
            .updateTravelLocation(action.location)
            .pipe(map((location: TravelLocation) => LocationActions.updateLocationSuccess({ location }))),
            onError: (action, error) => LocationActions.updateLocationFailure({ error })
        })
    ));

    deleteLocation$ = createEffect(() =>
    this.actions$.pipe(
        ofType(LocationActions.deleteLocation),
        pessimisticUpdate({
            run: (action) =>
            this.locationService
            .deleteTravelLocation(action.location)
            .pipe(map((location: TravelLocation) => LocationActions.deleteLocationSuccess({ location }))),
            onError: (action, error) => LocationActions.deleteLocationFailure({ error })
        })
    ));

    




constructor(
    private actions$: Actions,
    private locationService: LocationService
) {}
}