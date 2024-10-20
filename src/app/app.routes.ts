import { Routes } from '@angular/router';
import { AuthGuard } from "@angular/fire/auth-guard";

export const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'address-list', component: AddressListComponent, canActivate: [AuthGuard] },
  { path: 'password-forgot', component: PasswordForgotComponent }
];
