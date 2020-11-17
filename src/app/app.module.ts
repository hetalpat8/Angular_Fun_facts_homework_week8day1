import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginComponent } from './login/login.component';
import { PromisesComponent } from './promises/promises.component';
import { CallbacksComponent } from './callbacks/callbacks.component';
import { MapComponent } from './map/map.component';
import { CreatorComponent } from './creator/creator.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginComponent,
    PromisesComponent,
    CallbacksComponent,
    MapComponent,
    CreatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
