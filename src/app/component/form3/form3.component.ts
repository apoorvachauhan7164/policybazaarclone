import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css']
})
export class Form3Component implements OnInit {
  months = [];
  days = [];
  years = [];
  formData = {
    registration: '',
    engine: '',
    classic: '',
    prevInsurer: '',
    prevPolicy: '',
  };
  currentYear: number;
  constructor(private vehicleService: VehicleService) {
    this.currentYear = (new Date().getFullYear());
  }

  ngOnInit() {
    this.months = /* this.registrationMonth */  [
      'Month',
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    for (let i = 0, j = this.currentYear + 1 ; i < 32; i++, j--) {
      if (j === this.currentYear + 1 && i === 0) {
        this.days.push('Day');
        this.years.push('Year');
      } else if (j > this.currentYear - 21 ) {
        this.days.push(i);
        this.years.push(j);
      } else {
        this.days.push(i);
      }
    }
  }

  onSubmit({value, valid}) {
    if (valid) {
      console.log(value);
      this.vehicleService.sharedResource.formThreeData = this.formData;
      console.log(this.vehicleService.sharedResource);
    } else {
      console.log('Form data is invalid');
    }
  }
}
