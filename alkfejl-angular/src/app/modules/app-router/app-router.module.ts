import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginViewComponent } from '../../components/login-view/login-view.component';
import {VehicleViewComponent} from '../../components/vehicle-view/vehicle-view.component';
import {RegistrationViewComponent} from '../../components/registration-view/registration-view.component';
import {ProfileViewComponent} from '../../components/profile-view/profile-view.component';
import {RentalViewComponent} from '../../components/rental-view/rental-view.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginViewComponent },
  { path: 'vehicle', component: VehicleViewComponent},
  { path: 'registration', component: RegistrationViewComponent},
  { path: 'profile', component: ProfileViewComponent},
  { path: 'rental', component: RentalViewComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRouterModule { }
