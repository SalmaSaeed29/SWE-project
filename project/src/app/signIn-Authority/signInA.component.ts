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

  Email: any = ''
  Password: any = ''
  returnedValue: any

  response: any = ''

  addEmail(){
    const inputEmail = (<HTMLInputElement>document.getElementById('email'))
    this.Email = inputEmail.value
    console.log(this.Email)
  }

  addPassword(){
    const inputPassword = (<HTMLInputElement>document.getElementById('password'))
    this.Password = inputPassword.value
    console.log(this.Password)
  }

  validation(){
    if(this.Email.length<6 && this.Password.length<8){
      alert('INVALID ID and PASSWORD');
      return false
    }
    else if(this.Email.length<6){
      alert('INVALID ID');
      return false
    }
    else if(this.Password.length<8){
      alert('INVALID PASSWORD');
      return false
    }
    return true
  }

  SIGNIN_A(Email:string, Password:string){
    this.http.get('http://localhost:6060/savior/signInA',{
      responseType:'text',
      params:{
        email: Email,
        password: Password
      },
      observe:'response'
    }).subscribe(response=>{
      this.response = response.body
      console.log("the response from sign in: " + this.response)
      if(this.response === "False"){
        alert("WRONG email or password!")
      }
      else if(this.response == "True"){
        this.router.navigateByUrl("/profileA")
      }
    })
  }

  signInA(){
    this.addEmail()
    this.addPassword()
    if(this.validation()){
      console.log("valid sign in")
      this.SIGNIN_A(this.Email, this.Password);
    }
    else{
      console.log("invalid sign in")
    }
  }

}