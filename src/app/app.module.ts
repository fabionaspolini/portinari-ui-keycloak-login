import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { CadUsuarioComponent } from './pages/usuarios/cad-usuario/cad-usuario.component';
import { HomeComponent } from './pages/home/home.component';

import { HttpClientModule } from '@angular/common/http'; // angular-auth-oidc-client import
import { APP_INITIALIZER } from '@angular/core'; // angular-auth-oidc-client import
import {
  AuthModule,
  LogLevel,
  OidcConfigService,
} from 'angular-auth-oidc-client'; // angular-auth-oidc-client import

// angular-auth-oidc-client
export function configureAuth(oidcConfigService: OidcConfigService) {
  return () =>
    oidcConfigService.withConfig({
      // Keycloak Realm URL. Usado para obter configuração do serviço.
      // Library faz get em http://localhost:8080/auth/realms/master/.well-known/openid-configuration
      stsServer: 'http://localhost:8080/auth/realms/master',
      redirectUrl: window.location.origin,
      postLogoutRedirectUri: window.location.origin,
      clientId: 'portinari-ui-sample',
      scope: 'openid profile email',
      responseType: 'code',
      silentRenew: true,
      silentRenewUrl: `${window.location.origin}/silent-renew.html`,
      logLevel: LogLevel.Debug,
    });
}

@NgModule({
  declarations: [AppComponent, CadUsuarioComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    RouterModule.forRoot([]),
    AuthModule.forRoot(), // oidc
  ],
  providers: [
    OidcConfigService, // oidc
    {
      provide: APP_INITIALIZER,
      useFactory: configureAuth,
      deps: [OidcConfigService],
      multi: true,
    }, // oidc
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
