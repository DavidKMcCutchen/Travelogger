import { NgModule } from '@angular/core';
import { Route, Router, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
    {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: '**', redirectTo: ''}
];

// @NgModule({
//     imports: [RouterModule.forRoot(appRoutes, {initialNavigation: 'enabledBlocking'})],
//     exports: [RouterModule],
// })
// export class AppRoutingModule {}
