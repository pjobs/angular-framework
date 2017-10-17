import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AfwModule } from '../afw/afw.module';
import { FrameworkConfigService } from '../afw/services/framework-config.service';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { AboutComponent } from './about/about.component';
import { CountriesComponent } from './countries/countries.component';
import { appRoutes } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingsComponent,
    AboutComponent,
    CountriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AfwModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
