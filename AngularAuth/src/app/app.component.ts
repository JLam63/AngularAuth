import { Component, OnInit } from '@angular/core';
// Angular 
import { OAuthService, JwksValidationHandler, AuthConfig } from 'angular-oauth2-oidc';
// Okta
import { OktaAuthService, UserClaims } from '@okta/okta-angular';

// Angular
export const authConfig: AuthConfig = {
  issuer: 'https://dev-267597.okta.com/oauth2/default',
  redirectUri: window.location.origin,
  clientId: '0oah11imdWCg6FhyS356'
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'AngularAuth';

  constructor(private oauthService: OAuthService) {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  login() {
    this.oauthService.initImplicitFlow();
  }

  logout() {
    this.oauthService.logOut();
  }

  get givenName() {
    const claims = this.oauthService.getIdentityClaims();
    if (!claims) {
      return null;
    }
    return claims['name'];
  }

// Okta
// export class AppComponent implements OnInit {
//   title = 'AngularAuth';
//   isAuthenticated: boolean;
//   email: string;
//   user;

//   constructor(public oktaAuth: OktaAuthService) {
//   }

//   async ngOnInit() {
//     this.isAuthenticated = await this.oktaAuth.isAuthenticated();
//     this.user = await this.oktaAuth.getUser();
//     // Subscribe to authentication state changes
//     this.oktaAuth.$authenticationState.subscribe( async(isAuthenticated: boolean)  => {
//       this.isAuthenticated = isAuthenticated;
//       this.user = await this.oktaAuth.getUser();
//     });
//   }
}


