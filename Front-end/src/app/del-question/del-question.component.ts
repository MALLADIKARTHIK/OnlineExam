import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Question } from '../question';

@Component({
  selector: 'app-del-question',
  templateUrl: './del-question.component.html',
  styleUrls: ['./del-question.component.css']
})
export class DelQuestionComponent implements OnInit {

  constructor(private adminService:AdminService,private router:Router) { }

  ngOnInit(): void {
  }

  del:Question=new Question();
    id:number;
    // deleteQues(data:any){
    //  this.adminService.delQues(data.id).subscribe((response)=>{this.del=response});
    // }=
    deleteQues(id: number){
      this.adminService.delQues(id).subscribe((response) => {this.del=response
      
        alert("Deleted");
        this.router.navigate(['/admin-dashboard/del'])
      
      });
    }

}
