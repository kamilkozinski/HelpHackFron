import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Advert } from '../models/advert.model';
import { AdvertService } from '../services/adverts.service';
import { LocalStorageService } from '../services/localStorage.service';

@Component({
  selector: 'app-ngo',
  templateUrl: './ngo.component.html',
  styleUrls: ['./ngo.component.css'],
})
export class NgoComponent implements OnInit {
  selectedAd: Advert;
  token;
  constructor(
    public advertService: AdvertService,
    private router: Router,
    private storage: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.token = this.storage.getItem('JWT');
    console.log(this.token);
    console.log('TEST');
    this.advertService.adSelected.subscribe(
      (ad: Advert) => (this.selectedAd = ad)
    );
  }
  routeToModal(): void {
    this.router.navigate(['new-ad']);
  }
}
