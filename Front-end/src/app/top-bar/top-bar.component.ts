import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(private router : Router) { }

  sessionUser : String = sessionStorage.getItem("userId");
  sessionAdmin : String = sessionStorage.getItem("adminId");
  logout() {
   sessionStorage.clear();
   this.router.navigate[('')];
   location.reload();
 }


  ngOnInit(): void {
  }

}
