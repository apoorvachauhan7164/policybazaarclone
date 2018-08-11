import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component {
  formData = {
    name: '',
    relationship: '',
    age: 0,
    address: '',
    pin: null
  };
  constructor(private router: Router, private vehicleService: VehicleService) {}

  go() {
    this.router.navigate(['third']);
  }

  onSubmit({value, valid}) {
    if (valid) {
      console.log(value);
      this.vehicleService.sharedResource.formTwoData = this.formData;
      console.log(this.vehicleService.sharedResource);
      this.go();
    } else {
      console.log('Form data is invalid');
    }
  }
}

