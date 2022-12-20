import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forgot-pass-Authority',
  templateUrl: './forgotPassA.component.html',
  styleUrls: ['./forgotPassA.component.css']
})
export class ForgotPasswordAComponent implements OnInit {

  constructor(private http:HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  Tax: any
  NewPass: any
  NewPass2: any
  hashedPass: any
  asci: any
  n: any

  response: any

  addTax(){
    const inputTax = (<HTMLInputElement>document.getElementById('tax'))
    this.Tax = inputTax.value
    console.log(this.Tax)
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
    if(this.Tax.length!=9 && this.NewPass.length<8){
      alert('INVALID Tax number and PASSWORD');
      return false
    }
    else if(this.Tax.length!=9){
      alert('INVALID Tax number');
      return false
    }
    else if(this.NewPass.length<8){
      alert('INVALID PASSWORD');
      return false
    }
    else if(this.Tax.length==9 && this.NewPass.length>=8 && this.NewPass!=this.NewPass2){
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

   FORGOT_A(Tax:string, Pass:string){
    this.http.get('http://localhost:6060/savior/modifyPassA',{
      responseType:'text',
      params:{
        tax: Tax,
        pass: Pass
      },
      observe:'response'
    }).subscribe(response=>{
      this.response = response.body
      console.log("the response from forgot A: " + this.response)
      if(this.response === "invalid"){
        alert("WRONG tax number or password!")
      }
      else if(this.response == "valid"){
        alert('your password has been modified successfully')
        this.router.navigateByUrl("/welcomeA")
      }
    })
  }

  submit(){
    this.addTax()
    this.addNewPassword()
    this.addNewPasswordAgain()
    if(this.validation()){
        console.log('valid texting')
        this.NewPass = this.hashPassword(this.NewPass)
        console.log("password after hashing: " + this.NewPass)
        this.FORGOT_A(this.Tax, this.NewPass)
    }
    else{
        console.log('invalid texting')
    }
  }

}