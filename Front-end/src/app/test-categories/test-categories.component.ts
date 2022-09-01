import { DOCUMENT } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestTopics } from '../test-topics';
import { UserService } from '../user.service';
@Component({
  selector: 'app-test-categories',
  templateUrl: './test-categories.component.html',
  styleUrls: ['./test-categories.component.css']
})
export class TestCategoriesComponent implements OnInit {

  //testTaking:string=null;
  //testTaking:string=sessionStorage.getItem("testName");
   //v:int=parseInt(<HTMLParagraphElement> document.getElementById("testId"));

  

  test:TestTopics=new TestTopics();
  //userid:number;
  public tests:[]
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    //this.userid = parseInt(sessionStorage.getItem("userId"));
    this.userService.displayTests(this.test).subscribe(d =>this.tests=d);
  }

  goToInstruction(subject:number,level:number){
    this.router.navigate(['/instruction']);
    sessionStorage.setItem('testName',(subject.toString()));
    sessionStorage.setItem('testLevel',(level.toString()));
    // for
    console.log(subject);
    console.log(level);

    //console.log(this.testTaking);
  }

}
