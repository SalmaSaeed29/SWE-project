import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forgot-pass-Individual',
  templateUrl: './forgotPassI.component.html',
  styleUrls: ['./forgotPassI.component.css']
})
export class ForgotPasswordIComponent implements OnInit {

  constructor(private http:HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  ID: any
  NewPass: any
  NewPass2: any
  hashedPass: any
  asci: any
  n: any

  response: any

  addID(){
    const inputTax = (<HTMLInputElement>document.getElementById('id'))
    this.ID = inputTax.value
    console.log(this.ID)
  }

  addNewPassword(){
    const inputPassword = (<HTMLInputElement>document.getElementById('Npassword'))
    this.NewPass = inputPassword.value
    console.log(this.NewPass)
  }

  addNewPasswordAgain(){
    const inputPassword = (<HTMLInputElement>document.getElementById('Npassword2'))
    this.NewPass2 = inputPassword.value
    console.log(this.NewPass2)
  }

  validation(){
    if(this.ID.length!=6 && this.NewPass.length<8){
      alert('INVALID ID and PASSWORD');
      return false
    }
    else if(this.ID.length!=6){
      alert('INVALID ID');
      return false
    }
    else if(this.NewPass.length<8){
      alert('INVALID PASSWORD');
      return false
    }
    else if(this.ID.length==6 && this.NewPass.length>=8 && this.NewPass!=this.NewPass2){
        alert('Rewrite your new password correctly, "show password" may help you')
    }
    return true
  }

  showPassword1(){
    var x = (<HTMLInputElement>document.getElementById('Npassword'))
    if (x.type === 'password'){
      x.type = "text";
    }else{
      x.type = "password";
    }
  }

  showPassword2(){
    var x = (<HTMLInputElement>document.getElementById('Npassword2'))
    if (x.type === 'password'){
      x.type = "text";
    }else{
      x.type = "password";
    }
  }

  hashPassword(pass: string){
    this.hashedPass = ''
    this.asci = ''
    this.n = pass.length
    for(let i = 0; i < this.n; i++){
        this.asci += pass.charCodeAt(i)
    }
    this.hashedPass = this.asci
    return this.hashedPass;
   }

   FORGOT_I(ID:string, Pass:string){
    this.http.get('http://localhost:6060/savior/modifyPassI',{
      responseType:'text',
      params:{
        id: ID,
        pass: Pass
      },
      observe:'response'
    }).subscribe(response=>{
      this.response = response.body
      console.log("the response from forgot I: " + this.response)
      if(this.response === "invalid"){
        alert("Wrong ID!")
      }
      else if(this.response == "valid"){
        alert('your password has been modified successfully')
        this.router.navigateByUrl("/welcomeI")
      }
    })
  }

  submit(){
    this.addID()
    this.addNewPassword()
    this.addNewPasswordAgain()
    if(this.validation()){
        console.log('valid texting')
        this.NewPass = this.hashPassword(this.NewPass)
        console.log("password after hashing: " + this.NewPass)
        this.FORGOT_I(this.ID, this.NewPass)
    }
    else{
        console.log('invalid texting')
    }
  }
}