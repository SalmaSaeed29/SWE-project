import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signUp-Authority',
  templateUrl: './signUpA.component.html',
  styleUrls: ['./signUpA.component.css']
})
export class signUpAComponent implements OnInit {

  constructor(private http:HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  Name: any = ''
  Email: any = ''
  Pass: any = ''
  Address: any = ''
  City: any = ''
  WFrom: any
  WTo: any
  DAFrom: any
  DATo: any

  info: any
  response: any = ''

  addName(){
    const inputName = (<HTMLInputElement>document.getElementById('name'))
    this.Name = inputName.value
    console.log(this.Name)
  }

  addEmail(){
    const inputEmail = (<HTMLInputElement>document.getElementById('email'))
    this.Email = inputEmail.value
    console.log(this.Email)
  }

  addPassword(){
    const inputPass = (<HTMLInputElement>document.getElementById('password'))
    this.Pass = inputPass.value
    console.log(this.Pass)
  }

  addAddress(){
    const inputAddress = (<HTMLInputElement>document.getElementById('address'))
    this.Address = inputAddress.value
    console.log(this.Address)
  }

  addCity(){
    const inputCity = (<HTMLInputElement>document.getElementById('city'))
    this.City = inputCity.value
    console.log(this.City)
  }

  addWFrom(){
    const inputWFrom = (<HTMLInputElement>document.getElementById('wHourf'))
    this.WFrom = inputWFrom.value
    console.log(this.WFrom)
  }

  addWTo(){
    const inputWTo = (<HTMLInputElement>document.getElementById('wHourt'))
    this.WTo = inputWTo.value
    console.log(this.WTo)
  }

  addDAFrom(){
    const inputDAFrom = (<HTMLInputElement>document.getElementById('dTimeF'))
    this.DAFrom = inputDAFrom.value
    console.log(this.DAFrom)
  }

  addDATo(){
    const inputDATo = (<HTMLInputElement>document.getElementById('dTimeT'))
    this.DATo = inputDATo.value
    console.log(this.DATo)
  }

  validation(){
    if(this.Name==''){
      alert('Incomplete name')
      return false
    }
    else if(this.Email.length<11 && this.Pass.length<8){
      alert('INVALID EMAIL and PASSWORD');
      return false
    }
    else if(this.Email.length<11){
      alert('INVALID Email');
      return false
    }
    else if(this.Pass.length<8){
      alert('INVALID PASSWORD');
      return false
    }
    return true
  }


  SIGNUP(Email: string, Password: string, Name: string, Address: string, Start: string, End: string, DAFrom: string, DATo: string){
    console.log("SIGNUP calling")
    this.http.get('http://localhost:3030/savior/signUpA',{ 
      responseType:'text',
      params:{
        email: Email,
        pass: Password,
        name: Name,
        adrs: Address,
        start: Start,
        end: End,
        donationF: DAFrom,
        donationT: DATo
      },
      observe:'response'
    }).subscribe(response=>{
      this.response = response.body
      console.log(this.response)

      if(this.response=="Done"){
        this.router.navigateByUrl('/profileA')
      }
      else if(this.response==""){
        console.log("has not received Done from back")
      }
      else{
        alert("INVALID!")
      }

    })
  }

  INFO(){
    this.addName();
    this.addEmail();
    this.addPassword();
    this.addAddress();
    this.addWFrom();
    this.addWTo();
    this.addDAFrom();
    this.addDATo();
  }

  NEXT(){
    this.INFO()
    if(this.validation()){
      console.log('valid');
      this.SIGNUP(this.Email, this.Pass, this.Name, this.Address, this.WFrom, this.WTo, this.DAFrom, this.DATo)
    }
    else{
      console.log("not valid")
      alert("INVALID!")
    }
  }

}