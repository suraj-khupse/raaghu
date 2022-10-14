import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WebhooksubscriptionComponent } from './webhooksubscription/webhooksubscription.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AppComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
