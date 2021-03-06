import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
   },
   {
    path:"About",
    component:AboutComponent
   }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
