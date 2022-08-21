import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { VerifyEmailComponent } from './authentication/verify-email/verify-email.component';
import { ViewAllProductComponent } from './product/view-all-product/view-all-product.component';
import { ViewProductComponent } from './product/view-product/view-product.component';
const routes: Routes = [
  {path: '', redirectTo: 'view-all-product', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'verify-email', component: VerifyEmailComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'view-all-product', component: ViewAllProductComponent},
  {path: 'view-product/:id', component: ViewProductComponent},
  {path: 'view-all-product/view-product/:id', component: ViewProductComponent},
  {path: 'view-all-product/login', component: LoginComponent},
  {path: 'view-product/:id/login', component: LoginComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
