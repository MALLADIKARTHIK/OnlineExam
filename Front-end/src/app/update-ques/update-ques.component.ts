import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Question } from '../question';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-update-ques',
  templateUrl: './update-ques.component.html',
  styleUrls: ['./update-ques.component.css']
})
export class UpdateQuesComponent implements OnInit {

  constructor(private adminService:AdminService,private router:Router,private fb:FormBuilder) { }

  up:Question=new Question();
  listItem:any=[];
  e1:any;
  qform:FormGroup;
  newQues:any;


  ngOnInit(): void {
    this.qform=this.fb.group({
      question_id:['',Validators.required],
      course_id:['',Validators.required],
      level_id:['',Validators.required],
      question:['',Validators.required],
      option_1:['',Validators.required],
      option_2:['',Validators.required],
      option_3:['',Validators.required],
      option_4:['',Validators.required],
      correct_option:['',Validators.required]
    });


    this.e1 =sessionStorage.getItem("question"); // capture object from session storage
    console.log(this.e1);
    this.newQues =JSON.parse(this.e1);
    console.log(this.newQues);
    this.qform.patchValue({ question_id : this.newQues.question_id,
                              course_id : this.newQues.course_id,
                              
                              level_id : this.newQues.level_id,
                               question: this.newQues.question,
                              option_1: this.newQues.option_1,
                              option_2 : this.newQues.option_2,
                              option_3 : this.newQues.option_3,
                              option_4 : this.newQues.option_4,
                              correct_option: this.newQues.correct_option
                            });
                            console.log(this.newQues.course_id);
                            console.log(this.qform.get('course_id').value);
                            console.log(this.qform.get('option_1').value);
           }
    
    updateQues() {
      console.log(this.qform.get('question_id').value);
      //console.log(this.qform.get('prodimage').value)
      this.adminService.upQues(this.qform.value).subscribe(
        data => {
          alert("Question Updated");
        this.router.navigate(['/admin-dashboard/up'])
        }
      );
    }

}
