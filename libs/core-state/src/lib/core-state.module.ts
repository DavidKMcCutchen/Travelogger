import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule, RootStoreConfig } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers} from ".";
import { LocationEffects } from './locations/locations.effects';
import { CoreDataModule } from '@sandbox/core-data';

const storeName = 'Locations Store';

const storeConfig: RootStoreConfig<any> = {
  runtimeChecks: {
    strictStateImmutability: true,
    strictActionImmutability: true,
  },
};


@NgModule({
  imports: [
    CommonModule,
    CoreDataModule,
    StoreModule.forRoot(
      reducers,
      storeConfig
    ),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: storeName,
    }),
  ],
  providers: [],
})
export class CoreStateModule {}
