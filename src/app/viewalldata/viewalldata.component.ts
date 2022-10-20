import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewalldata',
  templateUrl: './viewalldata.component.html',
  styleUrls: ['./viewalldata.component.css']
})
export class ViewalldataComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }
   fetchData=()=>{
    this.myapi.viewData().subscribe(
      (data)=>{
        this.viewData=data
      }
    )
   }

deleteData=(id:any)=>{
  let data={
    "id":id
  }
  this.myapi.deleteData(data).subscribe(
    (resp)=>{
      alert("Deleted")
    }
  )
  this.fetchData()
}
viewData:any=[]
  ngOnInit(): void {
  }

}
