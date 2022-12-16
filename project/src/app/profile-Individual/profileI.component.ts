import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile-Individual',
  templateUrl: './profileI.component.html',
  styleUrls: ['./profileI.component.css']
})
export class profileIComponent implements OnInit {

  constructor(private http:HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  public id: any
  name: any
  response: any

  getName(ID: any){
    this.http.get('http://localhost:6060/savior/gUid',{
      responseType:'text',
      params:{
        id: ID
      },
      observe:'response'
    }).subscribe(response=>{
      this.response = response.body
      console.log(this.response)
      if(response!=null){
        this.name = response
      }
      else{
        console.log("did not bring the name from back")
      }
    })
  }

}
