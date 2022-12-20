import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as internal from 'stream';

@Component({
  selector: 'app-Edit-Individual',
  templateUrl: './EditI.component.html',
  styleUrls: ['./EditI.component.css']
})
export class EditIComponent implements OnInit {

  constructor(private http:HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  Name: any = ''
  ID: any = ''
  Pass: any = ''
  BloodType: any = ''
  Age: any = ''
  Weight: any = ''
  Address: any = ''
  Region: any = ''

  n :any
  asci: any = ''
  hashedPass: any
  response: any = ''

  nameUser(){

    const userName = (<HTMLInputElement>document.getElementById('name'))
    this.Name = userName.value
    console.log(this.Name)
  }

  passUser(){
    const userPass = (<HTMLInputElement>document.getElementById('password'))
    this.Pass = userPass.value
    console.log("password before hashing: " + this.Pass)
  }

  adrsUser(){
    const userAddr = (<HTMLInputElement>document.getElementById('address'))
    this.Address = userAddr.value
    console.log(this.Address)
  }

  regionUser(){
    const userRegion = (<HTMLInputElement>document.getElementById('region'))
    this.Region = userRegion.value
    console.log(this.Region)
  }

  bloodTypeUser(){
    const userBlood = (<HTMLInputElement>document.getElementById('bType'))
    this.BloodType = userBlood.value
    console.log(this.BloodType)
  }

  ageUser(){
    const userAge = (<HTMLInputElement>document.getElementById('age'))
    this.Age = userAge.value
    console.log(this.Age)
  }

  weightUser(){
    const userWeight = (<HTMLInputElement>document.getElementById('weight'))
    this.Weight = userWeight.value
    console.log(this.Weight)
  }

  validation(){
    if(this.Name==''||this.Address==''||this.Age==''||this.BloodType==''||this.Region==''||this.Weight==''){
      alert('u donnot enter complete information')
      return false
    }
    
    else if(this.Pass.length<8){
      alert('u enter invalis password');
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

   modifyAccUser(Password: string, Name: any, Age: any, Weight: any, BloodType: string, Address: string, Region: string){
    console.log("SIGNUP calling")
    this.http.get('http://localhost:6060/savior/editAccI',{ 
      responseType:'text',
      params:{
        pass: Password,
        name: Name,
        age: Age,
        weight: Weight,
        BT: BloodType,
        adrs: Address,
        region: Region
      },
      observe:'response'
    }).subscribe(response=>{
      this.response = response.body
      console.log("the responce of modify user is" + this.response)

      if(this.response=="valid"){
        this.router.navigateByUrl('/welcomeI')
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
    this.nameUser();
    this.passUser();
    this.adrsUser();
    this.regionUser()
    this.bloodTypeUser();
    this.ageUser();
    this.weightUser();
   
  
  }

  Next()
  {
    this.INFO()
    if(this.validation()){
      console.log('valid');
      this.Pass = this.hashPassword(this.Pass)
      console.log("password after hashing: " + this.Pass)
      this.modifyAccUser(this.Pass, this.Name, this.Age, this.Weight, this.BloodType, this.Address, this.Region)
      this.hashedPass = ''
    }
    else{
      console.log("not valid")
    }
  }

}
