import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LOCATIONS_FEATURE_KEY, LocationsState, locationsAdapter } from "./locations.reducer";
import { emptyLocation } from "@sandbox/api-interfaces";

export const getLocationState = createFeatureSelector<LocationsState>(LOCATIONS_FEATURE_KEY);

const { selectAll, selectEntities } = locationsAdapter.getSelectors();

export const getLocationsLoaded = createSelector(
    getLocationState,
    (state: LocationsState) => state.loaded
);

export const getLocationsError = createSelector(
    getLocationState,
    (state: LocationsState) => state.error
);

export const getAllLocations = createSelector(
    getLocationState,
    (state: LocationsState) => selectAll(state)
);

export const getLocationsEntities = createSelector(
    getLocationState,
    (state: LocationsState) => selectEntities(state)
);

export const getSelectedLocationId = createSelector(
    getLocationState,
    (state: LocationsState) => state.selectedId
);

export const getSelectedLocation = createSelector(
    getLocationsEntities,
    getSelectedLocationId,
    (entities, selectedId) => (selectedId && entities[selectedId]) || emptyLocation
);
