import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile-Authority',
  templateUrl: './profileA.component.html',
  styleUrls: ['./profileA.component.css']
})
export class profileAComponent implements OnInit {

  constructor(private http:HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  mail: any = this.getEmail()
  name: any = this.getName();
  address: any = this.getAddress()
  city: any = this.getCity()
  region: any = this.getRegion()
  workingFrom: any = this.getWorkingFrom()
  workingTo: any = this.getWorkingTo()
  donationFrom: any = this.getDonationF()
  donationTo: any = this.getDonationT()
  pass: any 
  tax: any = this.getTax()

  getName(){
    this.http.get('http://localhost:6060/savior/gAn',{
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

  getEmail(){
    this.http.get('http://localhost:6060/savior/gAe',{
      responseType:'text',
      params:{
      },
      observe:'response'
    }).subscribe(response=>{
      this.mail = response.body
      console.log("email from back is: " + this.mail)
      if(this.mail!=''){
        console.log("email received")
      }
      else{
        console.log("did not bring the name from back")
      }
    })
  }

  getAddress(){
    this.http.get('http://localhost:6060/savior/gAa',{
      responseType:'text',
      params:{
      },
      observe:'response'
    }).subscribe(response=>{
      this.address = response.body
      console.log("address from back is: " + this.address)
      if(this.address!=''){
        console.log("address received")
      }
      else{
        console.log("did not bring the address from back")
      }
    })
  }

  getCity(){
    this.http.get('http://localhost:6060/savior/gAc',{
      responseType:'text',
      params:{
      },
      observe:'response'
    }).subscribe(response=>{
      this.city = response.body
      console.log("city from back is: " + this.city)
      if(this.city!=''){
        console.log("city received")
      }
      else{
        console.log("did not bring the city from back")
      }
    })
  }

  getRegion(){
    this.http.get('http://localhost:6060/savior/gAr',{
      responseType:'text',
      params:{
      },
      observe:'response'
    }).subscribe(response=>{
      this.region = response.body
      console.log("region from back is: " + this.region)
      if(this.region!=''){
        console.log("region received")
      }
      else{
        console.log("did not bring the region from back")
      }
    })
  }

  getTax(){
    this.http.get('http://localhost:6060/savior/gAt',{
      responseType:'text',
      params:{
      },
      observe:'response'
    }).subscribe(response=>{
      this.tax = response.body
      console.log("tax from back is: " + this.tax)
      if(this.tax!=''){
        console.log("tax received")
      }
      else{
        console.log("did not bring the tax from back")
      }
    })
  }

  getWorkingFrom(){
    this.http.get('http://localhost:6060/savior/gAwf',{
      responseType:'text',
      params:{
      },
      observe:'response'
    }).subscribe(response=>{
      this.workingFrom = response.body
      console.log("workingFrom from back is: " + this.workingFrom)
      if(this.workingFrom!=''){
        console.log("workingFrom received")
      }
      else{
        console.log("did not bring the workingFrom from back")
      }
    })
  }

  getWorkingTo(){
    this.http.get('http://localhost:6060/savior/gAwt',{
      responseType:'text',
      params:{
      },
      observe:'response'
    }).subscribe(response=>{
      this.workingTo = response.body
      console.log("workingTo from back is: " + this.workingTo)
      if(this.workingTo!=''){
        console.log("workingTo received")
      }
      else{
        console.log("did not bring the workingTo from back")
      }
    })
  }

  getDonationF(){
    this.http.get('http://localhost:6060/savior/gAdf',{
      responseType:'text',
      params:{
      },
      observe:'response'
    }).subscribe(response=>{
      this.donationFrom = response.body
      console.log("donationF from back is: " + this.donationFrom)
      if(this.donationFrom!=''){
        console.log("donationF received")
      }
      else{
        console.log("did not bring the donationF from back")
      }
    })
  }

  getDonationT(){
    this.http.get('http://localhost:6060/savior/gAdt',{
      responseType:'text',
      params:{
      },
      observe:'response'
    }).subscribe(response=>{
      this.donationTo = response.body
      console.log("donationT from back is: " + this.donationTo)
      if(this.donationTo!=''){
        console.log("donationT received")
      }
      else{
        console.log("did not bring the donationT from back")
      }
    })
  }

  
}
