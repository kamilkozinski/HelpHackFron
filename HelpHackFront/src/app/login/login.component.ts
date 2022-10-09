import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginService } from '../services/login.service';

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
    private formBuilder: FormBuilder
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
      .subscribe((x) => console.log(x));
    this.checkoutForm.reset();
  }
}
