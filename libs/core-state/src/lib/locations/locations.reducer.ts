import { TravelLocation } from "@sandbox/api-interfaces";
import { createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import * as LocationActions from "./locations.actions";

export const LOCATIONS_FEATURE_KEY = 'locations';

export interface LocationsState extends EntityState<TravelLocation> {
    selectedId?: string | number; // which Locations record has been selected
    loaded: boolean; // has the Locations list been loaded
    error?: string | null; // last known error (if any)
};

export interface LocationsPartialState {
    readonly [LOCATIONS_FEATURE_KEY]: LocationsState
};

export const locationsAdapter: EntityAdapter<TravelLocation> = createEntityAdapter<TravelLocation>({ selectId: (location: TravelLocation) => location.id });

export const initialLocationsState: LocationsState = locationsAdapter.getInitialState({
    // set initial required properties
    
        loaded: false
    
});

const onFailed = (state, { error }): LocationsState => ({ ...state, error });

const onDispatch = (state, action): LocationsState => ({
    ...state,
    loaded: false,
    error: null
});

const _locationsReducer = createReducer(
    initialLocationsState,
    on(
        LocationActions.loadLocationFailure,
        LocationActions.loadLocationsFailure,
        LocationActions.createLocationFailure,
        LocationActions.updateLocationFailure,
        LocationActions.deleteLocationFailure,
        onFailed
    ),
    on(
        LocationActions.loadLocation,
        LocationActions.loadLocations,
        LocationActions.createLocation,
        LocationActions.updateLocation,
        LocationActions.deleteLocation,
        onDispatch
    ),
    on(
        LocationActions.loadLocationSuccess,
        (state, { location }) =>
        locationsAdapter.upsertOne(location, { ...state, loaded: true })
    ),
    on(
        LocationActions.selectLocation,
        (state, { locationId }) => ({ ...state, selectedId: locationId })
    ),
    on(
        LocationActions.loadLocationsSuccess,
        (state, { locations }) =>
        locationsAdapter.setAll(locations, { ...state, loaded: true })
    ),
    on(
        LocationActions.deleteLocationSuccess,
        (state, { location }) =>
        locationsAdapter.removeOne(location.id, { ...state, loaded: true })
    ),
    on(
        LocationActions.updateLocationSuccess,
        (state, { location }) =>
        locationsAdapter.updateOne(
            { id: location.id, changes: location },
            { ...state, loaded: true }
        )
    ),
    on(
        LocationActions.createLocationSuccess,
        (state, { location }) =>
        locationsAdapter.addOne(location, { ...state, loaded: true })
    )
);

export function locationsReducer(state: LocationsState | undefined, action: Action) {
    return _locationsReducer(state, action);
}
