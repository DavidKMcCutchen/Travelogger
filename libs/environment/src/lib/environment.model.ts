import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LOCATION_ENVIRONMENT } from './locations.token';
import { LocationEnvironment } from './locations.model';


@NgModule({})
export class EnvironmentModule {
  static withEnvironment(environment: LocationEnvironment): ModuleWithProviders<EnvironmentModule> {
    return {
      ngModule: EnvironmentModule,
      providers: [
        {
          provide: LOCATION_ENVIRONMENT,
          useValue: environment
        }
      ]
    }
  }
}