import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
// import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    // path: '',
    // pathMatch: 'full',
    // canActivate: [AuthGuard],
    // component: AppComponent,
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
