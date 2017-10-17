import { Routes } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { AboutComponent } from './about/about.component';
import { SettingsComponent } from './settings/settings.component';
import { CountriesComponent } from './countries/countries.component';

export const appRoutes: Routes = [
    { path : 'home', component:HomeComponent },
    { path : 'about', component:AboutComponent },
    { path : 'settings', component:SettingsComponent },
    { path : 'countries', component:CountriesComponent },
    { path : '', component:HomeComponent },
    { path : '**', component:HomeComponent }
]