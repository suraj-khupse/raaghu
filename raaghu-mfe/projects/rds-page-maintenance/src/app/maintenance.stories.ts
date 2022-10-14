import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsBadgeModule, RdsButtonModule, RdsCheckboxModule, RdsFabMenuModule, RdsIconModule, RdsModalModule, RdsNavTabModule, RdsPaginationModule, RdsSelectListModule } from '@libs/rds-elements';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RdsCompCacheComponent } from 'projects/rds-components/src/app/rds-comp-cache/rds-comp-cache.component';
import { RdsCompWebsiteLogComponent } from 'projects/rds-components/src/app/rds-comp-website-log/rds-comp-website-log.component';
import { RdsCompAlertComponent } from 'projects/rds-components/src/app/rds-comp-alert/rds-comp-alert.component';
import { RdsDataTableComponent } from 'projects/rds-components/src/app/rds-comp-data-table/rds-comp-data-table.component';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


export default {
  title: 'Pages/Maintenance',
  component: AppComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        RdsCompCacheComponent,
        RdsCompWebsiteLogComponent,
        RdsCompAlertComponent,
        RdsDataTableComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RdsIconModule,
        RdsNavTabModule,
        RdsSelectListModule,
        RdsCheckboxModule,
        RdsButtonModule,
        RdsPaginationModule,
        RdsModalModule,
        RdsFabMenuModule,
        CommonModule,
        SharedModule,
        RdsBadgeModule,
        NgxTranslateModule.forRoot(),
        StoreModule.forRoot({}),
        BrowserAnimationsModule,

      ],
      providers: [
        FormBuilder
      ]
    })
  ]
} as Meta;
const Template: Story<AppComponent> = (args: AppComponent) => ({
  props: {
    ...args
  },
  template:`
  <div class="row" >
    <div class="col-md-12 text-end pb-3">
      <div class="d-flex justify-content-end" *ngIf="tabcash && cashedata && cashedata.length>0">
        <div class="desktop-btn">
          <rds-button (click)="deletAllcasheConfirmation()" [id]="'yes'" [size]="'small'" [tooltipPlacement]="'top'"
                      [colorVariant]="'primary'" [label]="'CLEAR ALL'">
            <rds-icon left name="delete" width="15px" height="15px"></rds-icon>
          </rds-button>
        </div>
        <div class="mobile-btn position-fixed bottom-0 end-0 my-5 me-5" style="z-index: 1;">
          <!-- <rds-button (click)="deletAllcasheConfirmation()" [id]="'yes'" [size]="'small'" [tooltipPlacement]="'top'"
            [colorVariant]="'primary'" [roundedButton]="true" [label]="''">
            <rds-icon left name="delete" width="22px" height="22px"></rds-icon>
          </rds-button> -->
          <rds-fab-menu [listItems]="listItems1" [menuicon]="'plus'" [colorVariant]="'primary'" [menuiconWidth]="'12px'" [menuiconHeight]="'12px'" (onSelect)="onSelectMenu($event)"></rds-fab-menu>
        </div>
      </div>
      <div class="d-flex justify-content-end" *ngIf="tabweb && websiteLogData && websiteLogData.length > 0 ">
        <div class="desktop-btn">
          <rds-button type="button" [size]="'small'" [colorVariant]="'primary'" [roundedButton]="true"
                      icon="refresh" iconHeight="18px" iconWidth="26px" (click)="refreshData()" class="me-2">
          </rds-button>
          <rds-button [id]="'yes'" [size]="'small'" [tooltipPlacement]="'top'" [colorVariant]="'primary'"
                      (click)="exportToExcel()" [label]="'DOWNLOAD ALL'" [outlineButton]="true">
            <rds-icon left name="download_data" height="12px" width="12px"></rds-icon>
          </rds-button>
        </div>
        <div class="mobile-btn position-fixed bottom-0 end-0 my-5 me-5" style="z-index: 1;">
          <!-- <rds-button type="button" [size]="'small'" [colorVariant]="'primary'" [roundedButton]="true"
            icon="refresh" iconHeight="27px" iconWidth="27px" (click)="refreshData()" class="me-2">
          </rds-button>
          <rds-button [id]="'yes'" [size]="'small'" [tooltipPlacement]="'top'" [roundedButton]="true"
            [colorVariant]="'primary'" (click)="exportToExcel()" [label]="''" [outlineButton]="true">
            <rds-icon left name="download-collected-data" height="12px" width="12px"></rds-icon>
          </rds-button> -->
          <rds-fab-menu [listItems]="listItems2" [menuicon]="'plus'" [colorVariant]="'primary'" [menuiconWidth]="'12px'" [menuiconHeight]="'12px'" (onSelect)="onSelectMenu($event)"></rds-fab-menu>
        </div>
      </div>
    </div>
    <div >
      <div class="col-md-12">
        <div class="card p-2 h-100 border-0 rounded-0 card-full-stretch">
          <rds-nav-tab [navtabsItems]="navtabItems" horizontalAlignment="start" [verticalAlignment]="false"
                       [pills]="false" [tabs]="true" [fill]="false" [justified]="false" [flex]="false"
                       (onClicktab)="getnavtabid($event)">
          </rds-nav-tab>
          <div naveContent class="tab-content p-4" id="headerbar">
            <div class="tab-pane fade active show" id="nav-Caches" role="tabpanel" aria-labelledby="nav-Caches">
              <app-rds-comp-cache [cashedata]="cashedata"></app-rds-comp-cache>
            </div>
            <div class="tab-pane fade" id="nav-websiteLogs" role="tabpanel" aria-labelledby="nav-websiteLogs">
              <app-rds-comp-website-log [websiteLogData]="websiteLogData"></app-rds-comp-website-log>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>

<!--<mfe-loader [config]="rdsAlertMfeConfig"></mfe-loader>-->
<!--<app-rds-maintenance-shimmer *ngIf="isShimmer"></app-rds-maintenance-shimmer>-->




`
});

