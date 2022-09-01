import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Question } from '../question';
@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  constructor(private adminService: AdminService,private router:Router) { }

  ngOnInit(): void {
  }


  add:Question=new Question()
  createQues(){
    this.adminService.addQues(this.add).subscribe(data=>
      {
        this.add=new Question();
        alert("Question added");
        this.router.navigate(['/admin-dashboard/add']);
    });
  }

}
