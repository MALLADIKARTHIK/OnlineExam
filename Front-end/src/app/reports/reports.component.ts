import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ViewReport } from '../view-report';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {


  userid:number;
  public reports:[]
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userid = parseInt(sessionStorage.getItem("userId"));
    this.userService.report(this.userid).subscribe(d =>this.reports=d);
  }

}
