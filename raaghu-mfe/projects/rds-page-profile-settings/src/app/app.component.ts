import { Component, OnInit } from '@angular/core';
import { ComponentLoaderOptions } from '@libs/shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'profile-settings';
  navtabsItems: any = [
    {
      label: 'My details',
      tablink: '#my-details',
      ariacontrols: 'my-details',
    },
    {
      label: 'Password',
      tablink: '#password',
      ariacontrols: 'password',
    },
    {
      label: 'Email',
      tablink: '#email',
      ariacontrols: 'email',
    },
    {
      label: 'Billing',
      tablink: '#billing',
      ariacontrols: 'billing',
    },
    {
      label: 'Integrations',
      tablink: '#integrations',
      ariacontrols: 'integations',
    }
  ];
  rdsPersonalInfoConfig: ComponentLoaderOptions = {
    name: 'RdsCompPersonalInfo'
  };
  rdsPasswordSettingsConfig: ComponentLoaderOptions = {
    name: 'RdsCompPasswordSettings'
  };
  rdsEmailSettingsConfig: ComponentLoaderOptions = {
    name: 'RdsCompEmailSettings'
  };
  rdsBillingConfig: ComponentLoaderOptions = {
    name: 'RdsCompBilling'
  };
  rdsIntegrationsConfig: ComponentLoaderOptions = {
    name: 'RdsCompIntegration'
  };
  activePage: number = 0;

  ngOnInit(): void {
  }

  getSelectedNavTab(event: any): void {
    this.activePage = event;
  }
}
