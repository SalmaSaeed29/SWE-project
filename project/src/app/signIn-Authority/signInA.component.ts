import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signIn-Authority',
  templateUrl: './signInA.component.html',
  styleUrls: ['./signInA.component.css']
})
export class signInAComponent implements OnInit {

  constructor(private http:HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  // Email: any = ''
  Tax: any = ''
  Password: any = ''
  returnedValue: any

  n :any
  asci: any = ''
  hashedPass: any
  response: any = ''

  // addEmail(){
  //   const inputEmail = (<HTMLInputElement>document.getElementById('email'))
  //   this.Email = inputEmail.value
  //   console.log(this.Email)
  // }

  addTax(){
    const inputTax = (<HTMLInputElement>document.getElementById('tax'))
    this.Tax = inputTax.value
    console.log(this.Tax)
  }

  addPassword(){
    const inputPassword = (<HTMLInputElement>document.getElementById('password'))
    this.Password = inputPassword.value
    console.log(this.Password)
  }

  validation(){
    if(this.Tax.length!=9 && this.Password.length<8){
      alert('INVALID Tax number and PASSWORD');
      return false
    }
    else if(this.Tax.length!=9){
      alert('INVALID Tax number');
      return false
    }
    else if(this.Password.length<8){
      alert('INVALID PASSWORD');
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
    this.hashedPass = ''
    this.asci = ''
    this.n = pass.length
    for(let i = 0; i < this.n; i++){
        this.asci += pass.charCodeAt(i)
    }
    this.hashedPass = this.asci
    return this.hashedPass;
   }

  SIGNIN_A(Tax:string, Password:string){
    this.http.get('http://localhost:6060/savior/signInA',{
      responseType:'text',
      params:{
        tax: Tax,
        password: Password
      },
      observe:'response'
    }).subscribe(response=>{
      this.response = response.body
      console.log("the response from sign in: " + this.response)
      if(this.response === "False"){
        alert("WRONG tax number or password!")
      }
      else if(this.response == "True"){
        this.router.navigateByUrl("/welcomeA")
      }
    })
  }

  signInA(){
    this.addTax()
    this.addPassword()
    if(this.validation()){
      console.log("valid sign in")
      this.Password = this.hashPassword(this.Password)
      console.log("password after hashing: " + this.Password)
      this.SIGNIN_A(this.Tax, this.Password);
    }
    else{
      console.log("invalid sign in")
    }
  }

}