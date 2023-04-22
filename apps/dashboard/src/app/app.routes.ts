import { NgModule } from '@angular/core';
import { Route, Router, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AddDetailsComponent } from './new-entry/add-details/add-details.component';
import { DescriptionComponent } from './new-entry/description/description.component';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { AnalyticsComponent } from './home/analytics/analytics.component';

export const appRoutes: Route[] = [
    {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'new-entry', component: NewEntryComponent},
    {path: 'new-entry/add-details', component: AddDetailsComponent},
    {path: 'new-entry/describe', component: DescriptionComponent},
    {path: 'analytics', component: AnalyticsComponent},
    {path: '**', redirectTo: ''}
];

// @NgModule({
//     imports: [RouterModule.forRoot(appRoutes, {initialNavigation: 'enabledBlocking'})],
//     exports: [RouterModule],
// })
// export class AppRoutingModule {}
