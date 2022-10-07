import { DeleteComponent } from './product/admin-dashboard/delete/delete.component';
import { EditComponent } from './product/admin-dashboard/edit/edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { VerifyEmailComponent } from './authentication/verify-email/verify-email.component';
import { AddComponent } from './product/admin-dashboard/add/add.component';
import { AdminDashboardComponent } from './product/admin-dashboard/admin-dashboard.component';
import { ViewAllProductComponent } from './product/view-all-product/view-all-product.component';
import { ViewItemInCartComponent } from './product/view-item-in-cart/view-item-in-cart.component';
import { ViewProductLoggedInComponent } from './product/view-product-logged-in/view-product-logged-in.component';
import { ViewProductComponent } from './product/view-product/view-product.component';

const routes: Routes = [
  { path: '', redirectTo: 'view-all-product', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'verify-email', component: VerifyEmailComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'view-all-product', component: ViewAllProductComponent },
  { path: 'view-product/:id', component: ViewProductComponent },
  {
    path: 'view-all-product/view-product/:id',
    component: ViewProductComponent,
  },
  { path: 'view-all-product/login', component: LoginComponent },
  { path: 'view-product/:id/login', component: LoginComponent },
  {
    path: 'view-all-product/view-product/:id/login',
    component: LoginComponent,
  },
  {
    path: 'view-all-product/view-product/:id/cart',
    component: ViewItemInCartComponent,
  },
  { path: 'view-all-product/cart', component: ViewItemInCartComponent },
  { path: 'view-product-logged-in', component: ViewProductLoggedInComponent },
  { path: 'view-product-logged-in/cart', component: ViewItemInCartComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'add', component: AddComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'delete/:id', component: DeleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
