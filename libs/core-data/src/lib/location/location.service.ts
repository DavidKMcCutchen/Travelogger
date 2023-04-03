import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TravelLocation } from '@sandbox/api-interfaces';
import { LOCATION_ENVIRONMENT, LocationEnvironment } from '@sandbox/environment';

const BASE_URL = 'http://localhost:3000/';
const MODEL = 'locations';


@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(
    private http: HttpClient,
    @Inject(LOCATION_ENVIRONMENT) 
    private environment: LocationEnvironment
  ) { }

  getTravelLocations(): Observable<TravelLocation[]> {
    return this.http.get<TravelLocation[]>(this.getUrl());
  };

  getOneTravelLocation(id: string): Observable<TravelLocation> {
    return this.http.get<TravelLocation>(this.getUrlById(id));
  };

  createTravelLocation(location: TravelLocation): Observable<TravelLocation> {
    return this.http.post<TravelLocation>(this.getUrl(), location);
  };

  updateTravelLocation(location: TravelLocation): Observable<TravelLocation> {
    return this.http.patch<TravelLocation>(this.getUrlById(location.id), location)
  };

  deleteTravelLocation({id}: TravelLocation): Observable<TravelLocation> {
    return this.http.delete<TravelLocation>(this.getUrlById(id))
  }

  private getUrl() {
    return `${BASE_URL}${MODEL}`
  };

  private getUrlById(id: string) {
    return `${this.getUrl()}/${id}`
  }
}
