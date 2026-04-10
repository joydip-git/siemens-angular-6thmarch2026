import { Component, inject, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { Subscription } from 'rxjs';
import { TokenService } from '../../../shared/services/token-service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnDestroy {

  private authSvc = inject(AuthService)
  private tokenSvc = inject(TokenService)
  private router = inject(Router)
  private currentRoute = inject(ActivatedRoute)

  private authSub?: Subscription;

  loginForm = new FormGroup({
    username: new FormControl('enter username'),
    password: new FormControl('enter password here')
  })


  ngOnDestroy(): void {
    this.authSub?.unsubscribe()
  }

  //login(e: Event)
  login() {
    //he preventDefault() method of the Event interface tells the user agent that the event is being explicitly handled, so its default action, such as page scrolling, link navigation, or pasting text, should not be taken.
    //e.preventDefault()
    if (confirm('login?')) {
      const user = this.loginForm.value as User
      this.authSub = this.authSvc
        .loginUser(user)
        .subscribe({
          next: (apiResponse) => {
            if (apiResponse.data !== null) {
              this.tokenSvc.saveToken(apiResponse.data)
            } else {
              alert(apiResponse.message)
            }
          },
          error: (err: any) => {
            alert(err.message)
          },
          complete: () => {
            const returnUrl = this.currentRoute.snapshot.queryParams["returnUrl"]
            if (returnUrl) {
              this.router.navigate([returnUrl])
            } else
              this.router.navigate(['/products'])
          }
        })
    }
  }
}
