import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { appendFile } from 'fs';

@Component({
  selector: 'app-signIn-Individual',
  templateUrl: './signInI.component.html',
  styleUrls: ['./signInI.component.css']
})
export class signInIComponent implements OnInit {

  constructor(private http:HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  ID: any = ''
  Password: any = ''

  n :any
  asci: any = ''
  hashedPass: any
  response: any = ''

  addID(){
    const inputID = (<HTMLInputElement>document.getElementById('id'))
    this.ID = inputID.value
    console.log(this.ID)
  }

  addPassword(){
    const inputPassword = (<HTMLInputElement>document.getElementById('password'))
    this.Password = inputPassword.value
    console.log(this.Password)
  }

  validation(){
    if(this.ID.length!=6 && this.Password.length<8){
      alert('INVALID ID and PASSWORD');
      return false
    }
    else if(this.ID.length!=6){
      alert('INVALID ID');
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

  SIGNIN_I(ID:string, Password:string){
    this.http.get('http://localhost:6060/savior/signInI',{
      responseType:'text',
      params:{
        id: ID,
        password: Password
      },
      observe:'response'
    }).subscribe(response=>{
      this.response = response.body
      console.log(this.response)
      if(this.response === "False"){
        alert("WRONG id or password!")
      }
      else{
        this.router.navigateByUrl("/welcomeI")
      }
    })
  }

  signInI(){
    this.addID()
    this.addPassword()
    if(this.validation()){
      console.log("valid sign in")
      this.Password = this.hashPassword(this.Password)
      console.log("password after hashing: " + this.Password)
      this.SIGNIN_I(this.ID, this.Password);
    }
    else{
      console.log("invalid sign in");
    }
  }

}