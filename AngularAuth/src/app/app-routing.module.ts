import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Okta
import { OktaCallbackComponent } from '@okta/okta-angular';


const routes: Routes = [
  // Okta
  {
    path: 'implicit/callback',
    component: OktaCallbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
