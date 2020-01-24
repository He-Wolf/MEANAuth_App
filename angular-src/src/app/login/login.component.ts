import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    const user= {
      username: this.username,
      password: this.password
    }
    
    this.authService.authenticateUser(user).subscribe(res => {
      if(res.succes) {
        this.authService.storeUserData(res.token, res.user);
        console.log('You are now logged in.');
        this.router.navigate(['dashboard']);
      }
      else {
        console.log(res.msg);
        this.router.navigate(['login']);
      }
    });
  }

}
