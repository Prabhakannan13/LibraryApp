import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-adddata',
  templateUrl: './adddata.component.html',
  styleUrls: ['./adddata.component.css']
})
export class AdddataComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  bookname=""
  description=""
  author=""

  readValues=()=>{
    let data={
      "bookname":this.bookname,
      "description":this.description,
      "author":this.author
    }
    console.log(data)
    this.myapi.addData(data).subscribe(
      (data)=>{
        alert("Data added successfully")
      }
    )
    
  }

  ngOnInit(): void {
  }

}
