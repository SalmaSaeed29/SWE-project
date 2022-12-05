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

  SIGNIN_A(Email:string, Password:string){
    this.http.get('http://localhost:3030/savior/signInA',{
      responseType:'text',
      params:{
        email: Email,
        password: Password
      },
      observe:'response'
    }).subscribe(response=>{
      this.returnedValue = response.body
      console.log(this.returnedValue)
      if(this.returnedValue === ''){
        alert("WRONG email or password!")
      }
      else{
        this.router.navigateByUrl("/profileA")
      }
    })
  }

  signInA(){
    this.addEmail()
    this.addPassword()
    this.SIGNIN_A(this.Email, this.Password);
    console.log(this.returnedValue)
  }

}