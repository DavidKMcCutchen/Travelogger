import { createAction, props } from '@ngrx/store';
import { TravelLocation } from '@sandbox/api-interfaces';

// Select Entity

export const selectLocation = createAction(
  '[Locations] Select Location',
  props<{ locationId: string }>()
);

// Load all Entities

export const loadLocations = createAction(
  '[Locations] Load Locations'
);

export const loadLocationsSuccess = createAction(
  '[Locations] Load Locations Success',
  props<{ locations: TravelLocation[] }>()
);

export const loadLocationsFailure = createAction(
  '[Locations] Load Locations Failure',
  props<{ error: any }>()
);

// Load Single Entity

export const loadLocation = createAction(
  '[Locations] Load Location',
  props<{ locationId: string }>()
);

export const loadLocationSuccess = createAction(
  '[Locations] Load Location Success',
  props<{ location: TravelLocation }>()
);

export const loadLocationFailure = createAction(
  '[Locations] Load Location Failure',
  props<{ error: any }>()
);

// Load Create Entity

export const createLocation = createAction(
  '[Locations] Create Location',
  props<{ location: TravelLocation }>()
);

export const createLocationSuccess = createAction(
  '[Locations] Create Location Success',
  props<{ location: TravelLocation }>()
);

export const createLocationFailure = createAction(
  '[Locations] Create Location Failure',
  props<{ error: any }>()
);

// Load Update Entity

export const updateLocation = createAction(
  '[Locations] Update Location',
  props<{ location: TravelLocation }>()
);

export const updateLocationSuccess = createAction(
  '[Locations] Update Location Success',
  props<{ location: TravelLocation }>()
);

export const updateLocationFailure = createAction(
  '[Locations] Update Location Failure',
  props<{ error: any }>()
);

// Load Delete Entity

export const deleteLocation = createAction(
  '[Locations] Delete Location',
  props<{ location: TravelLocation }>()
);

export const deleteLocationSuccess = createAction(
  '[Locations] Delete Location Success',
  props<{ location: TravelLocation }>()
);

export const deleteLocationFailure = createAction(
  '[Locations] Delete Location Failure',
  props<{ error: any }>()
);




