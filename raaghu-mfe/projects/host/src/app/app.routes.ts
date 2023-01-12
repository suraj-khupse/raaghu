import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { AuthGuard } from 'projects/libs/shared/src/lib/auth.guard';
import { MfeConfig } from 'projects/mfe-config';
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
        data: { permission: 'Pages.Administration' },

      },
      {
        path: 'language',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.language.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
        data: { permission: 'Pages.Administration.Languages' },
      },
      {
        path: 'role',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.role.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
        data: { permission: 'Pages.Administration.Roles' },
      },
      {
        path: 'user',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.user.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
        data: { permission: 'Pages.Administration.Users' }
      },
      {
        path: 'audit-logs',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.auditlogs.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
        data: { permission: 'Pages.Administration.AuditLogs' },
      },
      {
        path: 'organization-unit',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.organizationunit.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
        data: { permission: 'Pages.Administration.OrganizationUnits' },
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
        path: 'settings',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.settings.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
          data:{permission: 'Pages.Settings'}
      },
      {
        path: 'icons',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.icons.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
        data: { permission: 'Pages.Tenants' },
      },
      {
        path: 'tenant',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.tenant.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
        data: { permission: 'Pages.Tenants' },

      },
      {
        path: 'Security-logs',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.Securitylog.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
      },
      {
        path: 'edition',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.edition.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
        data: { permission: 'Pages.Editions' },
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
      },            
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
        data: { permission: 'Pages.Administration.Languages.ChangeTexts' },
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
      {
        path: 'maintenance',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.maintenance.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
      },
      {
        path: '**',
        redirectTo: 'pagenotfound',

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
