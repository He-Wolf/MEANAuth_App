import { Component, OnInit } from '@angular/core';
import { User } from '../user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  model = new User("", "", "", "");

  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log(JSON.stringify(this.model));
  }

  constructor() { }

  ngOnInit() { }
}
