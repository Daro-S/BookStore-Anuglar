import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { VerifyEmailComponent } from './authentication/verify-email/verify-email.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { ViewAllProductComponent } from './product/view-all-product/view-all-product.component';
import { HeaderComponent } from './site-layout/header/header.component';
import { FooterComponent } from './site-layout/footer/footer.component';
import { ViewProductComponent } from './product/view-product/view-product.component';
import { FilterPipe } from './shared/filter.pipe';
import { ViewItemInCartComponent } from './product/view-item-in-cart/view-item-in-cart.component';
import { CheckoutComponent } from './product/checkout/checkout.component';
import { ViewProductLoggedInComponent } from './product/view-product-logged-in/view-product-logged-in.component';
import { AdminDashboardComponent } from './product/admin-dashboard/admin-dashboard.component';
import { AddComponent } from './product/admin-dashboard/add/add.component';
import { EditComponent } from './product/admin-dashboard/edit/edit.component';
import { DeleteComponent } from './product/admin-dashboard/delete/delete.component';

@NgModule({
  declarations: [

    AppComponent,
    LoginComponent,
    RegisterComponent,
    VerifyEmailComponent,
    ForgotPasswordComponent,
    ViewAllProductComponent,
    HeaderComponent,
    FooterComponent,
    ViewProductComponent,
    FilterPipe,
    ViewItemInCartComponent,
    CheckoutComponent,
    ViewProductLoggedInComponent,
    AdminDashboardComponent,
    AddComponent,
    EditComponent,
    DeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebase)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
