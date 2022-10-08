import { Component, Input, OnInit } from '@angular/core';
import { Advert } from '../models/advert.model';
import { AdvertService } from '../services/adverts.service';

@Component({
  selector: 'app-ad-item',
  templateUrl: './ad-item.component.html',
  styleUrls: ['./ad-item.component.css'],
})
export class AdItemComponent implements OnInit {
  @Input() ad: Advert;
  constructor(private advertService: AdvertService) {}

  ngOnInit(): void {}
  onSelected() {
    this.advertService.adSelected.emit(this.ad);
  }
}
