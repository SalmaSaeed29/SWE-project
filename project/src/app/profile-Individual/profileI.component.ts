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

  name: any = this.getName()
  id: any = this.getID()
  password: any 
  address: any = this.getAddress()
  city: any
  weight: any = this.getWeight()
  age: any = this.getAge()
  bloodType: any = this.getType()
  response: any 

  getName(){
    this.http.get('http://localhost:6060/savior/gUn',{
      responseType:'text',
      params:{
      },
      observe:'response'
    }).subscribe(response=>{
      this.name = response.body
      console.log("name from back: " + this.name)
      if(this.name != ''){
        console.log("name received")
      }
      else{
        console.log("did not bring the name from back")
      }
    })
  }

  getID(){
    this.http.get('http://localhost:6060/savior/gUi',{
      responseType:'text',
      params:{
      },
      observe:'response'
    }).subscribe(response=>{
      this.id = response.body
      console.log("id from back: " + this.id)
      if(this.id != ''){
        console.log("id received")
      }
      else{
        console.log("did not bring the id from back")
      }
    })
  }

  getAddress(){
    this.http.get('http://localhost:6060/savior/gUa',{
      responseType:'text',
      params:{
      },
      observe:'response'
    }).subscribe(response=>{
      this.address = response.body
      console.log("address from back: " + this.address)
      if(this.address != ''){
        console.log("address received")
      }
      else{
        console.log("did not bring the address from back")
      }
    })
  }

  getWeight(){
    this.http.get('http://localhost:6060/savior/gUw',{
      responseType:'text',
      params:{
      },
      observe:'response'
    }).subscribe(response=>{
      this.weight = response.body
      console.log("weight from back: " + this.weight)
      if(this.weight != ''){
        console.log("weight received")
      }
      else{
        console.log("did not bring the weight from back")
      }
    })
  }

  getAge(){
    this.http.get('http://localhost:6060/savior/gUg',{
      responseType:'text',
      params:{
      },
      observe:'response'
    }).subscribe(response=>{
      this.age = response.body
      console.log("age from back: " + this.age)
      if(this.age != ''){
        console.log("age received")
      }
      else{
        console.log("did not bring the age from back")
      }
    })
  }

  getType(){
    this.http.get('http://localhost:6060/savior/gUt',{
      responseType:'text',
      params:{
      },
      observe:'response'
    }).subscribe(response=>{
      this.bloodType = response.body
      console.log("bloodType from back: " + this.bloodType)
      if(this.bloodType != ''){
        console.log("bloodType received")
      }
      else{
        console.log("did not bring the bloodType from back")
      }
    })
  }

}
