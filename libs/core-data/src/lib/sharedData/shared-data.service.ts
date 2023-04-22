import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private data = new BehaviorSubject<any>(null);
  currentData$ = this.data.asObservable();

  constructor() {}

  updateData(newData: any) {
    this.data.next(newData);
  }
}
