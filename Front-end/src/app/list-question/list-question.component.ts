import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Question } from '../question';

@Component({
  selector: 'app-list-question',
  templateUrl: './list-question.component.html',
  styleUrls: ['./list-question.component.css']
})
export class ListQuestionComponent implements OnInit {

  constructor(private adminService:AdminService,private router:Router) { }

  ngOnInit(): void {
  }

  listItem:any;
  cid:number;
  lid:number;
  list:Question=new Question();
  ListAllQues(cid:number,lid:number){
    this.adminService.ListQues(cid,lid).subscribe((response:any)=>{this.listItem=response});
    console.log(this.cid);
  }
  editQues(e:Question) {
   // e:Admin;
    //alert("edit called");
    //console.log(e);
    sessionStorage.setItem("question", JSON.stringify(e));
    this.router.navigate(['/admin-dashboard/up']);
  }

}
