import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  isVolunteer: boolean = true;
  isNGO: boolean = false;
  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });
  constructor(
    private registrationService: RegistrationService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    // Process checkout data here
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
  onItemChange(event: Event) {
    this.isVolunteer = !this.isVolunteer;
  }
}
