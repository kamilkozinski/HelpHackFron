import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AddAdvertService } from '../services/add-advert.service';

@Component({
  selector: 'app-add-action',
  templateUrl: './add-action.component.html',
  styleUrls: ['./add-action.component.css'],
})
export class AddActionComponent implements OnInit {
  checkoutForm = this.formBuilder.group({
    eventName: '',
    regionName: '',
    eventDescription: '',
    eventDate: '12-10-2022',
  });
  constructor(
    private formBuilder: FormBuilder,
    private addAdvertService: AddAdvertService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    // Process checkout data here
    console.warn('Your order has been submitted', this.checkoutForm.value);
    let formObj = this.checkoutForm.getRawValue();

    let serializedForm = JSON.stringify(formObj);
    console.log(serializedForm);
    this.addAdvertService.postAdvert(serializedForm);
    this.router.navigate(['ngo-dashboard']);
    this.checkoutForm.reset();
  }
}
