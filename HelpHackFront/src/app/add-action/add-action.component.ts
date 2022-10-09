import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
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
    eventDate: 'USER',
    createdDate: 'EAST',
  });
  constructor(
    private formBuilder: FormBuilder,
    private addAdvertService: AddAdvertService
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    // Process checkout data here
    console.warn('Your order has been submitted', this.checkoutForm.value);
    let formObj = this.checkoutForm.getRawValue(); // {name: '', description: ''}

    let serializedForm = JSON.stringify(formObj);
    console.log(serializedForm);
    this.addAdvertService.postAdvert(serializedForm);
    this.checkoutForm.reset();
  }
}
