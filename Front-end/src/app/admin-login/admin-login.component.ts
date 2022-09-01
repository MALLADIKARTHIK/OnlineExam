import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { AdminDetails } from '../admin-details';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  
  // password:string='';
  // email:string='';

  sessionAdmin : String = sessionStorage.getItem("adminId");

  admin:AdminDetails=new AdminDetails();

  constructor(private adminService:AdminService,private router:Router) { }

  ngOnInit(): void {
  }

  
  AdminloginFormSubmit(){
    this.adminService.loginUser(this.admin).subscribe(data=>{
      //alert("Login Successfull!");
      sessionStorage.setItem('adminId',String(this.admin.email) );
      this.router.navigate(['/admin-dashboard']);
    },(error=>{
      alert("Invalid Credentials");
      this.router.navigate(['/admin_login']);

    })
    )
   // console.log(this.password);
  }

  logout() {
    sessionStorage.clear();
  }

}
