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
      label: 'Cadastro de Usuários',
      link: '/usuario',
      icon: 'po-icon-users',
      shortLabel: 'Usuários',
    },
    {
      label: 'Sair',
      action: this.logout.bind(this),
      icon: 'po-icon-exit',
      shortLabel: 'Sair',
    },
  ];

  constructor(public oidcSecurityService: OidcSecurityService) {}

  private onClick() {
    alert('Clicked in menu item');
  }

  ngOnInit() {
    this.oidcSecurityService.checkAuth().subscribe((auth) => {
      console.log('is authenticated', auth);
      if (!auth) {
        this.login();
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
