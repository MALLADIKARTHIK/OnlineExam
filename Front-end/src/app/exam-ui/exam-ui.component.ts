import { Component, OnInit } from '@angular/core';
import { Questions } from '../questions';
import { UserResponse } from '../user-response';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Report } from '../report';
@Component({
  selector: 'app-exam-ui',
  templateUrl: './exam-ui.component.html',
  styleUrls: ['./exam-ui.component.css']
})
export class ExamUiComponent implements OnInit {



  length:number;
  courseid:number;
  userid:number;
  levelid:number;
  questions:Questions[];
  questionIndex:number;
  marks:number=0;
  report:Report;
  userResponse : UserResponse[]=[new UserResponse()];
  isSubmitted : boolean;


  //Timer
  sec:any = 600;
  countDiv:any;
  min:any;
  remSec:any;

  constructor(private userService:UserService,private router:Router) {
    
      // console.log(this.courseid+"level id is"+this.levelid);
      // console.log(this.questions);
      // this.length=this.questions.length;
      // console.log(this.questions.length);
   

   }

  ngOnInit(){
    // this.length=this.questions.length;
    // console.log(this.questions.length);

    this.questionIndex=0; 
    this.levelid=parseInt(sessionStorage.getItem("testLevel"));
    this.courseid=parseInt(sessionStorage.getItem("testName"));
    this.userid=parseInt(sessionStorage.getItem("userId"));
    //this.marks=parseInt( sessionStorage.getItem("marks1"));
    
    this.userService.getQuestions(this.courseid,this.levelid).subscribe(data=>{
      this.questions=data;

      this.isSubmitted = false;

    //console.log(this.questions);
    console.log("hiii");
  })
  }


  
  ngAfterViewInit(){
    this.length=this.questions.length;
    console.log(this.length);
    this.createUserRespObj();
  }

  public createUserRespObj(){
    let i:number;
    for(i=0;i<this.questions.length;i++){
      this.userResponse.push(new UserResponse());
    }
  }


  submit(){
    this.isSubmitted=true;
    this.userResponse[this.questionIndex].questionId=this.questions[this.questionIndex].question_id;
    let i:number;
    for(i=0;i<this.length;i++){
      if(this.userResponse[i].userAnswer==this.questions[i].correct_option){
        this.marks+=10;
      }
    }
    console.log(this.marks);
    sessionStorage.setItem("marks1",this.marks.toString());
    this.marks=parseInt(sessionStorage.getItem("marks1"));
    console.log(this.marks);
    this.report=new Report(this.marks,this.userid,this.courseid,this.levelid);
    console.log(this.report);
    this.userService.sendReport(this.report).subscribe(response=>{
      let status:String=response;
      if(status=="Pass"){
        this.router.navigate(['report_success']);
        //this.marks=0;
      }
      else{
        alert("You failed to clear this level! \n You can view your result in Report section");
        this.router.navigate(['user-dashboard']);
      }
    })
  }

  prevQues(){
    this.userResponse[this.questionIndex].questionId=this.questions[this.questionIndex].question_id;
    this.questionIndex--;
  }
  nextQues(){
    this.userResponse[this.questionIndex].questionId=this.questions[this.questionIndex].question_id;
    console.log(this.questionIndex);
    this.questionIndex++;
    console.log(this.userResponse);
  }


  countDown   = setInterval(() =>      
  this.secpass(), 1000);

  public secpass():any {
    'use strict';    
     this.min  = Math.floor(this.sec / 60);
        this.remSec  = this.sec % 60;    
    if (this.remSec < 10) {        
        this.remSec = '0' + this.remSec;    
}
if (this.min < 10) {        
    this.min = '0' + this.min;    
}
if(this.min==0 && this.sec==0 && this.isSubmitted==false){

  this.submit();
}
this.countDiv = this.min + ":" + this.remSec;

if (this.sec > 0) {        
    this.sec = this.sec - 1;        
} 
else {        
    clearInterval(this.countDown);               
}
}

}
