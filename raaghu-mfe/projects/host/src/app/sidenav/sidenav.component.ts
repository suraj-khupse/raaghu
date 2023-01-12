import { Component, Inject, Injector, Input, OnInit, SimpleChanges } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ComponentLoaderOptions, MfeBaseComponent, ServiceProxy, SharedService, UserAuthService } from '@libs/shared';
import { Store } from '@ngrx/store';
// import { changePassword, getLanguages, getProfile, selectAllLanguages, selectDefaultLanguage, selectProfileInfo, setDefaultLanguageForUI } from '@libs/state-management';
// import { deleteDelegations, getDelegations, getUsername, saveDelegations } from 'projects/libs/state-management/src/lib/state/authority-delegations/authority-delegations.action';
// import { selectDelegationsInfo, selectUserFilter } from 'projects/libs/state-management/src/lib/state/authority-delegations/authority-delegations.selector';
// import { selectAllLoginAttempts } from 'projects/libs/state-management/src/lib/state/login-attempts/login-attempts.selector';
import { DateTime } from 'luxon';
// import { getLoginAttempts } from 'projects/libs/state-management/src/lib/state/login-attempts/login-attempts.actions';
// import { deleteAccount, getMLATenancyData, getNotificationSettings, getUserNotification, linkToUser, SetAllNotificationsAsRead, SetNotificationRead, updateNotificationSettings } from 'projects/libs/state-management/src/lib/state/mla/mla.actions';
// import { selectAllNotification, selectNotificationSettings, selectTenancyData } from 'projects/libs/state-management/src/lib/state/mla/mla.selector';
import { AlertService } from 'projects/libs/shared/src/lib/alert.service';
import { TranslateService } from '@ngx-translate/core';
import { ThemesService } from 'projects/libs/themes/src/public-api';
import { PrepareCollectedData } from 'projects/libs/state-management/src/lib/state/DownloadData/download-data.action';
import { DOCUMENT } from '@angular/common';
import { slideInAnimation } from '../animation';
import { RouterOutlet } from '@angular/router';
import * as moment from 'moment';
import { getLanguages } from 'projects/libs/state-management/src/lib/state/language/language.actions';
import { selectAllLanguages } from 'projects/libs/state-management/src/lib/state/language/language.selector';
import { TableHeader } from 'projects/rds-components/src/models/table-header.model';
import { getSecuritylogs } from 'projects/libs/state-management/src/lib/state/security-logs/security-logs.actions';
import { selectSecurityLogs } from 'projects/libs/state-management/src/lib/state/security-logs/security-logs.selector';
import { getLinkUserData, getPersonalData, getProfileSettings, getTwoFactor, saveChangedPassWord, saveProfile, saveProfilePicture, saveTwoFactor } from 'projects/libs/state-management/src/lib/state/profile-settings/profile-settings.actions';
import { selectAllProfileSettings, selectlinkUser, selectPersonalData, selectTwoFactor } from 'projects/libs/state-management/src/lib/state/profile-settings/profile-settings.selectors';
declare var bootstrap: any;
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    slideInAnimation
  ],
})
export class SidenavComponent extends MfeBaseComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  toggleSideNav: boolean = false;
  currentAlerts: any = [];
  selectedLanguage: any = { language: '', icon: '' };
  public rdsAlertMfeConfig: ComponentLoaderOptions = {
    name: 'RdsCompAlert',
    input: {
      currentAlerts: this.currentAlerts
    },
    output: {
      onAlertHide: (event: any) => {
        this.currentAlerts = event;
      }
    }
  }
  severity = [
    'info',
    'error',
    'success',
    'warn',
    'fatal'
  ]
  LoginAttempts: any = {
    TableHeader: [
      { displayName: 'IP Address', key: 'clientIpAddress', dataType: 'text', dataLength: 30, required: true },
      { displayName: 'Client', key: 'clientName', dataType: 'text', dataLength: 30, required: true },
      { displayName: 'Browser', key: 'browserInfo', dataType: 'text', dataLength: 30, required: true },
      { displayName: 'Date&Time', key: 'creationTime', dataType: 'text', dataLength: 30, required: true },
      { displayName: 'Result', key: 'result', dataType: 'text', dataLength: 30, required: true }],
    LoginDatatable: []
  }
  profileData: any = {
    email: '',
    userName: '',
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
    name: '',
    surname: '',
    phoneNumber: '',
    concurrencyStamp: '',
    twoFactorEnabled: false
  }
  rdsDeligateTableData: any = [];
  usernameList: any = []
  FixedHeaderBody: boolean = true;
  personalDataActions: any = [{ id: 'download', displayName: 'Download' }];
  sideMenuCollapsed: boolean = false;
  headerHeight: any = '110px';
  @Input() AccountLinkedTable: any = [];
  receiveNotifications: any;
  notificationTypes: any = [];
  sidenavItemsOriginal: any = [
    { label: 'Dashboard', labelTranslationKey: 'Dashboard', id: '', permissionName: 'BookStore.Dashboard.Host', icon: 'home', path: '/pages/dashboard', descriptionTranslationKey: 'Statistics and reports', description: 'Statistics and reports' },
    { label: 'Dashboard', labelTranslationKey: 'Dashboard', id: '', permissionName: 'BookStore.Dashboard.Tenant', icon: 'home', path: '/pages/dashboard', description: 'Statistics and reports', descriptionTranslationKey: 'Statistics and reports' },
    { label: 'Tenants', labelTranslationKey: 'Tenants', id: 'tenants', permissionName: 'Saas.Tenants', icon: 'tenant', path: '/pages/tenant', description: 'Manage your tenants', descriptionTranslationKey: 'Manage your tenants' },
    { label: 'Editions', labelTranslationKey: 'Editions', id: '', permissionName: 'Saas.Editions', icon: 'editions', path: '/pages/edition', description: 'Manage editions and features of the application', descriptionTranslationKey: 'Manage editions and features of the application' },

    {
      label: 'Identity Management', labelTranslationKey: 'Identity Management', id: 'admin', permissionName: '', icon: 'administration', path: '',
      children: [
        { label: 'Organization Units', labelTranslationKey: 'Organization Units', id: '', permissionName: 'AbpIdentity.OrganizationUnits', icon: 'organization', path: '/pages/organization-unit', description: 'Use organization units to organize users and entities', descriptionTranslationKey: 'Use organization units to organize users and entities' },
        { label: 'Roles', labelTranslationKey: 'Roles', id: '', permissionName: 'AbpIdentity.Roles', icon: 'roles', path: '/pages/role', description: 'Use roles to group permissions', descriptionTranslationKey: 'Use roles to group permissions' },
        { label: 'Users', labelTranslationKey: 'Users', id: '', permissionName: 'AbpIdentity.Users', icon: 'users', path: '/pages/user', description: 'Manage users and permissions', descriptionTranslationKey: 'Manage users and permissions' },
        { label: 'Claim Types', labelTranslationKey: 'Claim Types', id: '', permissionName: 'AbpIdentity.ClaimTypes', icon: 'users', path: '/pages/user', description: 'Manage users and permissions', descriptionTranslationKey: 'Manage users and permissions' },

        // { label: 'subscription', labelTranslationKey: 'subscription', id: '', permissionName: 'Pages.Administration.Tenant.SubscriptionManagement', icon: 'subscription', path: '/pages/subscription', descriptionTranslationKey: '' },
        // { label: 'Maintenance', labelTranslationKey: 'Maintenance', id: '', permissionName: 'Pages.Administration.Host.Maintenance', icon: 'maintenance', path: '/pages/maintenance', description: 'Statistics and reports', descriptionTranslationKey: 'Statistics and reports' },
        // { label: 'Visual Settings', labelTranslationKey: 'Visual Settings', id: '', permissionName: '', icon: 'visual_settings', path: '/pages/visualsettings', description: 'Change the look of UI', descriptionTranslationKey: 'Change the look of UI' },
        // { label: 'Webhook Subscriptions', labelTranslationKey: 'Webhook Subscriptions', id: '', permissionName: 'Pages.Administration.WebhookSubscription', icon: 'webhook_subscription', path: '/pages/webhooksubscription', description: 'Webhook Subsubscription Info', descriptionTranslationKey: 'Statistics and reports' },
        // { label: 'Dynamic Properties', labelTranslationKey: 'Dynamic Properties', id: 'Pages.Administration.DynamicProperties', permissionName: '', icon: 'dynamic_properties', path: '/pages/dynamic-property-management', descriptionTranslationKey: '' },
        // //{ label: 'Settings', labelTranslationKey: 'Settings', id: '', permissionName: '', icon: 'setting', path: '/pages/settings', description: 'Show and change application settings', descriptionTranslationKey: 'Show and change application settings' },
        { label: 'Security-logs', labelTranslationKey: 'Cart', id: 'cart', permissionName: 'AbpIdentity.SecurityLogs' ,icon: 'tenant', path: '/pages/security-logs', description: 'Manage your cart', descriptionTranslationKey: 'Manage your cart' },

      ],
    },
    {
      label: 'Identity Server', labelTranslationKey: 'Identity Server', id: 'admin', permissionName: '', icon: 'administration', path: '',
      children: [
        { label: 'Client', labelTranslationKey: 'Client', id: '', permissionName: 'IdentityServer.Client', icon: 'users', path: '/pages/client', description: 'Manage clients and permissions', descriptionTranslationKey: 'Manage users and permissions' },
        { label: 'Identity Resource', labelTranslationKey: 'Identity Resources', id: '', permissionName: 'IdentityServer.IdentityResource', icon: 'home', path: '/pages/identityResources', description: 'Show and change application settings', descriptionTranslationKey: 'Show and change application settings' },
        { label: 'Api Resources', labelTranslationKey: 'Api Resources', id: '', permissionName: 'IdentityServer.ApiResource', icon: 'home', path: '/pages/apiresources', description: 'Show and change application settings', descriptionTranslationKey: 'Show and change application settings' },
        { label: 'Api Scopes', id: 'ApiScope', permissionName: 'IdentityServer.ApiScope', icon: 'settings', path: '/pages/apiScope', description: 'Home > Identity Server > Api Scope' },
      ],
    },
    {
      label: 'Language Management', labelTranslationKey: 'Language Management', id: 'admin', permissionName: '', icon: 'languages', path: '',
      children: [
        { label: 'Language', labelTranslationKey: 'Language', id: '', permissionName: 'LanguageManagement.Languages', icon: 'languages', path: '/pages/language', description: 'Manage user interface languages', descriptionTranslationKey: 'Statistics and reports' },
        { label: 'Language-Text', labelTranslationKey: 'Language-Text', id: '', permissionName: 'LanguageManagement.LanguageTexts', icon: 'languages', path: '/pages/languagetext', description: 'Manage user interface languagesText', descriptionTranslationKey: 'Statistics and reports' },
      ],
    },
    { label: 'Text Template', labelTranslationKey: 'Text Template', id: '', permissionName: 'TextTemplateManagement.TextTemplates', icon: 'home', path: '/pages/text-template', description: 'Show and change application settings', descriptionTranslationKey: 'Show and change application settings' },
    { label: 'Audit logs', labelTranslationKey: 'Audit logs', id: '', permissionName: 'AuditLogging.AuditLogs', icon: 'audit_logs', path: '/pages/audit-logs', descriptionTranslationKey: '' },
    // { label: 'UI Components', labelTranslationKey: 'UI Components', id: '', permissionName: '', icon: 'demo_ui', path: '/pages/demo-ui', description: '', descriptionTranslationKey: '' },
    { label: 'Settings', labelTranslationKey: 'Settings', id: '', permissionName: 'AbpIdentity.SettingManagement', icon: 'setting', path: '/pages/settings', description: 'Show and change application settings', descriptionTranslationKey: 'Show and change application settings' },
   
  ];


  logo: string = 'https://www.carlogos.org/logo/Volkswagen-logo-2019-640x500.jpg';
  logoWithName: string = 'https://www.sydneydieselcentre.com.au/wp-content/uploads/2015/10/volkswagen-cars-logo-300x275.jpg';
  color: string = '#8d9ba9';
  backgroundColor: string = '#F5F5FA';
  collapsedHeaderHeight: any = '40px';
  profilePic: string = '../assets/profile-picture-circle.svg';
  offCanvasId: string = 'profileOffCanvas'
  collapseRequired: any = true;
  @Input() tenancy: string = 'Host Admin';
  selectedMenu: string = '';
  selectedMenuDescription: string = '';
  sub: Subscription
  rdsTopNavigationMfeConfig: ComponentLoaderOptions;
  accountPage = true;
  activePage: any;
  activesubmenu: any;
  languageItems: any = [];
  linkedAccountData: any[] = [];
  linkedAccountHeaders: any = [{ displayName: 'User Name', key: 'username', dataType: 'text', dataLength: 30, required: true }];
  notifications: any[];
  unreadCount: number = 0;
  selectedMode: any;
  counter: number = 0;
  canvasTitle: string = 'My Account';
  showOffcanvas = false;
  RdsCompMySettings: ComponentLoaderOptions;
  public securityLogsHeaders: TableHeader[] = [
    { key: 'time', displayName: 'Time', dataType: 'text', sortable: true, filterable: true },
    { key: 'action', displayName: 'Action', dataType: 'text', sortable: true, filterable: true },
    { key: 'ipAddress', displayName: 'IP Address', dataType: 'text', sortable: true, filterable: true },
    { key: 'browser', displayName: 'Browser', dataType: 'html', sortable: true, filterable: true },
    { key: 'application', displayName: 'Application', dataType: 'html', sortable: true, filterable: true },
    { key: 'identity', displayName: 'Identity', dataType: 'text', sortable: true, filterable: true },
    { key: 'username', displayName: 'Users', dataType: 'text', sortable: true, filterable: true },
  ];

  personalDataHeaders: TableHeader[] = [
    { key: 'creationTime', displayName: 'Creation Time', dataType: 'date', sortable: true, filterable: true },
    { key: 'readyTime', displayName: 'Ready Time', dataType: 'date', sortable: true, filterable: true },
  ];


  securityLogs: any[] = [];

  profilePicUrl: any;

  constructor(private router: Router,
    private store: Store,

    private alertService: AlertService,
    public translate: TranslateService,
    private shared: SharedService,
    private injector: Injector,
    private userAuthService: UserAuthService,
    private theme: ThemesService,
    private serviceProxies: ServiceProxy,
    @Inject(DOCUMENT) private document: Document
  ) {
    super(injector);
  }

  ngAfterViewInit() {
  }
  getdata() {
    //this.store.select(selectTenancyData).subscribe(res => console.log(res));
  }
  tenancyTableData = [];
  sidenavItems = [];
  personalData: any[] = [];

  permissions: any;

  ngOnInit(): void {
    this.theme.theme = 'light'
    const tenancy: any = JSON.parse(localStorage.getItem('tenantInfo'));
    if (tenancy) {
      this.tenancy = tenancy.name;
    } else {
      this.tenancy = 'Host Admin';
    }
    this.store.dispatch(getLanguages());

    // link user
    this.store.dispatch(getLinkUserData());
    this.store.select(selectlinkUser).subscribe(res => {
      if (res) {
        this.linkedAccountData = [
          { targetUserId: '1', targetUserName: 'sample', targetTenantId: '1.1', targetTenantName: 'set', directlyLinked: false },
          { targetUserId: '2', targetUserName: 'test', targetTenantId: '2.1', targetTenantName: 'get', directlyLinked: true }
        ];

        // this.linkedAccountData = res.items;
      }

    });

    this.store.dispatch(getPersonalData('6f9f495e-f308-9a83-e524-3a079ce6f2f5'));
    this.store.select(selectPersonalData).subscribe(res=> {
      if (res) {
        this.personalData = res.items;
      }
    });
    // this.store.select(selectDefaultLanguage).subscribe((res: any) => {
    //   if (res) {
    //     this.translate.use(res);
    //     let htmlTag = this.document.getElementsByTagName('html')[0] as HTMLHtmlElement;
    //     if (htmlTag) {
    //       htmlTag.dir = res === 'ar' ? 'rtl' : 'ltr';
    //     }
    //     this.sidenavItems = this.translateMenu(this.sidenavItems);
    //   }
    // });

    this.serviceProxies.profilePictureGET('6f9f495e-f308-9a83-e524-3a079ce6f2f5').subscribe((res: any) => {
      if (res) {
        this.profilePicUrl = 'data:image/jpeg;base64,' + res.fileContent;
      }

    });

    this.store.dispatch(getTwoFactor());
    this.store.select(selectTwoFactor).subscribe(res => {
      if (res) this.profileData.twoFactorEnabled = true;
    });

    this.store.dispatch(getProfileSettings());
    this.store.select(selectAllProfileSettings).subscribe((res: any) => {
      if (res) {
        [res].forEach(ele => {
          this.profileData.name = ele.name;
          this.profileData.surname = ele.surname;
          this.profileData.email = ele.email;
          this.profileData.phoneNumber = ele.phoneNumber;
          this.profileData.userName = ele.userName;
          this.profileData.concurrencyStamp = ele.concurrencyStamp
        });
      }
    });



    this.userAuthService.getPermissions().subscribe(res => {
      if (res) {
        this.filterNavItems(this.sidenavItemsOriginal, res, this.sidenavItems);
      }
      else {

        const storedPermission = localStorage.getItem('storedPermissions');
        const parsedPermission = JSON.parse(storedPermission);
        if (parsedPermission) {
          this.permissions = parsedPermission;
          this.filterNavItems(this.sidenavItemsOriginal, parsedPermission, this.sidenavItems);
        }
      }
    });
    this.subscribeToAlerts();
    this.rdsTopNavigationMfeConfig = {
      name: 'RdsTopNavigation',
      input: {
        backgroundColor: this.backgroundColor,
        selectedMenu: this.selectedMenu,
        selectedMenuDescription: this.selectedMenuDescription,
        LoginAttempts: this.LoginAttempts,
        isPageWrapper: true,
        profilePic: this.profilePic,
        profileData: this.profileData,
        rdsDeligateTableData: this.rdsDeligateTableData,
        offCanvasId: this.offCanvasId,
        logo: 'assets/raaghu_icon.png',
        projectName: 'Raaghu',
        linkedAccountData: this.linkedAccountData,
        linkedAccountHeaders: this.linkedAccountHeaders,
        userList: this.usernameList,
        notificationData: this.notifications,
        unreadCount: this.unreadCount,
        receiveNotifications: this.receiveNotifications,
        notificationTypes: this.notificationTypes,
        tenancy: this.tenancy
      },
      output: {
        toggleEvent: () => {
          var element = document.getElementById("sidebar");
          element.style.display = (element.style.display === 'none') ? 'block' : 'none'
        },
        onLanguageSelection: (lan) => {
          this.translate.use('en');
          //this.store.dispatch(setDefaultLanguageForUI(lan))

        },
        deleteDeligateuser: (data: any) => {
          if (data) {
            //this.store.dispatch(deleteDelegations(data.id))
          }
        },
        saveDeligate: (data: any) => {
          if (data) {
            //this.store.dispatch(saveDelegations(data))
          }
        },
        onProfileSave: (passwordInfo: any) => {
          if (passwordInfo) {
            //this.store.dispatch(changePassword(passwordInfo));
          }
        },
        deleteLinkaccount: (data: any) => {
          //this.store.dispatch(deleteAccount(data))

        },
        onDownloadLink: (data: any) => {
          this.store.dispatch(PrepareCollectedData());
        },
        onLoginAttemptsRefresh: (data: any) => {
          // this.store.dispatch(getLoginAttempts(data));
          // this.store.select(selectAllLoginAttempts).subscribe((res: any) => {
          //   if (res && res.items) {
          //     res.items.forEach((element: any) => {
          //       const item: any = {
          //         browserInfo: element.browserInfo,
          //         clientIpAddress: element.clientIpAddress,
          //         clientName: element.clientName,
          //         creationTime: element.creationTime,
          //         result: element.result,
          //         tenancyName: element.tenancyName,
          //         userNameOrEmail: element.userNameOrEmail,
          //       }
          //       this.LoginAttempts.LoginDatatable.push(item);
          //     });
          //     const mfeConfig = this.rdsTopNavigationMfeConfig
          //     mfeConfig.input.LoginAttempts = { ... this.LoginAttempts };
          //     this.rdsTopNavigationMfeConfig = mfeConfig;
          //   }
          // });
        },
        linkUser: (data: any) => {
          console.log(data);
          //this.store.dispatch(linkToUser(data))
        },
        setAllNotificationAsRead: () => {
          //this.store.dispatch(SetAllNotificationsAsRead());
        },
        setNotificationAsRead: (data: any) => {
          //this.store.dispatch(SetNotificationRead({ id: data.userNotificationId }));
        },
        onUpdateNotificationSettings: (data: any) => {
          //this.store.dispatch(updateNotificationSettings(data));
        },
        viewProfileCanvas: (value: string) => {
          var offcanvas = document.getElementById('profile-canvas');
          var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
          bsOffcanvas.show();
          this.canvasTitle = value;


        }
      }
    }
    //this.store.dispatch(getNotificationSettings());
    // this.store.select(selectNotificationSettings).subscribe((res: any) => {
    //   if (res && res !== null) {
    //     this.receiveNotifications = res.receiveNotifications;
    //     this.notificationTypes = [];
    //     res.notifications.forEach((notification: any) => {
    //       const data: any = {
    //         name: notification.name,
    //         displayName: notification.displayName,
    //         isSubscribed: notification.isSubscribed
    //       };
    //       this.notificationTypes.push(data);
    //     })
    //     const mfeConfig = this.rdsTopNavigationMfeConfig;
    //     mfeConfig.input.receiveNotifications = this.receiveNotifications;
    //     mfeConfig.input.notificationTypes = [...this.notificationTypes];

    //     this.rdsTopNavigationMfeConfig = mfeConfig;
    //   }
    // })

    //this.store.dispatch(getUserNotification());

    // this.store.select(selectAllNotification).subscribe((res: any) => {
    //   if (res && res.items && res.items.length) {
    //     this.unreadCount = res.unreadCount;
    //     this.notifications = [];
    //     res.items.forEach((element: any) => {
    //       this.notifications.push(this.format(element));
    //     });
    //     this.notifications.sort(function (a, b) {
    //       return a.state - b.state;
    //     });
    //     const mfeConfig = this.rdsTopNavigationMfeConfig;
    //     mfeConfig.input.notificationData = [...this.notifications];
    //     mfeConfig.input.unreadCount = this.unreadCount;
    //     this.rdsTopNavigationMfeConfig = mfeConfig;
    //   }
    // });


    this.store.select(selectAllLanguages).subscribe((res: any) => {
      console.log(res);
    })
    this.on('tenancyDataAgain').subscribe(res => {
    })
    if (this.router.url) {
      let matchRoute: any;
      const index = this.getMatchedRoute(this.sidenavItems);
      if (index !== -1) {
        this.activePage = index;
        this.selectedMenu = this.sidenavItems[index].label;
        this.selectedMenuDescription = this.sidenavItems[index].description;
      } else {
        this.sidenavItems.forEach((menu: any, i: number) => {
          if (menu.children && menu.children.length > 0) {
            const index = this.getMatchedRoute(menu.children);
            if (index !== -1) {
              this.activePage = i;
              this.activesubmenu = index;
              this.selectedMenu = menu.children[index].label;
              this.selectedMenuDescription = menu.children[index].description;
            }
          }
        })
      }
      this.rdsTopNavigationMfeConfig.input.selectedMenu = this.selectedMenu;
      this.rdsTopNavigationMfeConfig.input.selectedMenuDescription = this.selectedMenuDescription;
    }

    //this.store.dispatch(getMLATenancyData());

    // this.store.select(selectTenancyData).subscribe(res => {
    //   this.linkedAccountData = [];
    //   if (res && res.items) {
    //     const data: any = [];
    //     res.items.forEach((item: any) => {
    //       const _item: any = {
    //         id: item.id,
    //         username: item.username,
    //         tenancyName: item.tenancyName,
    //         tenantId: item.tenantId
    //       }
    //       this.linkedAccountData.push(_item);
    //     });
    //     const mfe = this.rdsTopNavigationMfeConfig;
    //     mfe.input.linkedAccountData = [ ...this.linkedAccountData ];
    //     this.rdsTopNavigationMfeConfig = mfe;

    //   }

    // });

    this.sub = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.accountPage = ["/login", "/forgot-password"].includes(event.url)
      }
    })
    if (this.sidenavItems && this.sidenavItems.length > 0) {
      if (this.sidenavItems[0].children && this.sidenavItems[0].children.length > 0) {
        this.selectedMenu = this.sidenavItems[0].children[0].label;
        this.selectedMenuDescription = this.sidenavItems[0].children[0].description;
      } else {
        this.selectedMenu = this.sidenavItems[0].label;
        this.selectedMenuDescription = this.sidenavItems[0].description;
      }
    }



    this.store.dispatch(getSecuritylogs());
    this.store.select(selectSecurityLogs).subscribe((res: any) => {
      if (res && res.items) {
        res.items.forEach((element: any) => {
          const item: any = {
            id: element.id,
            time: element.creationTime,
            action: element.action,
            ipAddress: element.clientIpAddress,
            browser: element.browserInfo,
            application: element.applicationName,
            identity: element.identity,
            username: element.userName
          }
          this.securityLogs.push(item);
        });


      }
    });




    // this.store.dispatch(getProfile());
    // this.store.select(selectProfileInfo).subscribe((res: any) => {
    //   if (res) {
    //     this.profileData = res;
    //     const mfe = this.rdsTopNavigationMfeConfig;
    //     mfe.input.profileData = { ...this.profileData };
    //     this.rdsTopNavigationMfeConfig = mfe;
    //   }
    // })


    // this.store.dispatch(getDelegations());
    // this.store.select(selectDelegationsInfo).subscribe((res: any) => {
    //   if (res && res.items && res.items.length) {
    //     res.items.forEach((element: any) => {
    //       const item: any = {
    //         username: element.username,
    //         startTime: element.startTime,
    //         endTime: element.endTime,
    //         id: element.id,
    //       };
    //       this.rdsDeligateTableData.push(item);
    //     });
    //     const mfeConfig = this.rdsTopNavigationMfeConfig;
    //     mfeConfig.input.rdsDeligateTableData = [...this.rdsDeligateTableData];
    //     this.rdsTopNavigationMfeConfig = mfeConfig;
    //   }

    // });
    const UsernameFilter: any = {
      excludeCurrentUser: true,
      filter: '',
      maxResultCount: 10,
      skipCount: 0
    }
    // this.store.dispatch(getUsername(UsernameFilter));
    // this.store.select(selectUserFilter).subscribe((res: any) => {
    //   if (res && res.items && res.items.length) {
    //     res.items.forEach((element: any) => {
    //       const item: any = {
    //         value: element.value,
    //         displayText: element.name,
    //       };
    //       this.usernameList.push(item);
    //     });
    //     const mfeConfig = this.rdsTopNavigationMfeConfig;
    //     mfeConfig.input.userList = [...this.usernameList];
    //     this.rdsTopNavigationMfeConfig = mfeConfig;
    //   }
    // })
    this.sub = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.accountPage = ["/login", "/forgot-password"].includes(event.url)
      }
    })


    this.on('logout-returns').subscribe(r => {
      if (this.counter < 1) {
        this.userAuthService.unauthenticateUser();
        this.counter++;
      }

    })

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.rdsTopNavigationMfeConfig.input.backgroundColor = this.backgroundColor;

  }

  onProfileSave(event: any) {
    console.log('emitted data', event);

    this.store.dispatch(saveProfile(event.myAccount));
    //this.store.dispatch(saveChangedPassWord(event.changedPassword));
    //this.store.dispatch(saveTwoFactor(false));
  }

  getProfilePic(event: any): void {
    // this.profilePic = event;
    debugger
    this.store.dispatch(saveProfilePicture(event));
  }

  onDownload(event: any) {}

  redirectPath(event): void {
    const rdsAlertMfeConfig = this.rdsAlertMfeConfig;
    rdsAlertMfeConfig.input.currentAlerts = [];
    this.rdsAlertMfeConfig = rdsAlertMfeConfig;
    this.rdsTopNavigationMfeConfig.input.selectedMenu = event.label;
    this.rdsTopNavigationMfeConfig.input.selectedMenuDescription = event.description;
    this.router.navigate([event.path]);
    var alertNode = document.querySelector('.alert');
    if (alertNode) {
      var alert = bootstrap.Alert.getInstance(alertNode);
      alert.close();
    }
    this.shared.setTopNavTitle('');

  }
  redirect(event): void {
  }

  onCollapse(event): void {
    this.sideMenuCollapsed = event;
  }

  close() {
    var offcanvas = document.getElementById(this.offCanvasId);
    var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
    bsOffcanvas.hide();
  }

  subscribeToAlerts() {
    this.alertService.alertEvents.subscribe((alert) => {
      this.currentAlerts = [];
      const currentAlert: any = {
        type: alert.type,
        title: alert.title,
        message: alert.message,
      };
      this.currentAlerts.push(currentAlert);
      const rdsAlertMfeConfig = this.rdsAlertMfeConfig;
      rdsAlertMfeConfig.input.currentAlerts = [...this.currentAlerts];
      this.rdsAlertMfeConfig = rdsAlertMfeConfig;
    });

  }
  getMatchedRoute(menus): number {
    return menus.findIndex((x: any) => x.path === this.router.url)
  }
  format(userNotification) {
    let formatted = {
      userNotificationId: userNotification.id,
      title: userNotification.notification.notificationName,
      time: moment(new Date(userNotification.notification.creationTime), 'YYYY-MM-DD hh:mm:ss').fromNow(),
      creationTime: userNotification.notification.creationTime,
      data: userNotification.notification.data,
      status: this.severity[userNotification.notification.severity],
      url: this.getUrl(userNotification),
      state: userNotification.state
    };
    return formatted;
  }
  formatDate(date: DateTime | Date, format: string): string {
    if (date instanceof Date) {
      return this.formatDate(this.fromJSDate(date), format);
    }

    return date.toFormat(format);
  }
  fromJSDate(date: Date): DateTime {
    return DateTime.fromJSDate(date);
  }

  getUrl(userNotification): string {
    switch (userNotification.notification.notificationName) {
      case 'App.NewUserRegistered':
        return '/app/admin/users?filterText=' + userNotification.notification.data.properties.emailAddress;
      case 'App.NewTenantRegistered':
        return '/app/admin/tenants?filterText=' + userNotification.notification.data.properties.tenancyName;
      case 'App.GdprDataPrepared':
        return (

          '/File/DownloadBinaryFile?id=' +
          userNotification.notification.data.properties.binaryObjectId +
          '&contentType=application/zip&fileName=collectedData.zip'
        );
      case 'App.DownloadInvalidImportUsers':
        return (
          '/File/DownloadTempFile?fileToken=' +
          userNotification.notification.data.properties.fileToken +
          '&fileType=' +
          userNotification.notification.data.properties.fileType +
          '&fileName=' +
          userNotification.notification.data.properties.fileName
        );
      //Add your custom notification names to navigate to a URL when user clicks to a notification.
    }

    //No url for this notification
    return '';
  }

  public currentTheme(): string {
    return this.theme.current;
  }
  public selectTheme(value: string): void {
    this.theme.current = value;
  }
  set dark(enabled: boolean) {
    this.theme.theme = enabled ? 'dark' : null;
  }

  toggleBetweenMode(event: any) {
    let checked = event;
    if (!checked) {
      this.theme.theme = 'dark';
    }
    else {
      this.theme.theme = 'light';
    }
  }

  private filterNavItems(sidenavItemsOriginal, grantedPermissions: any, sidenavItems: any[]) {
    sidenavItemsOriginal.forEach(node => {
      if (grantedPermissions[node.permissionName] === true || node.permissionName == '') {
        let childrenValue = node.children ? [] : undefined;
        var item: any = {
          children: childrenValue,
          label: node.label,
          id: node.id,
          permissionName: node.permissionName,
          icon: node.icon,
          path: node.path,
          description: node.description,
          labelTranslationKey: node.labelTranslationKey
        }

        if (node.children != undefined) {
          this.filterNavItems(node.children, grantedPermissions, item.children);
        }
        sidenavItems.push(item);

      }
    });
  }

  public getSideNavItems(): any {
    // this.sidenavItems = this.translateMenu(this.sidenavItems);
    return this.sidenavItems;
  }

  private translateMenu(sidenavItems): any {
    sidenavItems.forEach((menu: any) => {
      menu.label = this.translate.instant(menu.labelTranslationKey);
      if (menu.children && menu.children.length > 0) {
        this.translateMenu(menu.children);
      }
    })
    return sidenavItems
  }
}









