import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Question } from './question';
import { Search } from './search';
import { UserDetails } from './user-details';
@Injectable({
  providedIn: 'root'
})


export class AdminService {

  url:any="http://localhost:8097";
  constructor(private http:HttpClient) { }


  loginUser(AdminDetails:Object) :Observable<Object>{
    return this.http.post(`${this.url+"/adminLogin"}`,AdminDetails);
  }

  addQues(adding:object):Observable<object>{
    return this.http.post(`${this.url+"/add"}`,adding);
   }

   delQues(id: number): Observable<any> {
    return this.http.delete(`${this.url}/del/${id}`)
   }

   ListQues(cid:number,lid:number){
    return this.http.get(`${this.url}/questions/${cid}/${lid}`);
  }

  upQues(a:Question):Observable<any>{
    return this.http.put(`${this.url}/up/${a.question_id}`,a);
  }

  adminSearch(searchStudent:Search) : Observable<UserDetails[]> {
    //let url = "http://localhost:8097/search_students";
   return this.http.post<UserDetails[]>(this.url+"/search_students",searchStudent); 
}
}
