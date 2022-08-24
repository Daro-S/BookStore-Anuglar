import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../checkout-service/checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  paymentHandler: any = null;

  success: boolean = false

  failure:boolean = false

  constructor(private checkout: CheckoutService) {}

  ngOnInit() {
    this.invokeStripe();
  }

  makePayment(amount: number) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51LZtGiC7AiAlPiMpQUyvsUD9659yZoELDdQkI7BJObR2RZxD7pgJjriJCV3q5aJsgm1t1Bx9Wx8VKajcJ5GMg5Bv0006sKGA0o',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);
        paymentstripe(stripeToken);
      },
    });

    const paymentstripe = (stripeToken: any) => {
      this.checkout.makePayment(stripeToken).subscribe((data: any) => {
        console.log(data);
        if (data.data === "success") {
          this.success = true
        }
        else {
          this.failure = true
        }
      });
    };

    paymentHandler.open({
      name: 'Coding Shiksha',
      description: 'This is a sample pdf file',
      amount: amount * 100,
    });
  }

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51LZtGiC7AiAlPiMpQUyvsUD9659yZoELDdQkI7BJObR2RZxD7pgJjriJCV3q5aJsgm1t1Bx9Wx8VKajcJ5GMg5Bv0006sKGA0o',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
          },
        });
      };

      window.document.body.appendChild(script);
    }
  }

}
