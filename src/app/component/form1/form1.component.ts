import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component {
  constructor(private router: Router) {}
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
      this.go();
    } else {
      console.log('Form data invalid');
    }
  }
}
