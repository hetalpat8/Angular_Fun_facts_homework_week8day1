import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginComponent } from './login/login.component';
import { PromisesComponent } from './promises/promises.component';
import { CallbacksComponent } from './callbacks/callbacks.component';
import { MapComponent } from './map/map.component';
import { CreatorComponent } from './creator/creator.component';

const routes: Routes = [
  {
    path:'main',
    component: MainPageComponent
  },
  {
  
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'promises',
    component: PromisesComponent
  },
  {
    path: 'callbacks',
    component: CallbacksComponent
  },
  {
    path: 'map',
    component: MapComponent
  },
  {
    path: 'creator',
    component: CreatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
