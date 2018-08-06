import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-info',
  templateUrl: './vehicle-info.component.html',
  styleUrls: ['./vehicle-info.component.css']
})
export class VehicleInfoComponent {

  frame: string;
  rtoNumber;
  manufac;
  model;
  regs;
  constructor() {
    this.frame = 'companyRTO';
   }

  fireEvent(e) {
   console.log(e.target.id);
   this.rtoNumber = e.target.id;
  }

  typeEvent(e) {
   console.log(e.target.id);
   this.manufac = e.target.id;
   this.frame = 'modelVariant';
  }

  modEvent(e) {
   console.log(e.target.id);
   this.model = e.target.id;
  }

  regEvent(e) {
   console.log(e.target.id);
   this.regs = e.target.id;
  }
}
