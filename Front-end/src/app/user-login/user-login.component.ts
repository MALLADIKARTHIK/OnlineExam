import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../login';
import { UserService } from '../user.service';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {


 sessionUser : String = sessionStorage.getItem("userId");

  constructor(private userService : UserService,private router:Router) { }

  login:Login=new Login();

  ngOnInit(): void {
  }

  loginFormSubmit(){

    console.log(this.login);
      this.userService.loginUser(this.login).subscribe(data=>{
        //alert("Login Successfull!");
        sessionStorage.setItem('email',String(this.login.email) );
        sessionStorage.setItem('userId',data.user_id );
        this.router.navigate(['/user-dashboard']);
        
      },(error=>{
        alert("Invalid Credentials");
        this.router.navigate(['/user_login']);
      })
      )
  }

  logout() {
    sessionStorage.clear();
  }

}
