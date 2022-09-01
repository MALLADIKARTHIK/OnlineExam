import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../user-details';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {


  userDetails:UserDetails=new UserDetails();
  constructor(private userService : UserService,private router:Router) { }

  ngOnInit(): void {
  }


  RegisterFormSubmit(){
    this.userService.saveUser(this.userDetails).subscribe(data=>{
      // if(this.userDetails==null){
      //   alert("Please enter details");
      //   this.router.navigate(['/user_registration']);
      // }
      alert("Registration Successfull!");
      this.router.navigate(['/user_login']);
    },(error=>{
      alert("User already exists, please login");
      this.router.navigate(['/user_login']);
    })
    )
  }

}
