import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  sessionUser1 : String = sessionStorage.getItem("userId");
  constructor(private router:Router) { }

  ngOnInit(): void {
        console.log("user id is"+this.sessionUser1);
  }

  goToResults(){
    this.router.navigate(['/user_reports']);
  }

  goToTests(){
    this.router.navigate(['/test-categories']);
  }


}
