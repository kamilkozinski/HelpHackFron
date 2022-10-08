import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdDetailsNgoComponent } from './ad-details-ngo.component';

describe('AdDetailsNgoComponent', () => {
  let component: AdDetailsNgoComponent;
  let fixture: ComponentFixture<AdDetailsNgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdDetailsNgoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdDetailsNgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
