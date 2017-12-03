import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UiModule } from './modules/ui/ui.module';
import { AppRouterModule } from './modules/app-router/app-router.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginViewComponent } from './components/login-view/login-view.component';
import { VehicleViewComponent } from './components/vehicle-view/vehicle-view.component';
import { RegistrationViewComponent } from './components/registration-view/registration-view.component';
import { ProfileViewComponent } from './components/profile-view/profile-view.component';
import { RentalViewComponent } from './components/rental-view/rental-view.component';
import { AddVehicleComponent } from './components/add-vehicle/add-vehicle.component';
import { CloseRentalComponent } from './components/close-rental/close-rental.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    VehicleViewComponent,
    RegistrationViewComponent,
    ProfileViewComponent,
    RentalViewComponent,
    AddVehicleComponent,
    CloseRentalComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    AppRouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
