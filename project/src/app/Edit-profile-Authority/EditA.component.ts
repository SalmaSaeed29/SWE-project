import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as internal from 'stream';

@Component({
  selector: 'app-Edit-Authority',
  templateUrl: './EditA.component.html',
  styleUrls: ['./EditA.component.css']
})
export class EditAComponent implements OnInit {

  constructor(private http:HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  // info can be edited
  Name: any = ''
  Email: any = ''
  Phone: any = ''
  Pass: any = ''
  Address: any = ''
  City: any = ''
  Region: any = ''
  WFrom: any = ''
  WTo: any = ''
  DAFrom: any = ''
  DATo: any = ''

  // blood types needed and exist
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

  nameAuth(){
    const authName = (<HTMLInputElement>document.getElementById('name'))
    this.Name = authName.value
    console.log(this.Name)
    }

    emailAuth(){
      const authEmail = (<HTMLInputElement>document.getElementById('email'))
      this.Email = authEmail.value
      console.log(this.Email)
    }

    phoneAuth(){
      const authPhone = (<HTMLInputElement>document.getElementById('phone'))
      this.Phone = authPhone.value
      console.log(this.Phone)
    }

    passwordAuth(){
      const authPassword = (<HTMLInputElement>document.getElementById('password'))
      this.Pass = authPassword.value
      console.log("password after hashing" + this.Pass)
    }

    addressAuth(){
      const authAddress = (<HTMLInputElement>document.getElementById('address'))
      this.Address = authAddress.value
      console.log(this.Address)
    }

    regionAuth(){
      const authRegion = (<HTMLInputElement>document.getElementById('region'))
      this.Region = authRegion.value
      console.log(this.Region)
    }

    startWorkAuth(){
      const authStartW = (<HTMLInputElement>document.getElementById('wHourf'))
      this.WFrom = authStartW.value
      console.log(this.WFrom)
    }

    endWorkAuth(){
      const authEndW = (<HTMLInputElement>document.getElementById('wHourt'))
      this.WTo = authEndW.value
      console.log(this.WTo)
    }

    startDonAuth(){
      const authStartD = (<HTMLInputElement>document.getElementById('dTimeF'))
      this.DAFrom = authStartD.value
      console.log(this.DAFrom)
    }
  
    endDonAuth(){
      const authEndD = (<HTMLInputElement>document.getElementById('dTimeT'))
      this.DATo = authEndD.value
      console.log(this.DATo)
    }

    existBagsAuth(){
      const EAplus = (<HTMLInputElement>document.getElementById('APEBags'))
      this.ExistAplus = EAplus.value
      console.log(this.ExistAplus)

      const EAminus = (<HTMLInputElement>document.getElementById('ANEBags'))
      this.ExistAminus = EAminus.value
      console.log(this.ExistAminus)

      const EBplus = (<HTMLInputElement>document.getElementById('BPEBags'))
      this.ExistBplus = EBplus.value
      console.log(this.ExistBplus)
  
      const EBminus = (<HTMLInputElement>document.getElementById('BNEBags'))
      this.ExistBminus = EBminus.value
      console.log(this.ExistBminus)
  
      const EABplus = (<HTMLInputElement>document.getElementById('ABPEBags'))
      this.ExistABplus = EABplus.value
      console.log(this.ExistABplus)

      const EABminus = (<HTMLInputElement>document.getElementById('ABNEBags'))
      this.ExistABminus = EABminus.value
      console.log(this.ExistABminus)
  
      const EOplus = (<HTMLInputElement>document.getElementById('OPEBags'))
      this.ExistOplus = EOplus.value
      console.log(this.ExistOplus)
  
      const EOminus = (<HTMLInputElement>document.getElementById('ONEBags'))
      this.ExistOminus = EOminus.value
      console.log(this.ExistOminus)
    }


    neededBagsAuth(){
      const NAplus = (<HTMLInputElement>document.getElementById('APNBags'))
      this.NeededAplus = NAplus.value
      console.log(this.NeededAplus)
  
      const NAminus = (<HTMLInputElement>document.getElementById('ANNBags'))
      this.NeededAminus = NAminus.value
      console.log(this.NeededAminus)

      const NBplus = (<HTMLInputElement>document.getElementById('BPNBags'))
      this.NeededBplus = NBplus.value
      console.log(this.NeededBplus)

      const NBminus = (<HTMLInputElement>document.getElementById('BNNBags'))
      this.NeededBminus = NBminus.value
      console.log(this.NeededBminus)
  
      const NABplus = (<HTMLInputElement>document.getElementById('ABPNBags'))
      this.NeededABplus = NABplus.value
      console.log(this.NeededABplus)

      const NABminus = (<HTMLInputElement>document.getElementById('ABNNBags'))
      this.NeededABminus = NABminus.value
      console.log(this.NeededABminus)
  
      const NOplus = (<HTMLInputElement>document.getElementById('OPNBags'))
      this.NeededOplus = NOplus.value
      console.log(this.NeededOplus)
  
      const NOminus = (<HTMLInputElement>document.getElementById('ONNBags'))
      this.NeededOminus = NOminus.value
      console.log(this.NeededOminus)
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

    validation()
    {
      if(this.Name==''||this.Address==''||this.Region==''||this.Email==''||this.Pass==''
    || this.WFrom=='' || this.WTo=='' || this.DAFrom=='' || this.DATo=='' || this.Phone==''
    || this.ExistAplus=='' || this.NeededAplus=='' || this.ExistAminus=='' || this.NeededAminus==''
    || this.ExistABplus=='' || this.NeededABplus=='' || this.ExistABminus=='' || this.NeededABminus==''
    || this.ExistBplus=='' || this.NeededBplus=='' || this.ExistOplus=='' || this.NeededOplus=='')
    {
      alert("u don't enter complete information")
      return false
    }
    else if(this.Pass.length<8)
    {
      alert("u enter invalid password")
      return false
    }
    return true
    }

    showPassword(){
      var x = (<HTMLInputElement>document.getElementById('password'))
      if (x.type === 'password'){
        x.type = "text";
      }else{
        x.type = "password";
      }
    }
  

    hashPassword(pass: string){
      this.n = pass.length
      for(let i = 0; i < this.n; i++){
          this.asci += pass.charCodeAt(i)
      }
      this.hashedPass = this.asci
      return this.hashedPass;
     }

     modifyAccAuth(Email: string, Phone: string, Password: string, Name: string, Address: string, Region: string,
      Start: string, End: string, DAFrom: string, DATo: string, 
      EAp: any, NAp: any, EAm: any, NAm: any, 
      EBp: any, NBp: any, EBm: any, NBm: any, 
      EABp: any, NABp: any, EABm: any, NABm: any, 
      EOp: any, NOp: any, EOm: any, NOm: any){
      console.log("modifyAccCalling")
      this.http.get('http://localhost:6060/savior/editAccA',{ 
        responseType:'text',
        params:{
          email: Email,
          phone: Phone,
          pass: Password,
          name: Name,
          adrs: Address,
          region: Region,
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
        console.log("the response from modifyAccAuth: " + this.response)
  
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
    this.nameAuth()
    this.emailAuth()
    this.phoneAuth()
    this.passwordAuth()
    this.addressAuth()
    this.regionAuth()
    this.startWorkAuth()
    this.endWorkAuth()
    this.startDonAuth()
    this.endDonAuth()
    this.existBagsAuth()
    this.neededBagsAuth()
  }

  // NEXT(){
  //   this.INFO()
  //   this.modifyAccAuth(this.Email, this.Phone, this.Pass, this.Name, this.Address, this.Region,  this.WFrom, this.WTo, this.DAFrom, this.DATo
  //       ,this.ExistAplus, this.NeededAplus, this.ExistAminus, this.NeededAminus
  //       ,this.ExistBplus, this.NeededBplus, this.ExistBminus, this.NeededBminus
  //       ,this.ExistABplus, this.NeededABplus, this.ExistABminus, this.NeededABminus
  //       ,this.ExistOplus, this.NeededOplus, this.ExistOminus, this.NeededOminus)
  //       this.hashedPass = ''

  //       if(this.validation()){
  //         console.log('valid');
  //         this.Pass = this.hashPassword(this.Pass)
  //         console.log("password after hashing: " + this.Pass)
  //   }
  //   else{
  //     console.log("not valid")
  //     alert("INVALID!")
  //   }
  // }

  NEXT(){
    this.INFO()
    if(this.validation()){
      console.log('valid');
      this.Pass = this.hashPassword(this.Pass)
      console.log("password after hashing: " + this.Pass)
      this.modifyAccAuth(this.Email, this.Phone, this.Pass, this.Name, this.Address, this.Region, this.WFrom, this.WTo, this.DAFrom, this.DATo
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