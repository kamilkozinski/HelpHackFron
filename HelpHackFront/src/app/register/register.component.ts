import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  ngosList: string[] = ['Comarch', 'Capgemini', 'Test'];
  toppings = new FormControl('');

  ngoSelected: string = 'test';
  regionSelected: string = 'EAST';
  isVolunteer: boolean = true;
  ngoValue: string;
  regionValue: string;
  isNGO: boolean = false;
  selected: string = '';
  checkoutForm = this.formBuilder.group({
    email: '',
    userName: '',
    password: '',
    role: 'USER',
    region: 'EAST',
  });
  constructor(
    private registrationService: RegistrationService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    // Process checkout data here
    console.warn('', this.checkoutForm.value);
    let formObj = this.checkoutForm.getRawValue(); // {name: '', description: ''}

    let serializedForm = JSON.stringify(formObj);
    console.log(serializedForm);
    this.registrationService
      .postRegistration(serializedForm)
      .subscribe((x) => console.log(x));
    this.router.navigate(['registered']);
    this.checkoutForm.reset();
  }
  ngoSelect(str: Event) {
    this.ngoSelected = (str.target as HTMLInputElement).value;
  }
}
