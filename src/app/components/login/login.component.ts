import { Component, OnDestroy, OnInit } from '@angular/core';

import { AuthHelperService } from '../../services/auth-helper.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;
  subscriptions: Subscription[] = [];

  constructor(private authHelperService: AuthHelperService,
              private authService: AuthService,
              private router: Router,
              private toastService: ToastService) {
  }

  ngOnInit() {
  }

  onLoginSubmit() {
    const user = {
      email: this.username,
      password: this.password
    };

    if (!user.email || !user.password) {
      return this.toastService.toast('Please fill in both fields.');
    }

    this.authService.loginUser(user).then((response) => {
      console.log(response);
      if (response.success) {
        this.authHelperService.storeUserData(response);
        this.toastService.toast('Logged in.');
        this.router.navigate(['/']);
      } else {
        this.toastService.errorToast(response.message);
      }
    }, (err) => {
      console.log(err);
      this.toastService.errorToast(err.parsedBody.msg);
    });
  }
}
