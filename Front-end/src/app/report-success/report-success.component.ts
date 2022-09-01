import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-report-success',
  templateUrl: './report-success.component.html',
  styleUrls: ['./report-success.component.css']
})
export class ReportSuccessComponent implements OnInit {

  levelid:number;
  marks:number;
  constructor(private router:Router) {
    
   }

  ngOnInit(): void {
    this.levelid=parseInt( sessionStorage.getItem("testLevel"));
    this.marks=parseInt( sessionStorage.getItem("marks1"));
    console.log(this.marks);
  }

  
  newExam(){
    this.marks=0;
    sessionStorage.setItem("testLevel",String(this.levelid+1));
    sessionStorage.setItem("marks1",String(this.marks));
    this.router.navigate(['exam-ui']);

  }

  completed(){
    this.router.navigate(['user-dashboard']);
  }

}
