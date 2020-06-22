import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionInfoService {
  userData: any;
  token: string;

  constructor(public oidcSecurityService: OidcSecurityService) {
    this.token = this.oidcSecurityService.getToken();
    this.oidcSecurityService.userData$.subscribe(userData => {
      this.userData = userData;
    });
  }

  getToken(): string {
    return this.token;
  }

  getUserData(): any {
    return this.userData;
  }
}
