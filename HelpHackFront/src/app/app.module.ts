import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { NgoComponent } from './ngo/ngo.component';
import { AdListComponent } from './ad-list/ad-list.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegistrationService } from './services/registration.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './services/login.service';
import { AdDetailsComponent } from './ad-details/ad-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoModalServiceStaticComponent } from './modals/registetered.modal';
import { AdItemComponent } from './ad-item/ad-item.component';
import { AdvertService } from './services/adverts.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSelectModule } from '@angular/material/select';
import { SuccessfulComponent } from './successful/successful.component';
import { NgoListComponent } from './ngo-list/ngo-list.component';
import { AdDetailsNgoComponent } from './ad-details-ngo/ad-details-ngo.component';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    RegisterComponent,
    LoginComponent,
    VolunteerComponent,
    NgoComponent,
    AdListComponent,
    HeaderComponent,
    FooterComponent,
    AdDetailsComponent,
    AdItemComponent,
    SuccessfulComponent,
    NgoListComponent,
    AdDetailsNgoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    MatSelectModule,
  ],
  providers: [RegistrationService, LoginService, AdvertService],
  bootstrap: [AppComponent],
})
export class AppModule {}
