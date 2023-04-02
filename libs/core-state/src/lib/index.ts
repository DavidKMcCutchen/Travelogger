import { ActionReducerMap } from "@ngrx/store";
import * as fromLocations from "./locations/locations.reducer";

export interface AppState {
    [fromLocations.LOCATIONS_FEATURE_KEY]: fromLocations.LocationsState;
};

export const reducers: ActionReducerMap<AppState> = {
    [fromLocations.LOCATIONS_FEATURE_KEY]: fromLocations.locationsReducer,
};