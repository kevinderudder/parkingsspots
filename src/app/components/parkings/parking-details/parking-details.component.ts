import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Parking } from 'src/app/models/parking';


@Component({
  selector: 'app-parking-details',
  templateUrl: './parking-details.component.html',
  styleUrls: ['./parking-details.component.scss']
})
export class ParkingDetailsComponent implements OnInit {
/*
  parking:Parking = new Parking(
    1,
    "Vrijdagmarkt",
    "Vrijdagmarkt",
    true,
    100,
    200,
    "Vrijdagmarkt"
  );
  */

  @Input()  parking:Parking | undefined;
  @Output() remove : EventEmitter<Parking>;

  constructor() { 

    this.remove = new EventEmitter();

  }

  removeParking(){
    this.remove.emit(this.parking);
  }

  ngOnInit(): void {
  }

}
