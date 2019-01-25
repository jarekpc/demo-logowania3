import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User=new User();
  errorMessage:string;
  constructor(private authService :AuthService, private router: Router) { }

  ngOnInit() {

  }

  login(){
    console.log("Wpisałes usera " + this.user);
    this.authService.logIn(this.user)
      .subscribe(data=>{
        // this.router.navigate(['/profile']);
        this.router.navigate(['/chooseCompany'])
        },err=>{
        this.errorMessage="error :  Username or password is incorrect";
        }
      )
  }

}
