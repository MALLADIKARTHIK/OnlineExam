import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ViewReport } from './view-report';
import { TestTopics } from './test-topics';
import { Report } from './report';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  url:any="http://localhost:8097"
  constructor(private http:HttpClient) { }

  saveUser(UserDetails:Object) :Observable<Object>{
    return this.http.post(`${this.url+"/userDetails"}`,UserDetails);
  }

  loginUser(UserDetails:any) :Observable<any>{
    return this.http.post(`${this.url+"/login"}`,UserDetails);
  }

  report(userid) : Observable<any> {
    //let url = "http://localhost:8082/report/"+userid;
   return this.http.get<ViewReport[]>(this.url+"/reports/"+userid); 
  }

  displayTests(TestTopics:any):Observable<any>{
     return this.http.get<TestTopics[]>(this.url+"/alltopics",TestTopics);
  }

  getQuestions(courseid:number,levelid:number) : Observable<any> {
    //let url = "http://localhost:8082/questions/"+courseid+"/"+levelid;
   return this.http.get(this.url+"/questions/"+courseid+"/"+levelid); 
  }


  sendReport(report:Report):Observable<any>{
    //let url = "http://localhost:8082/submit_answers";
    return this.http.post(this.url+"/submit_answers",report,{responseType: 'text'});
  }

}
