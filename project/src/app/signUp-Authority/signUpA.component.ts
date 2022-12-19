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

  Name: any = ''
  Email: any = ''
  Phone: any = ''
  Pass: any = ''
  Address: any = ''
  City: any = ''
  Region: any = ''
  Tax: any = ''
  WFrom: any = ''
  WTo: any = ''
  DAFrom: any = ''
  DATo: any = ''

  ExistAplus: any = ''
  NeededAplus: any = ''
  ExistAminus: any = ''
  NeededAminus: any = ''
  ExistBplus: any = ''
  NeededBplus: any = ''
  ExistBminus: any = ''
  NeededBminus: any = ''
  ExistABplus: any = ''
  NeededABplus: any = ''
  ExistABminus: any = ''
  NeededABminus: any = ''
  ExistOplus: any = ''
  NeededOplus: any = ''
  ExistOminus: any = ''
  NeededOminus: any = ''

  info: any

  n :any
  asci: any = ''
  hashedPass: any = ''
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

  addPhone(){
    const inputPhone = (<HTMLInputElement>document.getElementById('phone'))
    this.Phone = inputPhone.value
    console.log(this.Phone)
  }

  addPassword(){
    const inputPass = (<HTMLInputElement>document.getElementById('password'))
    this.Pass = inputPass.value
    console.log("password after hashing" + this.Pass)
  }

  addAddress(){
    const inputAddress = (<HTMLInputElement>document.getElementById('address'))
    this.Address = inputAddress.value
    console.log(this.Address)
  }

  // will be taken from back
  // addCity(){
  //   const inputCity = (<HTMLInputElement>document.getElementById('city'))
  //   this.City = inputCity.value
  //   console.log(this.City)
  // }

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
    if(this.Name==''||this.Address==''||this.Region==''||this.Email==''||this.Pass==''||this.Tax==''
    || this.WFrom=='' || this.WTo=='' || this.DAFrom=='' || this.DATo=='' || this.Phone==''
    || this.ExistAplus=='' || this.NeededAplus=='' || this.ExistAminus=='' || this.NeededAminus==''
    || this.ExistABplus=='' || this.NeededABplus=='' || this.ExistABminus=='' || this.NeededABminus==''
    || this.ExistBplus=='' || this.NeededBplus=='' || this.ExistOplus=='' || this.NeededOplus==''){
      alert('Incomplete information')
      return false
    }
    else if(this.Tax.length!=9 && this.Pass.length<8){
      alert('INVALID tax number and PASSWORD');
      return false
    }
    else if(this.Tax.length!=9){
      alert('INVALID tax number');
      return false
    }
    else if(this.Pass.length<8){
      alert('INVALID PASSWORD');
      return false
    }
    return true
  }

  hashPassword(pass: string){
    this.n = pass.length
    for(let i = 0; i < this.n; i++){
        this.asci += pass.charCodeAt(i)
    }
    this.hashedPass = this.asci
    return this.hashedPass;
   }
  

  SIGNUP(Email: string, Phone: string, Password: string, Name: string, Address: string, Region: string, Tax: string, 
    Start: string, End: string, DAFrom: string, DATo: string, 
    EAp: any, NAp: any, EAm: any, NAm: any, 
    EBp: any, NBp: any, EBm: any, NBm: any, 
    EABp: any, NABp: any, EABm: any, NABm: any, 
    EOp: any, NOp: any, EOm: any, NOm: any){
    console.log("SIGNUP calling")
    this.http.get('http://localhost:6060/savior/signUpA',{ 
      responseType:'text',
      params:{
        email: Email,
        phone: Phone,
        pass: Password,
        name: Name,
        adrs: Address,
        region: Region,
        tax: Tax,
        start: Start,
        end: End,
        donationF: DAFrom,
        donationT: DATo,
        EAplus: EAp,
        NAplus: NAp,
        EAminus: EAm,
        NAminus: NAm,
        EBplus: EBp,
        NBplus: NBp,
        EBminus: EBm,
        NBminus: NBm,
        EABplus: EABp,
        NABplus: NABp,
        EABminus: EABm,
        NABminus: NABm,
        EOplus: EOp,
        NOplus: NOp,
        EOminus: EOm,
        NOminus: NOm
      },
      observe:'response'
    }).subscribe(response=>{
      this.response = response.body
      console.log(this.response)

      if(this.response=="valid"){
        this.router.navigateByUrl('/welcomeA')
      }
      else if(this.response=="invalid"){
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
    this.addPhone()
    this.addPassword();
    this.addAddress();
    this.addRegion()
    this.addTax()
    this.addWFrom();
    this.addWTo();
    this.addDAFrom();
    this.addDATo();
    this.addNeededBags1_1()
    this.addExistBags1_1()
  }

  NEXT(){
    this.INFO()
    if(this.validation()){
      console.log('valid');
      this.Pass = this.hashPassword(this.Pass)
      console.log("password after hashing: " + this.Pass)
      this.SIGNUP(this.Email, this.Phone, this.Pass, this.Name, this.Address, this.Region, this.Tax, this.WFrom, this.WTo, this.DAFrom, this.DATo
        ,this.ExistAplus, this.NeededAplus, this.ExistAminus, this.NeededAminus
        ,this.ExistBplus, this.NeededBplus, this.ExistBminus, this.NeededBminus
        ,this.ExistABplus, this.NeededABplus, this.ExistABminus, this.NeededABminus
        ,this.ExistOplus, this.NeededOplus, this.ExistOminus, this.NeededOminus)
        this.hashedPass = ''
    }
    else{
      console.log("not valid")
      alert("INVALID!")
    }
  }

}