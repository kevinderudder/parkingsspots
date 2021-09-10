import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParkingDetailsComponent } from './components/parkings/parking-details/parking-details.component';
import { ParkingListComponent } from './components/parkings/parking-list/parking-list.component';
import { ParkingPipe } from './pipes/parking.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ParkingDetailsComponent,
    ParkingListComponent,
    ParkingPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
