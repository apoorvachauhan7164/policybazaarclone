import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import {Router} from '@angular/router';

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
    prevPolicyDate: {
      month: 'Month',
      day: 'Day',
      year: 'Year'
    },
    registrationDate: {
      month: 'Month',
      day: 'Day',
      year: 'Year'
    },
    claimLast: null,
    sameOwner: null
  };
  currentYear: number;
  constructor(private vehicleService: VehicleService, private router: Router) {
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

  prevDate(event) {
    console.log(event);
    console.log(this.formData.prevPolicyDate);
  }

  ownerSame(value) {
    this.formData.sameOwner = value;
    console.log('ownerSame: ', value);
  }

  claimLastYear(value) {
    this.formData.claimLast = value;
    console.log('claimLastYear: ', value);
  }

  goToFinalDetails() {
    this.router.navigate(['final-details']);
  }

  onSubmit({value, valid}) {
    if (valid) {
      console.log(value);
      this.vehicleService.sharedResource.formThreeData = this.formData;
      console.log(this.vehicleService.sharedResource);
      this.goToFinalDetails();
    } else {
      console.log('Form data is invalid');
    }
  }
}
