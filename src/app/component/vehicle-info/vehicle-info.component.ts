import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-vehicle-info',
  templateUrl: './vehicle-info.component.html',
  styleUrls: ['./vehicle-info.component.css']
})
export class VehicleInfoComponent {

  // frame => manufacturer, modelVariant, registrationYear, companyRTO
  frame: string;
  formData = {
    rtoNumber: '',
    manufac: '',
    model: '',
    regs: ''
  };
  constructor(private router: Router) {
    this.frame = 'companyRTO';
   }

  fireEvent(e) {
   console.log(e.target.id);
   this.formData.rtoNumber = e.target.id.toUpperCase();
   this.frame = 'manufacturer';
  }

  typeEvent(e) {
   console.log(e.target.id);
   this.formData.manufac = e.target.id.toUpperCase();
   this.frame = 'modelVariant';
  }

  modEvent(e) {
   console.log(e.target.id);
   this.formData.model = e.target.id.toUpperCase();
   this.frame = 'registrationYear';
  }

  regEvent(e) {
   console.log(e.target.id);
   this.formData.regs = e.target.id.toUpperCase();
  }

  goToCards() {
    this.router.navigate(['cards']);
  }

  onSubmit({value, valid}) {
    if (valid) {
      console.log(value);
      this.goToCards();
    } else {
      console.log('Form is invalid');
    }
  }
}
