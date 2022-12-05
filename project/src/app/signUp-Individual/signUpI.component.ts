import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signUp-Individual',
  templateUrl: './signUpI.component.html',
  styleUrls: ['./signUpI.component.css']
})
export class signUpIComponent implements OnInit {

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
  City: any = ''

  info: any
  response: any = ''

  addName(){
    const inputName = (<HTMLInputElement>document.getElementById('name'))
    this.Name = inputName.value
    console.log(this.Name)
  }

  addID(){
    const inputID = (<HTMLInputElement>document.getElementById('id'))
    this.ID = inputID.value
    console.log(this.ID)
  }

  addPassword(){
    const inputPass = (<HTMLInputElement>document.getElementById('password'))
    this.Pass = inputPass.value
    console.log(this.Pass)
  }

  addBloodType(){
    const inputType = (<HTMLInputElement>document.getElementById('type'))
    this.BloodType = inputType.value
    console.log(this.BloodType)
  }

  addAge(){
    const inputAge = (<HTMLInputElement>document.getElementById('age'))
    this.Age = inputAge.value
    console.log(this.Age)
  }

  addWeight(){
    const inputWeight = (<HTMLInputElement>document.getElementById('weight'))
    this.Weight = inputWeight.value
    console.log(this.Weight)
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

  validation(){
    if(this.Name==''){
      alert('Incomplete name')
      return false
    }
    else if(this.ID.length<6 && this.Pass.length<8){
      alert('INVALID ID and PASSWORD');
      return false
    }
    else if(this.ID.length<6){
      alert('INVALID ID');
      return false
    }
    else if(this.Pass.length<8){
      alert('INVALID PASSWORD');
      return false
    }
    return true
  }

  INFO(): string{
    this.addName()
    this.addID()
    this.addPassword()
    this.addBloodType()
    this.addAge()
    this.addWeight()
    this.addAddress()
    this.addCity()

    var user = new Map<string, string>();
    user.set("Name" ,this.Name);
    user.set("ID" ,this.ID);
    user.set("Blood Type", this.BloodType)
    user.set("Age", this.Age)
    user.set("Weight", this.Weight)
    user.set("Password", this.Pass);
    user.set("Address", this.Address);
    user.set("City", this.City);

   let result = Object.fromEntries(user);
   this.info = JSON.stringify(result)
   console.log(this.info)
    return this.info
  }

  SIGNUP(Info: string){
    console.log("SIGNUP calling")
    this.http.get('http://localhost:4200/savior/signUpA',{  //this link is determined on back
      responseType:'text',
      params:{
        info: Info
      },
      observe:'response'
    }).subscribe(response=>{
      this.response = response.body
      console.log(this.response)

      if(this.validation() && this.response=="Done"){
        this.router.navigateByUrl('/profileA')
      }
      else if(!this.validation()){
        console.log("validation return false")
      }
      else if(this.response==""){
        console.log("has not received Done from back")
      }
      else{
        alert("INVALID!")
      }

    })
  }

  NEXT(){
    this.INFO()
    if(this.validation()){
      console.log('valid');
    }
    else{
      console.log("not valid")
    }
    // console.log(this.response);
    // this.SIGNUP(this.INFO());
    // console.log(this.response);
  }

}