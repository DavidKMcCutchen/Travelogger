import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { CoreDataModule } from '@sandbox/core-data';
import { CoreStateModule } from '@sandbox/core-state';
import { CommonModule } from '@angular/common';
import { EnvironmentModule } from '@sandbox/environment';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { CardModule } from 'primeng/card';
import { GMapModule } from 'primeng/gmap';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { LoginComponent } from './login/login.component';
import { SpinnerModule } from 'primeng/spinner';
import { StepsModule } from 'primeng/steps';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { AddDetailsComponent } from './new-entry/add-details/add-details.component';
import { DescriptionComponent } from './new-entry/description/description.component';
import { PhotosComponent } from './new-entry/photos/photos.component';
import { ConfirmationComponent } from './new-entry/confirmation/confirmation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { EffectsModule } from '@ngrx/effects';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { LocationEffects } from 'libs/core-state/src/lib/locations/locations.effects';
import { LocationDetailsComponent } from './home/location-details/location-details.component';
import { AccordionModule } from 'primeng/accordion';
import { GoogleMapsModule } from '@angular/google-maps';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { PasswordModule } from 'primeng/password';
import {MessageModule} from 'primeng/message';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    HomeComponent,
    LoginComponent,
    NewEntryComponent,
    AddDetailsComponent,
    DescriptionComponent,
    PhotosComponent,
    ConfirmationComponent,
    LocationDetailsComponent,
    HeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    CoreDataModule,
    CoreStateModule,
    EnvironmentModule.withEnvironment(environment),
    HttpClientModule,
    CardModule,
    GMapModule,
    MenubarModule,
    ButtonModule,
    SpinnerModule,
    StepsModule,
    MessagesModule,
    ToastModule,
    FormsModule,
    InputTextModule,
    EffectsModule.forFeature([LocationEffects]),
    AccordionModule,
    GoogleMapsModule,
    DialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MessageModule,
    PasswordModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
