import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component {
  constructor(private router: Router, private vehicleService: VehicleService) {}
  formData = {
    username: '',
    email: '',
    contact: '',
    address: '',
    pin: ''
  };
  go() {
    this.router.navigate(['second']);
  }

  onSubmit({value, valid}) {
    if (valid) {
      console.log(value);
      this.vehicleService.sharedResource.formOneData = this.formData;
      console.log(this.vehicleService.sharedResource);
      this.go();
    } else {
      console.log('Form data invalid');
    }
  }
}
