import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(254), Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$') ]],
    password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]]
  });

  constructor(
    private fb: FormBuilder,
    private appService: AppService
    ) {

  }

  ngOnInit(): void {
    //  For testing employee API.
    // this.getEmployees()
  }

  // getEmployees(): void {
  //   this.appService.getEmployees().subscribe(res => {
  //     console.log("on success og get employees", res);
  //   }, err => {
  //     console.log("on error of get employees", err);
  //   });
  // }



  submit() {
    console.log("this.loginForm",this.loginForm);
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.appService.login(this.loginForm.value).subscribe(res => {
        console.log("On success of login", res);
      }, err => {
        console.log("On error of login", err);
      })
    }
  }


}
