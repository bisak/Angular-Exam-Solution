import { Component, OnInit } from '@angular/core';
import { MaterializeDirective, MaterializeModule } from 'angular2-materialize';

import { AuthHelperService } from '../../services/auth-helper.service';
import { AuthService } from '../../services/auth.service';
import { Form } from '@angular/forms';
import { OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ToastService } from '../../services/toast.service';
import { ValidateService } from '../../services/validate.service';
import { isUndefined } from 'util';
import { templateVisitAll } from '@angular/compiler';

declare var Materialize: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string;
  username: string;
  password: string;
  passwordConfirm: string;

  constructor(private authService: AuthService,
              private authHelperService: AuthHelperService,
              private router: Router,
              private toastService: ToastService,
              private validateService: ValidateService) {
  }


  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      name: this.username,
      email: this.email,
      password: this.password,
      passwordConfirm: this.passwordConfirm
    };
    const registerInputValidator = this.validateService.validateRegisterInput(user);
    if (!registerInputValidator.isValid) {
      return this.toastService.toast(registerInputValidator.msg);
    }


    this.authService.registerUser(user).then((data) => {
      if (data.success) {
        this.toastService.toast('Registered.');
        this.router.navigate(['/login']);
      } else {
        this.toastService.errorToast(data.message);
      }
      console.log(data);
    }).catch((err) => {
      console.log(err);
      const parsedError = JSON.parse(err._body);
      this.toastService.errorToast(parsedError.msg);
    });
  }

}
