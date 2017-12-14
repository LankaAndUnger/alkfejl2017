import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginViewComponent } from '../../components/login-view/login-view.component';
import {VehicleViewComponent} from '../../components/vehicle-view/vehicle-view.component';
import {RegistrationViewComponent} from '../../components/registration-view/registration-view.component';
import {ProfileViewComponent} from '../../components/profile-view/profile-view.component';
import {RentalViewComponent} from '../../components/rental-view/rental-view.component';
import {AddVehicleComponent} from '../../components/add-vehicle/add-vehicle.component';
import {CloseRentalComponent} from '../../components/close-rental/close-rental.component';
import {RateVehicleComponent} from '../../components/rate-vehicle/rate-vehicle.component';
import {AuthService} from '../../services/auth.service';
import {RouteGuardService} from '../../services/route-guard.service';

const appRoutes: Routes = [
  { path: '', canActivateChild: [RouteGuardService], children: [
    { path: 'login', component: LoginViewComponent },
    { path: 'vehicle', component: VehicleViewComponent, data: { roles: ['USER', 'ADMIN'] }},
    { path: 'registration', component: RegistrationViewComponent},
    { path: 'profile', component: ProfileViewComponent, data: { roles: ['USER'] }},
    { path: 'rental', component: RentalViewComponent, data: { roles: ['USER'] }},
    { path: 'addVehicle', component: AddVehicleComponent, data: { roles: ['ADMIN'] }},
    { path: 'closeRental', component: CloseRentalComponent, data: { roles: ['ADMIN'] }},
    { path: 'rating/:id', component: RateVehicleComponent, data: { roles: ['USER'] }}
  ]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [],
  providers: [RouteGuardService, AuthService]
})
export class AppRouterModule { }
