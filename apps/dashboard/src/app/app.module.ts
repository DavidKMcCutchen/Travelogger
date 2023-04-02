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

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    HomeComponent,
    LoginComponent,
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
    SpinnerModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
