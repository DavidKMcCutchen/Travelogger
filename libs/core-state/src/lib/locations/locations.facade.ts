import { Injectable } from "@angular/core";
import { TravelLocation } from "@sandbox/api-interfaces";
import { Action, ActionsSubject, select, Store } from "@ngrx/store";
import * as LocationsActions from "./locations.actions";
import * as fromLocations from "./locations.reducer";
import * as LocationsSelectors from "./locations.selectors";
import { filter, map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class LocationsFacade {
    allLocations$ = this.store.pipe(
        map((state) => LocationsSelectors.getAllLocations(state)),
    )
    selectedLocation$ = this.store.pipe(select(LocationsSelectors.getSelectedLocation));
    loaded$ = this.store.pipe(select(LocationsSelectors.getLocationsLoaded));

    mutations$ = this.actions$.pipe(
        filter((action: Action) =>
            action.type === LocationsActions.createLocation({} as any).type ||
            action.type === LocationsActions.updateLocation({} as any).type ||
            action.type === LocationsActions.deleteLocation({} as any).type
        )
    )

    selectLocation(locationId: string) {
        this.dispatch(LocationsActions.selectLocation({ locationId }));
    };

    loadLocations() {
        this.dispatch(LocationsActions.loadLocations());
    }

    loadLocation(locationId: string) {
        this.store.dispatch(LocationsActions.loadLocation({ locationId }));
    }

    saveLocation(location: TravelLocation) {
        location.id ? this.updateLocation(location) : this.createLocation(location);
    }

    createLocation(location: TravelLocation) {
        this.dispatch(LocationsActions.createLocation({ location }));
    }

    updateLocation(location: TravelLocation) {
        this.dispatch(LocationsActions.updateLocation({ location }));
    }

    deleteLocation(location: TravelLocation) {
        this.dispatch(LocationsActions.deleteLocation({ location }));
    }

    dispatch(action: Action) {
        this.store.dispatch(action);
    }

    constructor(
        private store: Store<fromLocations.LocationsPartialState>,
        private actions$: ActionsSubject
    ) {}
}