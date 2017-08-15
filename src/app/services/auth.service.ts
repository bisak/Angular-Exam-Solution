import { Injectable } from '@angular/core';
import { ApiService } from "./api.service";

@Injectable()
export class AuthService {

  constructor(private apiService: ApiService) {
  }

  registerUser(user): Promise<any> {
    return this.apiService.post(`/auth/signup`, user);
  }

  loginUser(user): Promise<any> {
    return this.apiService.post(`/auth/login`, user);
  }
}
