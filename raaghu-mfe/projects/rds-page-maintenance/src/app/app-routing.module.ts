import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

 const routes: Routes = [
   {
     path: '',
     pathMatch: 'full',
     component: AppComponent,
   },
 ];
//const routes: Routes = [
//  {
//    path: '',
//  //  redirectTo: 'maintenance'
//  },
//  //{
//  //  path: 'maintenance',
//  //  component: MaintenanceComponent,
   
//  //},
// ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
