import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { signInAComponent } from './signIn-Authority/signInA.component'
import { signInIComponent } from './signIn-Individual/signInI.component'
import { signUpAComponent } from './signUp-Authority/signUpA.component'
import { signUpIComponent } from './signUp-Individual/signUpI.component'
import { profileAComponent } from './profile-Authority/profileA.component'
import { profileIComponent } from './profile-Individual/profileI.component'
import { EditAComponent } from './Edit-profile-Authority/EditA.component'
import { EditIComponent } from './Edit-Profile-Individual/EditI.component'
import { WelcomeAComponent } from './welcomeA/welcomeA.component'
import { ThankComponent } from './thankDonation/thank.component'
import { DonationComponent } from './donation/donation.component'
import { AcceptionListComponent } from './acception-list/aList.component'
import { DonationListComponent } from './donation-list/dList.component'

const routes: Routes = [
  { path: '' ,redirectTo: 'home' , pathMatch: 'full' },
  { path: 'home', component:HomeComponent},
  { path: 'signInA', component:signInAComponent},
  { path: 'signInI', component:signInIComponent},
  { path: 'signUpA', component:signUpAComponent},
  { path: 'signUpI', component:signUpIComponent},
  { path: 'profileA', component:profileAComponent},
  { path: 'profileI', component:profileIComponent},
  { path: 'EditA', component:EditAComponent},
  { path: 'EditI', component:EditIComponent},
  { path: 'welcomeA', component:WelcomeAComponent},
  { path: 'thank', component:ThankComponent},
  { path: 'donation', component:DonationComponent},
  { path: 'acceptList', component:AcceptionListComponent},
  { path: 'donateList', component:DonationListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
