import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  model = new User("", "", "", "");

  onRegisterSubmit() {
    this.authService
    .registerUser(this.model)
    .subscribe(res => {
      if(res.success) {
        console.log(res);
        console.log("User registered successfully");
        this.router.navigate(['/login']);
      }
      else {
        console.log(res);
        console.log("Something went wrong");
        this.router.navigate(['/register']);
      }
    });
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() { }
}
