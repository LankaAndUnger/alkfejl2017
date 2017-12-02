import { NgModule } from '@angular/core';
import { MatButtonModule, MatInputModule, MatListModule, MatToolbarModule, MatCardModule,
  MatIconModule, MatProgressSpinnerModule, MatSelectModule, MatOptionModule, MatMenuModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [BrowserAnimationsModule, MatButtonModule, MatInputModule, MatListModule,
    MatToolbarModule, MatCardModule, MatIconModule, MatProgressSpinnerModule, MatMenuModule],
  exports: [MatButtonModule, MatInputModule, MatListModule, MatToolbarModule, MatCardModule, MatIconModule,
    MatProgressSpinnerModule, MatSelectModule, MatOptionModule, MatMenuModule],
  declarations: []
})
export class UiModule { }
