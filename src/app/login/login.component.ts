import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { tokenName } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {
    userName : '', 
    password: ''
  }

  constructor(private auth: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.loginData);
    this.auth.login(this.loginData).subscribe((data:any)=> {
      console.log(data);   
      
      localStorage.setItem('userName', data.userName);
      localStorage.setItem('token_value', data.token);

      this.router.navigate(['/entries']);
    }     
   );
  }
}
