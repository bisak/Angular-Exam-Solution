import { JwtHelper, tokenNotExpired } from 'angular2-jwt';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthHelperService {
  jwtHelper: JwtHelper = new JwtHelper();
  loginAnnouncedSource = new Subject<boolean>();
  loginAnnounced: Observable<any> = this.loginAnnouncedSource.asObservable();

  constructor() {
  }

  storeUserData(data) {
    localStorage.setItem('id_token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
    this.loginAnnouncedSource.next(true);
  }

  isLoggedIn() {
    return !!localStorage.getItem('id_token');
  }

  getAuthHeader() {
    return 'bearer ' + localStorage.getItem('id_token');
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('user');
  }
}
