import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adddata',
  templateUrl: './adddata.component.html',
  styleUrls: ['./adddata.component.css']
})
export class AdddataComponent implements OnInit {

  constructor() { }

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
    
  }

  ngOnInit(): void {
  }

}
