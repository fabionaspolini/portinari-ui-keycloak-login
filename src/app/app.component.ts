import { Component } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';

import { OnDestroy, OnInit } from '@angular/core'; // angular-auth-oidc-client import
import { OidcSecurityService } from 'angular-auth-oidc-client'; // angular-auth-oidc-client import
import { Observable } from 'rxjs'; // angular-auth-oidc-client import

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  readonly menus: Array<PoMenuItem> = [
    // { label: 'Início', action: this.onClick.bind(this), icon: 'po-icon-home', shortLabel: 'Início' },
    {
      label: 'Início',
      link: '/home',
      icon: 'po-icon-home',
      shortLabel: 'Início',
    },
    {
      label: 'Infomações do usuário',
      link: '/usuario',
      icon: 'po-icon-users',
      shortLabel: 'User Info',
    },
    {
      label: 'Sair',
      action: this.logout.bind(this),
      icon: 'po-icon-exit',
      shortLabel: 'Sair',
    },
  ];
  userData: any;

  constructor(public oidcSecurityService: OidcSecurityService) {}

  private onClick() {
    alert('Clicked in menu item');
  }

  ngOnInit() {
    this.oidcSecurityService.checkAuth().subscribe(auth => {
      if (!auth) {
        this.login();
      } else {
        this.oidcSecurityService.userData$.subscribe(userData => {
          this.userData = userData;
        });
      }
    });
  }

  login() {
    this.oidcSecurityService.authorize();
  }

  logout() {
    this.oidcSecurityService.logoff();
  }
}
