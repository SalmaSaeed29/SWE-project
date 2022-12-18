import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as internal from 'stream';

@Component({
  selector: 'app-signUp-Authority',
  templateUrl: './signUpA.component.html',
  styleUrls: ['./signUpA.component.css']
})
export class signUpAComponent implements OnInit {

  constructor(private http:HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  iCity = (<HTMLInputElement>document.getElementById('city'))
    // this.City = inputCity.value
    // console.log(this.City)

  Name: any = ''
  Email: any = ''
  Pass: any = ''
  Address: any = ''
  City: any = this.iCity
  Region: any = "victoria"
  Tax: any
  WFrom: any
  WTo: any
  DAFrom: any
  DATo: any

  ExistAplus: any
  NeededAplus: any
  ExistAminus: any
  NeededAminus: any
  ExistBplus: any
  NeededBplus: any
  ExistBminus: any
  NeededBminus: any
  ExistABplus: any
  NeededABplus: any
  ExistABminus: any
  NeededABminus: any
  ExistOplus: any
  NeededOplus: any
  ExistOminus: any
  NeededOminus: any

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

  addRegion(){
    const inputRegion = (<HTMLInputElement>document.getElementById('region'))
    this.Region = inputRegion.value
    console.log(this.Region)
  }

  addTax(){
    const inputTax = (<HTMLInputElement>document.getElementById('tax'))
    this.Tax = inputTax.value
    console.log(this.Tax)
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

  addExistBags1_1(){
    const EAplus = (<HTMLInputElement>document.getElementById('APEBags'))
    this.ExistAplus = EAplus.value

    const EAminus = (<HTMLInputElement>document.getElementById('ANEBags'))
    this.ExistAminus = EAminus.value

    const EBplus = (<HTMLInputElement>document.getElementById('BPEBags'))
    this.ExistBplus = EBplus.value

    const EBminus = (<HTMLInputElement>document.getElementById('BNEBags'))
    this.ExistBminus = EBminus.value

    const EABplus = (<HTMLInputElement>document.getElementById('ABPEBags'))
    this.ExistABplus = EABplus.value

    const EABminus = (<HTMLInputElement>document.getElementById('ABNEBags'))
    this.ExistABminus = EABminus.value

    const EOplus = (<HTMLInputElement>document.getElementById('OPEBags'))
    this.ExistOplus = EOplus.value

    const EOminus = (<HTMLInputElement>document.getElementById('ONEBags'))
    this.ExistOminus = EOminus.value
  }

  addNeededBags1_1(){
    const NAplus = (<HTMLInputElement>document.getElementById('APNBags'))
    this.NeededAplus = NAplus.value

    const NAminus = (<HTMLInputElement>document.getElementById('ANNBags'))
    this.NeededAminus = NAminus.value

    const NBplus = (<HTMLInputElement>document.getElementById('BPNBags'))
    this.NeededBplus = NBplus.value

    const NBminus = (<HTMLInputElement>document.getElementById('BNNBags'))
    this.NeededBminus = NBminus.value

    const NABplus = (<HTMLInputElement>document.getElementById('ABPNBags'))
    this.NeededABplus = NABplus.value

    const NABminus = (<HTMLInputElement>document.getElementById('ABNNBags'))
    this.NeededABminus = NABminus.value

    const NOplus = (<HTMLInputElement>document.getElementById('OPNBags'))
    this.NeededOplus = NOplus.value

    const NOminus = (<HTMLInputElement>document.getElementById('ONNBags'))
    this.NeededOminus = NOminus.value
  }

  addExistBags(): Map<string, string>{
    var EBags = new Map<string, string>();
    EBags.set("A+", this.ExistAplus)
    EBags.set("A-", this.ExistAminus)
    EBags.set("B+", this.ExistBplus)
    EBags.set("B-", this.ExistBminus)
    EBags.set("AB+", this.ExistABplus)
    EBags.set("AB-", this.ExistABminus)
    EBags.set("O+", this.ExistOplus)
    EBags.set("O-", this.ExistOminus)

    return EBags
  }

  addNeededBags(): Map<string, string>{
    var NBags = new Map<string, string>();
    NBags.set("A+", this.NeededAplus)
    NBags.set("A-", this.NeededAminus)
    NBags.set("B+", this.NeededBplus)
    NBags.set("B-", this.NeededBminus)
    NBags.set("AB+", this.NeededABplus)
    NBags.set("AB-", this.NeededABminus)
    NBags.set("O+", this.NeededOplus)
    NBags.set("O-", this.NeededOminus)

    return NBags
  }

  validation(){
    if(this.Name==''||this.Address==''||this.City==''||this.Email==''||this.Pass==''||this.Region==''||this.Tax==''){
      alert('Incomplete information')
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
    else if(this.Tax.length!=9){
      alert('INVALID TAX NUMBER');
      return false
    }
    return true
  }


  SIGNUP(Email: string, Password: string, Name: string, Address: string, City: string, Region: string, Tax: string, Start: string, End: string, DAFrom: string, DATo: string){
    console.log("SIGNUP calling")
    this.http.get('http://localhost:6060/savior/signUpA',{ 
      responseType:'text',
      params:{
        email: Email,
        pass: Password,
        name: Name,
        adrs: Address,
        city: City,
        region: Region,
        tax: Tax,
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
        this.router.navigateByUrl('/welcomeA')
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
    this.addCity()
    // this.addRegion()
    this.addTax()
    this.addWFrom();
    this.addWTo();
    this.addDAFrom();
    this.addDATo();
  }

  NEXT(){
    this.INFO()
    if(this.validation()){
      console.log('valid');
      this.SIGNUP(this.Email, this.Pass, this.Name, this.Address, this.City, this.Region, this.Tax, this.WFrom, this.WTo, this.DAFrom, this.DATo)
    }
    else{
      console.log("not valid")
      alert("INVALID!")
    }
  }

}