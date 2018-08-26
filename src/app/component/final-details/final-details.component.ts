import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-final-details',
  templateUrl: './final-details.component.html',
  styleUrls: ['./final-details.component.css']
})
export class FinalDetailsComponent implements OnInit {

  state = null;
  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.state = this.vehicleService.sharedResource;
  }

}
