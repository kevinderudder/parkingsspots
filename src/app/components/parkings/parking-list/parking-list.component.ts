import { Component, OnInit } from '@angular/core';
import { Parking } from 'src/app/models/parking';

@Component({
  selector: 'app-parking-list',
  templateUrl: './parking-list.component.html',
  styleUrls: ['./parking-list.component.scss']
})
export class ParkingListComponent implements OnInit {

  parkings:Parking[] = [];
  filter:string = "";

  constructor() { }

  removeParking(parking:Parking){
    this.parkings.splice(this.parkings.indexOf(parking), 1);
  }

  ngOnInit(): void {
    this.parkings = new Array<Parking>();
    this.parkings.push(
      new Parking(
        1,
        "Vrijdagmarkt",
        "Vrijdagmarkt",
        true,
        100,
        200,
        "Vrijdagmarkt"
      )
    );

    this.parkings.push(
      new Parking(
        2,
        "Zaterdagmarkt",
        "Zaterdagmarkt",
        true,
        100,
        200,
        "Zaterdagmarkt"
      )
    );

    this.parkings.push(
      new Parking(
        3,
        "Dinsdagmarkt",
        "Dinsdagmarkt",
        true,
        100,
        200,
        "Dinsdagmarkt"
      )
    );
  }

}
