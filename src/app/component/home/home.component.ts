import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Two Wheeler Insurance';
  data = {
    regNumber: ''
  };

  constructor(private router: Router) {
  }

  goToVehicleInfo() {
    this.router.navigate(['vehicle-info']);
  }

  onSubmit({value, valid}) {
    if (valid) {
      console.log(value);
      this.goToVehicleInfo();
    } else {
      console.log('Form is invalid');
    }
  }

}

