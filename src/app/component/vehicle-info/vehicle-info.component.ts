import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Vehicle } from '../../services/vehicle.model';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-vehicle-info',
  templateUrl: './vehicle-info.component.html',
  styleUrls: ['./vehicle-info.component.css']
})
export class VehicleInfoComponent {

  vehicle: Vehicle = new Vehicle();

  // frame => manufacturer, modelVariant, registrationYear, companyRTO
  frame: string;
  genre: string;
  formData = {
    rtoNumber: '',
    manufacturer: '',
    model: '',
    registration: ''
  };
  constructor(private router: Router, private vehicleService: VehicleService) {
    this.frame = 'companyRTO';
   }

  numberSelect(e) {
   console.log(e.target.id);
   this.formData.rtoNumber = e.target.id.toUpperCase();
   this.vehicle.companyRTO = this.formData.rtoNumber;
   this.frame = 'manufacturer';
  }

  manufactureSelect(e) {
   console.log(e.target.id);
   this.formData.manufacturer = e.target.id.toUpperCase();
   this.vehicle.manufacturer = this.formData.manufacturer;
   this.frame = 'modelVariant';
  }

  modelSelect(e) {
   console.log(e.target.id);
   this.formData.model = e.target.id.toUpperCase();
   this.vehicle.modelVariant = this.formData.model;
   this.frame = 'registrationYear';
  }

  registrationSelect(e) {
   console.log(e.target.id);
   this.formData.registration = e.target.id.toUpperCase();
   this.vehicle.registrationYear = +this.formData.registration; // converts string to integer (not number)
  }

  goToCards() {
    this.router.navigate(['cards']);
  }

  onSubmit({value, valid}) {
    if (valid) {
      console.log(value);
      this.vehicleService.sharedResource.vehicleInfo = this.vehicle;
      console.log(this.vehicleService.sharedResource);
      this.goToCards();
    } else {
      console.log('Form is invalid');
    }
  }
}