export const Default = Template.bind({});
Default.args = {
  navtabItems: [
    {
      label: 'Caches',
      tablink: '#nav-Caches',
      ariacontrols: 'nav-Caches',
    },
    {
      label: 'Website Logs',
      tablink: '#nav-websiteLogs',
      ariacontrols: 'nav-websiteLogs',
    }
  ],
  cashedata: [
    { name: "AbpUserSettingsCache" },
    { name: "AbpZeroRolePermissions" },
    { name: "AbpZeroTenantCache" },
    { name: "AbpZeroEditionFeatures" },
    { name: "AbpTenantSettingsCache" },
    { name: "token_validity_key" },
    { name: "AbpZeroMultiTenantLocalizationDictionaryCache" },
    { name: "AspNet.Identity.SecurityStamp" },
    { name: "TempFileCacheName" },
    { name: "AbpApplicationSettingsCache" },
    { name: "AbpZeroUserPermissions" },
    { name: "AbpZeroLanguages" }
  ],
  dataSource: [
    { name: "AbpUserSettingsCache" },
    { name: "AbpZeroRolePermissions" },
    { name: "AbpZeroTenantCache" },
    { name: "AbpZeroEditionFeatures" },
    { name: "AbpTenantSettingsCache" },
    { name: "token_validity_key" },
    { name: "AbpZeroMultiTenantLocalizationDictionaryCache" },
    { name: "AspNet.Identity.SecurityStamp" },
    { name: "TempFileCacheName" },
    { name: "AbpApplicationSettingsCache" },
    { name: "AbpZeroUserPermissions" },
    { name: "AbpZeroLanguages" }
  ],
  websiteLogData: ["INFO  2022-06-20 20:56:34,313 [4    ] Microsoft.AspNetCore.Hosting.Diagnostics - Request starting HTTP/2 GET https://localhost:44301/AbpUserConfiguration/GetAll?d=1655738793955 application/json -",
    "INFO  2022-06-20 20:56:34,313 [4    ] pNetCore.Cors.Infrastructure.CorsService - CORS policy execution successful.",
    "INFO  2022-06-20 20:56:34,346 [39   ] osoft.EntityFrameworkCore.Infrastructure - Entity Framework Core 5.0.10 initialized 'MyTraining105DemoDbContext' using provider 'Microsoft.EntityFrameworkCore.SqlServer' with options: None",
    "INFO  2022-06-20 20:56:34,353 [4    ] osoft.EntityFrameworkCore.Infrastructure - Entity Framework Core 5.0.10 initialized 'MyTraining105DemoDbContext' using provider 'Microsoft.EntityFrameworkCore.SqlServer' with options: None",
    "INFO  2022-06-20 20:56:34,369 [39   ] uthentication.JwtBearer.JwtBearerHandler - Successfully validated the token.",
    "INFO  2022-06-20 20:56:34,383 [39   ] osoft.EntityFrameworkCore.Infrastructure - Entity Framework Core 5.0.10 initialized 'MyTraining105DemoDbContext' using provider 'Microsoft.EntityFrameworkCore.SqlServer' with options: None",
    "INFO  2022-06-20 20:56:34,399 [31   ] ft.AspNetCore.Routing.EndpointMiddleware - Executing endpoint 'MyTraining105Demo.Sessions.SessionAppService.GetCurrentLoginInformations (MyTraining105Demo.Application)'",
    "INFO  2022-06-20 20:56:34,410 [4    ] uthentication.JwtBearer.JwtBearerHandler - Successfully validated the token.",
    "INFO  2022-06-20 20:56:34,410 [4    ] ft.AspNetCore.Routing.EndpointMiddleware - Executing endpoint 'Abp.AspNetCore.Mvc.Controllers.AbpUserConfigurationController.GetAll (Abp.AspNetCore)'",
    "INFO  2022-06-20 20:56:34,411 [31   ] c.Infrastructure.ControllerActionInvoker - Route matched with {area = \"app\", action = \"GetCurrentLoginInformations\", controller = \"Session\"}. Executing controller action with signature System.Threading.Tasks.Task`1[MyTraining105Demo.Sessions.Dto.GetCurrentLoginInformationsOutput] GetCurrentLoginInformations() on controller MyTraining105Demo.Sessions.SessionAppService (MyTraining105Demo.Application).",
    "INFO  2022-06-20 20:56:34,414 [4    ] c.Infrastructure.ControllerActionInvoker - Route matched with {action = \"GetAll\", controller = \"AbpUserConfiguration\", area = \"\"}. Executing controller action with signature System.Threading.Tasks.Task`1[Microsoft.AspNetCore.Mvc.JsonResult] GetAll() on controller Abp.AspNetCore.Mvc.Controllers.AbpUserConfigurationController (Abp.AspNetCore).",
    "INFO  2022-06-20 20:56:34,419 [31   ] osoft.EntityFrameworkCore.Infrastructure - Entity Framework Core 5.0.10 initialized 'MyTraining105DemoDbContext' using provider 'Microsoft.EntityFrameworkCore.SqlServer' with options: None",
    "INFO  2022-06-20 20:56:34,419 [4    ] osoft.EntityFrameworkCore.Infrastructure - Entity Framework Core 5.0.10 initialized 'MyTraining105DemoDbContext' using provider 'Microsoft.EntityFrameworkCore.SqlServer' with options: None",
  ],
  role: 'Advanced',
  alignmentType: "end",
  resetPagination: false,
  recordsPerPage: 10,
  tabcash: false
}
