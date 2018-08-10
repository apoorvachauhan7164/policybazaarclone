import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';



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
  constructor(private router: Router) {}

  go() {
    this.router.navigate(['third']);
  }

  onSubmit({value, valid}) {
    if (valid) {
      console.log(value);
      this.go();
    } else {
      console.log('Form data is invalid');
    }
  }
}

