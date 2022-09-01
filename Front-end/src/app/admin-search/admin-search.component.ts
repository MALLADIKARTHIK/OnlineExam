import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Search } from '../search';
import { UserDetails } from '../user-details';

@Component({
  selector: 'app-admin-search',
  templateUrl: './admin-search.component.html',
  styleUrls: ['./admin-search.component.css']
})
export class AdminSearchComponent implements OnInit {


  public users_details:UserDetails[];
  searchStudent:Search = new Search();

  constructor(private adminService:AdminService, private router:Router) {

    // this.users_details=null;
    // console.log(this.users_details)
   }

  ngOnInit(): void {
  }

  searchUser(){
    this.adminService.adminSearch(this.searchStudent).subscribe(data =>{this.users_details=data});
    console.log(this.users_details);
  }

}
