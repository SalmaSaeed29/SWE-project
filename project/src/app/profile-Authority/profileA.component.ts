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
  phone: any = this.getPhone()
  name: any = this.getName();
  address: any = this.getAddress()
  city: any = this.getCity()
  region: any = this.getRegion()
  workingFrom: any = this.getWorkingFrom()
  workingTo: any = this.getWorkingTo()
  donationFrom: any = this.getDonationF()
  donationTo: any = this.getDonationT()
  EAplus: any = this.get_EAplus()
  NAplus: any = this.get_NAplus()
  EAminus: any = this.get_EAminus()
  NAminus: any = this.get_NAminus()
  EBplus: any = this.get_EBplus()
  NBplus: any = this.get_NBplus()
  EBminus: any = this.get_EBminus()
  NBminus: any = this.get_NBminus()
  EABplus: any = this.get_EABplus()
  NABplus: any = this.get_NABplus()
  EABminus: any = this.get_EABminus()
  NABminus: any = this.get_NABminus()
  EOplus: any = this.get_EOplus()
  NOplus: any = this.get_NOplus()
  EOminus: any = this.get_EOminus()
  NOminus: any = this.get_NOminus()
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

  getPhone(){
    this.http.get('http://localhost:6060/savior/gAp',{
      responseType:'text',
      params:{
      },
      observe:'response'
    }).subscribe(response=>{
      this.phone = response.body
      console.log("phone from back is: " + this.phone)
      if(this.phone!=''){
        console.log("phone received")
      }
      else{
        console.log("did not bring the phone from back")
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

  get_EAplus(){
    this.http.get('http://localhost:6060/savior/gEAp',{
      responseType:'text',
      params:{
      },
      observe:'response'
    }).subscribe(response=>{
      this.EAplus = response.body
      console.log("E Aplus from back is: " + this.EAplus)
      if(this.EAplus!=''){
        console.log("E Aplus received")
      }
      else{
        console.log("did not bring the E Aplus from back")
      }
    })
  }

  get_NAplus(){
    this.http.get('http://localhost:6060/savior/gNAp',{
      responseType:'text',
      params:{
      },
      observe:'response'
    }).subscribe(response=>{
      this.NAplus = response.body
      console.log("N Aplus from back is: " + this.NAplus)
      if(this.NAplus!=''){
        console.log("N Aplus received")
      }
      else{
        console.log("did not bring the N Aplus from back")
      }
    })
  }

  get_EAminus(){
    this.http.get('http://localhost:6060/savior/gEAm',{
      responseType:'text',
      params:{
      },
      observe:'response'
    }).subscribe(response=>{
      this.EAminus = response.body
      console.log("E Aminus from back is: " + this.EAminus)
      if(this.EAminus!=''){
        console.log("E Aminus received")
      }
      else{
        console.log("did not bring the E Aminus from back")
      }
    })
  }

  get_NAminus(){
    this.http.get('http://localhost:6060/savior/gNAm',{
      responseType:'text',
      params:{
      },
      observe:'response'
    }).subscribe(response=>{
      this.NAminus = response.body
      console.log("N Aminus from back is: " + this.NAminus)
      if(this.NAminus!=''){
        console.log("N Aminus received")
      }
      else{
        console.log("did not bring the N Aminus from back")
      }
    })
  }
  
  get_EBplus(){
    this.http.get('http://localhost:6060/savior/gEBp',{
      responseType:'text',
      params:{
      },
      observe:'response'
    }).subscribe(response=>{
      this.EBplus = response.body
      console.log("E Bplus from back is: " + this.EBplus)
      if(this.EBplus!=''){
        console.log("E Bplus received")
      }
      else{
        console.log("did not bring the E Bplus from back")
      }
    })
  }

  get_NBplus(){
    this.http.get('http://localhost:6060/savior/gNBp',{
      responseType:'text',
      params:{
      },
      observe:'response'
    }).subscribe(response=>{
      this.NBplus = response.body
      console.log("N Bplus from back is: " + this.NBplus)
      if(this.NBplus!=''){
        console.log("N Bplus received")
      }
      else{
        console.log("did not bring the N Bplus from back")
      }
    })
  }

  get_EBminus(){
    this.http.get('http://localhost:6060/savior/gEBm',{
      responseType:'text',
      params:{
      },
      observe:'response'
    }).subscribe(response=>{
      this.EBminus = response.body
      console.log("E Bminus from back is: " + this.EBminus)
      if(this.EBminus!=''){
        console.log("E Bminus received")
      }
      else{
        console.log("did not bring the E Bminus from back")
      }
    })
  }

  get_NBminus(){
    this.http.get('http://localhost:6060/savior/gNBm',{
      responseType:'text',
      params:{
      },
      observe:'response'
    }).subscribe(response=>{
      this.NBminus = response.body
      console.log("N Bminus from back is: " + this.NBminus)
      if(this.NAminus!=''){
        console.log("N Bminus received")
      }
      else{
        console.log("did not bring the N Bminus from back")
      }
    })
  }

  get_EABplus(){
    this.http.get('http://localhost:6060/savior/gEABp',{
      responseType:'text',
      params:{
      },
      observe:'response'
    }).subscribe(response=>{
      this.EABplus = response.body
      console.log("E ABplus from back is: " + this.EABplus)
      if(this.EABplus!=''){
        console.log("E ABplus received")
      }
      else{
        console.log("did not bring the E ABplus from back")
      }
    })
  }

  get_NABplus(){
    this.http.get('http://localhost:6060/savior/gNABp',{
      responseType:'text',
      params:{
      },
      observe:'response'
    }).subscribe(response=>{
      this.NABplus = response.body
      console.log("N ABplus from back is: " + this.NABplus)
      if(this.NABplus!=''){
        console.log("N ABplus received")
      }
      else{
        console.log("did not bring the N ABplus from back")
      }
    })
  }

  get_EABminus(){
    this.http.get('http://localhost:6060/savior/gEABm',{
      responseType:'text',
      params:{
      },
      observe:'response'
    }).subscribe(response=>{
      this.EABminus = response.body
      console.log("E ABminus from back is: " + this.EABminus)
      if(this.EABminus!=''){
        console.log("E ABminus received")
      }
      else{
        console.log("did not bring the E ABminus from back")
      }
    })
  }

  get_NABminus(){
    this.http.get('http://localhost:6060/savior/gNABm',{
      responseType:'text',
      params:{
      },
      observe:'response'
    }).subscribe(response=>{
      this.NABminus = response.body
      console.log("N ABminus from back is: " + this.NABminus)
      if(this.NABminus!=''){
        console.log("N ABminus received")
      }
      else{
        console.log("did not bring the N ABminus from back")
      }
    })
  }

  get_EOplus(){
    this.http.get('http://localhost:6060/savior/gEOp',{
      responseType:'text',
      params:{
      },
      observe:'response'
    }).subscribe(response=>{
      this.EOplus = response.body
      console.log("E Oplus from back is: " + this.EOplus)
      if(this.EOplus!=''){
        console.log("E Oplus received")
      }
      else{
        console.log("did not bring the E Oplus from back")
      }
    })
  }

  get_NOplus(){
    this.http.get('http://localhost:6060/savior/gNOp',{
      responseType:'text',
      params:{
      },
      observe:'response'
    }).subscribe(response=>{
      this.NOplus = response.body
      console.log("N Oplus from back is: " + this.NOplus)
      if(this.NOplus!=''){
        console.log("N Oplus received")
      }
      else{
        console.log("did not bring the N Oplus from back")
      }
    })
  }

  get_EOminus(){
    this.http.get('http://localhost:6060/savior/gEOm',{
      responseType:'text',
      params:{
      },
      observe:'response'
    }).subscribe(response=>{
      this.EOminus = response.body
      console.log("E Ominus from back is: " + this.EOminus)
      if(this.EAminus!=''){
        console.log("E Ominus received")
      }
      else{
        console.log("did not bring the E Ominus from back")
      }
    })
  }

  get_NOminus(){
    this.http.get('http://localhost:6060/savior/gNOm',{
      responseType:'text',
      params:{
      },
      observe:'response'
    }).subscribe(response=>{
      this.NOminus = response.body
      console.log("N Ominus from back is: " + this.NOminus)
      if(this.NOminus!=''){
        console.log("N Ominus received")
      }
      else{
        console.log("did not bring the N Ominus from back")
      }
    })
  }

}
