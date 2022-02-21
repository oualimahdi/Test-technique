import { Component, OnInit } from '@angular/core';
import {Route, Router} from "@angular/router";
import {AppComponent} from "../app.component"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  username: any;
  password: any;

  login(username: string, password: string) {

    let userFound = false;
    
    console.log("login data >> "+username+ " >> "+password);
    console.log(AppComponent.staticData.users);

    if (username == null || password == null)
      alert("Please enter valid credentials")

    for (let i = 0; i < AppComponent.staticData.users.length; i++) {
      if (username === AppComponent.staticData.users[i].email 
        && password === AppComponent.staticData.users[i].password) {
          userFound = true;
          this.router.navigate(['courses']) 
         /* if (AppComponent.staticData.users[i].role === "student") {
            this.router.navigate(['student']) 
          }else {
            this.router.navigate(['instructor']) 
          } */
        }
    }


    if(!userFound) {
      alert("No such user exists");
    }

  } 


  constructor(private router: Router) { }

  ngOnInit() {
 
      
  }

}
