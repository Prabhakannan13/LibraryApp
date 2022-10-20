import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  viewData=()=>{
    return this.http.get("http://localhost:8080/viewlibrary")
  }

  addData=(data:any)=>{
    return this.http.post("http://localhost:8080/addlibrary",data)
  }

  deleteData=(data:any)=>{
    return this.http.post("http://localhost:8080/deletebook",data)
  }

  searchData=(data:any)=>{
    return this.http.post("http://localhost:8080/searchbook",data)
  }
}
