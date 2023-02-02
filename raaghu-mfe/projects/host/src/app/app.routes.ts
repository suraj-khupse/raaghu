import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { AuthGuard } from 'projects/libs/shared/src/lib/auth.guard';
import { MfeConfig } from 'projects/mfe-config';
import { HomeComponent } from './home/home.component';
import { MultipleMfeComponent } from './multiple-mfe/multiple-mfe.component';
import { SidenavComponent } from './sidenav/sidenav.component';
export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },

  {
    path: 'login',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: MfeConfig.login.url,
        exposedModule: './AppModule',  
      }).then((m) => m.AppModule),
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: MfeConfig.forgotpassword.url,
        exposedModule: './AppModule',
      }).then((m) => m.AppModule),

  },


  {
    path: 'pages',
    component: SidenavComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.dashboard.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.dashboard.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
          data: { permission: 'BookStore.Dashboard.Host' },

      },
      {
        path: 'language',
        // canActivate:[AuthGuard],
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.language.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
        data: { permission: 'LanguageManagement.Languages' },
      },
      {
        path: 'role',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.role.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
        data: { permission: 'AbpIdentity.Roles' },
      },
      {
        path: 'user',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.user.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
        data: { permission: 'AbpIdentity.Users' }
      },
      {
        path: 'audit-logs',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.auditlogs.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
        data: { permission: 'AuditLogging.AuditLogs' },
      }, 
      {
        path: 'organization-unit',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.organizationunit.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
        data: { permission: 'AbpIdentity.OrganizationUnits' },
      },
      {
        path: 'dynamic-property-management',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.dynamicpropertymanagement.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
        data: { permission: 'Pages.Administration.DynamicEntityProperties' },
      },
      {
        path: 'subscription',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.subscription.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
        data: { permission: 'Pages.Administration.Tenant.SubscriptionManagement' },
      },
      {
        path: 'maintenance',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.maintenance.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
        data: { permission: 'Pages.Administration.Host.Maintenance' },
      },
      {
        path: 'webhooksubscription',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.webhooksubscription.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
        data: { permission: 'Pages.Administration.WebhookSubscription' },
      },
      {
        path: 'demo-ui',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.demouicomponents.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
        data: { permission: 'Pages.DemoUiComponents' },
      },
      {
        path: 'claim-types',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.claimtypes.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
          data: { permission: 'AbpIdentity.ClaimTypes' },
      },
      {
        path: 'settings',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.settings.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
          data: { permission: 'AbpIdentity.SettingManagement' },
      },
         // {
      //   path: 'cart',
      //   loadChildren: () =>
      //     loadRemoteModule({
      //       type: 'module',
      //       remoteEntry: MfeConfig.cart.url,
      //       exposedModule: './AppModule',
      //     }).then((m) => m.AppModule),
      //   data: { permission: 'Pages.DemoUiComponents' },

      // },
      {
        path: 'tenant',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.tenant.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
        data: { permission: 'Saas.Tenants' },

      },
      {
        path: 'securitylog',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.securitylog.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
          data: { permission: 'AbpIdentity.SecurityLogs' },
      },
      {
        path: 'edition',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.edition.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
        data: { permission: 'Saas.Editions' },
      },
      {
        path: 'store-front',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.storefront.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
        data: { permission: 'Pages.Editions', animation: 'edition' },
      },
      {
        path: 'profile-settings',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.profilesettings.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
        data: { permission: 'Pages.Editions', animation: 'edition' },
      },
      {
        path: 'client',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.client.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
          data: { permission: 'IdentityServer.Client' },
      },
      {
        path: 'identityResources',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.identiyresources.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
          data: { permission: 'IdentityServer.IdentityResource' },
      },
      {
        path: 'apiresources',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.apiresources.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
          data: { permission: 'IdentityServer.ApiResource' },
      },
      {
        path: 'apiScope',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.apiscope.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
          data: { permission: 'IdentityServer.ApiScope' },
      },
      // {
      //   path: 'cart',
      //   loadChildren: () =>
      //     loadRemoteModule({
      //       type: 'module',
      //       remoteEntry: MfeConfig.cart.url,
      //       exposedModule: './AppModule',
      //     }).then((m) => m.AppModule),
      //   data: { permission: 'Pages.DemoUiComponents' },

      // },
        {
        path: 'products-details',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.productdetails.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
        data: { permission: 'Pages.DemoUiComponents' },
      
      },
      {
        path: 'text-template',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.texttemplate.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
          data: { permission: 'TextTemplateManagement.TextTemplates' },
      },
      {
        path: 'memberactivity',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.memberactivity.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
      },
      {
        path: 'monthlysummary',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.monthlysummary.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
      },
      {
        path: 'languagetext',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.languagetext.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
        data: { permission: 'LanguageManagement.LanguageTexts' },
      },
      {
        path: 'pagenotfound',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.pagenotfound.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
        data: { permission: '' },
      },

      {
        path: 'visualsettings',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.visualsettings.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),

      },
      // {
      //   path: 'editionnew',
      //   loadChildren: () =>
      //     loadRemoteModule({
      //       type: 'module',
      //       remoteEntry: MfeConfig.editionnew.url,
      //       exposedModule: './AppModule',
      //     }).then((m) => m.AppModule),

      // },
     
      // {
      //  path: 'orderdetails',
      //  loadChildren: () =>
      //    loadRemoteModule({
      //      type: 'module',
      //      remoteEntry: MfeConfig.orderdetails.url,
      //      exposedModule: './AppModule',
      //    }).then((m) => m.AppModule),
      //  data: { permission: '' },
      // },

      //{
      //  path: 'careers',
      //  loadChildren: () =>
      //    loadRemoteModule({
      //      type: 'module',
      //      remoteEntry: MfeConfig.careers.url,
      //      exposedModule: './AppModule',
      //    }).then((m) => m.AppModule),

      //},
      {
        path: '**',
        redirectTo: 'pagenotfound',

      }
    ]
  },
  {
    path: 'component-mfe',
    component: MultipleMfeComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      }
    ]
  },
  {
    path: 'pagenotfound',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: MfeConfig.pagenotfound.url,
        exposedModule: './AppModule',
      }).then((m) => m.AppModule),
    data: { permission: '' },
  },
  {
    path: '**',
    redirectTo: 'pagenotfound',
  }
];
