import { Component, Input, OnInit } from '@angular/core';
import { Advert } from '../models/advert.model';

@Component({
  selector: 'app-ad-details',
  templateUrl: './ad-details.component.html',
  styleUrls: ['./ad-details.component.css'],
})
export class AdDetailsComponent implements OnInit {
  @Input() ad: Advert;
  isDisabled: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  onClick() {
    this.isDisabled = true;
  }
}
