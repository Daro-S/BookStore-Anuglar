import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Route, Router } from '@angular/router';
import { GoogleAuthProvider, FacebookAuthProvider } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private fireauth: AngularFireAuth,
    private router: Router,
  ) { }
  login(email: string, password : string){
    this.fireauth.signInWithEmailAndPassword(email, password).then( res => {
      localStorage.setItem('token', 'true');

      if(res.user?.emailVerified == true){
        this.router.navigate(['/view-product-logged-in']);
      }else{
        this.router.navigate(['/verify-email']);
      }
    }, err => {
      alert(err.message);
      this.router.navigate(['/login']); // if error we navigate it to the login
    } )
  }
  // register mehtod
  register(email: string, password : string){
    this.fireauth.createUserWithEmailAndPassword(email, password).then( res => {
      alert('Registered Successfully');
      this.router.navigate(['/login']);
      this.sendEmailForVerification(res.user);
    }, err => {
      alert(err.message);
      this.router.navigate(['/register']); // if error we navigate it to the login
    } )
  }

  // sign out method
  logout(){
    this.fireauth.signOut().then( () => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    },
    err => {
      alert(err.message);
    }
     )
  }

  forgotPassword(email: string){
    this.fireauth.sendPasswordResetEmail(email).then( () => {
      alert('Password Reset Link Sent to Your Email');
      this.router.navigate(['/verify-email']);
    }, err => {
      alert(err.message);
    } )
  }

  //email varification
  sendEmailForVerification(user: any){
    user.sendEmailVerification().then( (res: any) => {
      this.router.navigate(['/verify-email']);
    }, (err: any) => {
      alert(err.message);
    } )
  }

  //sign in with google
  googleSignIn(){
    return this.fireauth.signInWithPopup(new GoogleAuthProvider).then( res =>{
      this.router.navigate(['/view-product-logged-in']);
      localStorage.setItem('Item', JSON.stringify(res.user?.uid));
      console.log(res.user?.displayName);

    },
    err => {
      alert(err.message);
    })
  }
  googleSignUp(){
    return this.fireauth.signInWithPopup(new GoogleAuthProvider).then( res =>{
      this.router.navigate(['/view-product-logged-in']);
      localStorage.setItem('Item', JSON.stringify(res.user?.uid));

    },
    err => {
      alert(err.message);
    })
  }
  isLoggedIn(){
    return this.fireauth.authState;
  }
  logOut(){
    this.fireauth.signOut();
    this.router.navigate(['/view-all-product']);
  }


}
