import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LocalStorageService } from '../services/localStorage.service';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  checkoutForm = this.formBuilder.group({
    userName: '',
    password: '',
  });
  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    // Process checkout data here
    console.warn('Your order has been submitted', this.checkoutForm.value);
    let formObj = this.checkoutForm.getRawValue(); // {name: '', description: ''}

    let serializedForm = JSON.stringify(formObj);
    console.log(serializedForm);
    this.loginService
      .postLogin(serializedForm)
      .subscribe((x) => this.localStorageService.setItem('JWT', x));
    this.router.navigate(['volunteer-dashboard']);
    this.checkoutForm.reset();
  }
}
