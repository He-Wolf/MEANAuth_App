import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { LoginData } from '../login-data';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = new LoginData("","");

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    const loginData = new LoginData(this.loginData.username, this.loginData.password);
    
    this.authService.authenticateUser(loginData).subscribe(res => {
      if(res.succes) {
        this.authService.storeUserData(res.token, res.user);
        //console.log('You are now logged in.');
        this.flashMessagesService.show('You are now logged in.', { cssClass: 'alert-success', timeout: 2500});
        this.router.navigate(['dashboard']);
      }
      else {
        //console.log(res.msg);
        this.flashMessagesService.show(res.msg, { cssClass: 'alert-danger', timeout: 2500});
        this.router.navigate(['login']);
      }
    });
  }

}
