import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddActionComponent } from './add-action/add-action.component';
import { LoginComponent } from './login/login.component';
import { NgoComponent } from './ngo/ngo.component';
import { RegisterComponent } from './register/register.component';
import { SuccessfulComponent } from './successful/successful.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { WelcomeComponent } from './welcome/welcome.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/hello', pathMatch: 'full' },
  { path: 'hello', component: WelcomeComponent },
  { path: 'registration', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'volunteer-dashboard', component: VolunteerComponent },
  { path: 'ngo-dashboard', component: NgoComponent },
  { path: 'registered', component: SuccessfulComponent },
  { path: 'new-ad', component: AddActionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
