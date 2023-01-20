import { Component, Input, OnInit,  } from '@angular/core';
import { ComponentLoaderOptions } from '@libs/shared';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Input() istenant:boolean=false;
  @Input() tenancy: string = 'Host Admin';

  // rdsAdminDashboardMfeConfig: ComponentLoaderOptions = {
  //   name: 'RdsAdminDashboard',
  // };
  rdsTenantDashboardMfeConfig: ComponentLoaderOptions = {
    name: 'RdsCompTenantDashboard',
  };

  constructor() { }

  ngOnInit(): void {
    const tenancy: any = JSON.parse(localStorage.getItem('tenantInfo'));
    if (tenancy) {
      this.tenancy = tenancy.name;
    } else {
      this.tenancy = 'Host Admin';
    }
  }

}
