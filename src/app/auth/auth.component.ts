import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthResponseData, AuthService} from "./auth.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public isLoginMode = true;
  public isLoading = false;
  public error: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  public obSwitchMode(): void{
    this.isLoginMode = !this.isLoginMode;
  }

  public onSubmit(authForm: NgForm): void{
    console.log(authForm.value);
    if(!authForm.valid) {
      return;
    }
    this.isLoading = true;
    const email = authForm.value.email;
    const password = authForm.value.password;
    let authObs: Observable<AuthResponseData>;
    if(this.isLoginMode){
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signUp(email, password)
    }
    authObs.subscribe(
      {
        next: response => {
          this.isLoading = false;
          console.log(response);
        },
        error: errorMessage => {
          this.isLoading = false;
          this.error = errorMessage;
          console.log(errorMessage);
        }
      }
    );

    authForm.reset();
  }

}
