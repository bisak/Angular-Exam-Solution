import { Component, OnInit } from '@angular/core';

import { AuthHelperService } from '../../services/auth-helper.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username: string;
  profilePicUrl: string;
  fullName: string;
  routerLinkOpts: object = { exact: true };
  userId: string;

  constructor(public authHelperService: AuthHelperService,
              private router: Router,
              private toastService: ToastService) {
  }

  ngOnInit() {
  }

  onLogoutClick() {
    this.authHelperService.logout();
    this.toastService.toast('Logged out.');
    this.router.navigate(['/']);
    return false;
  }

}
