import { Component, Input, OnInit } from '@angular/core';
import { Advert } from '../models/advert.model';

@Component({
  selector: 'app-ad-details-ngo',
  templateUrl: './ad-details-ngo.component.html',
  styleUrls: ['./ad-details-ngo.component.css'],
})
export class AdDetailsNgoComponent implements OnInit {
  @Input() ad: Advert;
  constructor() {}

  ngOnInit(): void {}
}
