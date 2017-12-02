import { NgModule } from '@angular/core';
import { MatButtonModule, MatInputModule, MatListModule, MatToolbarModule, MatCardModule,
  MatIconModule, MatProgressSpinnerModule, MatSelectModule, MatOptionModule, MatMenuModule, MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [BrowserAnimationsModule, MatButtonModule, MatInputModule, MatListModule,
    MatToolbarModule, MatCardModule, MatIconModule, MatProgressSpinnerModule, MatMenuModule, MatDatepickerModule, MatNativeDateModule],
  exports: [MatButtonModule, MatInputModule, MatListModule, MatToolbarModule, MatCardModule, MatIconModule,
    MatProgressSpinnerModule, MatSelectModule, MatOptionModule, MatMenuModule, MatDatepickerModule, MatNativeDateModule],
  declarations: []
})
export class UiModule { }
