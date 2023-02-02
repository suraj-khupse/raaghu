import { Component, Inject, Injector, Input, SimpleChanges } from '@angular/core';
import * as moment_ from 'moment';
const moment = moment_;
import { DateTime } from 'luxon';
import { Subscription } from 'rxjs';
import { AppSessionService, ComponentLoaderOptions, ProfileServiceProxy, SessionServiceProxy, SharedService, UpdateProfilePictureInput, UserAuthService, } from '@libs/shared';
import { Store } from '@ngrx/store';
import { deleteDelegations, getDelegations, getUsername, saveDelegations, } from 'projects/libs/state-management/src/lib/state/authority-delegations/authority-delegations.action';
import { selectDelegationsInfo, selectUserFilter, } from 'projects/libs/state-management/src/lib/state/authority-delegations/authority-delegations.selector';
import { selectAllLoginAttempts } from 'projects/libs/state-management/src/lib/state/login-attempts/login-attempts.selector';
import { getLoginAttempts } from 'projects/libs/state-management/src/lib/state/login-attempts/login-attempts.actions';
import {
  backToImpersonator,
  deleteAccount, getMLATenancyData, getNotificationSettings, getUserNotification, linkToUser, SetAllNotificationsAsRead,
  SetNotificationRead, updateNotificationSettings,
} from 'projects/libs/state-management/src/lib/state/mla/mla.actions';
import { selectAllNotification, selectNotificationSettings, selectTenancyData, } from 'projects/libs/state-management/src/lib/state/mla/mla.selector';
import { AlertService } from 'projects/libs/shared/src/lib/alert.service';
import { TranslateService } from '@ngx-translate/core';
import { RdsThemesService } from 'raaghu-themes/rds-themes';
import { PrepareCollectedData } from 'projects/libs/state-management/src/lib/state/DownloadData/download-data.action';
import { DOCUMENT } from '@angular/common';
import { slideInAnimation } from '../animation';
import { getProfilepic } from 'projects/libs/state-management/src/lib/state/profile-settings/profile-settings.actions';
import { selectAllVisualsettings } from 'projects/libs/state-management/src/lib/state/Visual-settings/visual-settings.selector';
import { getVisualsettings } from 'projects/libs/state-management/src/lib/state/Visual-settings/visual-settings.actions';
import { getLanguages, setDefaultLanguage, setDefaultLanguageForUI } from 'projects/libs/state-management/src/lib/state/language/language.actions';
import { changePassword, getProfile } from 'projects/libs/state-management/src/lib/state/mysettings/mysettings.action';
import { selectAllLanguages, selectDefaultLanguage } from 'projects/libs/state-management/src/lib/state/language/language.selector';
import { selectProfileInfo } from 'projects/libs/state-management/src/lib/state/mysettings/mysettings.selector';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

declare var bootstrap: any;
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [slideInAnimation],
})
export class SidenavComponent {
  showDelegationButtonSpinner: boolean;
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }
  index: any = '12';
  FixedHeaderBody: boolean = true;
  toggleSideNav: boolean = false;
  currentAlerts: any = [];
  selectedLanguage: any = { language: '', icon: '' };
  severity = ['info', 'error', 'success', 'warn', 'fatal'];
  // impersonateUserId:any
  LoginAttempts: any = {
    TableHeader: [
      {
        displayName: 'IP Address',
        key: 'clientIpAddress',
        dataType: 'text',
        dataLength: 30,
        required: true,
      },
      {
        displayName: 'Browser',
        key: 'browserInfo',
        dataType: 'text',
        dataLength: 30,
        required: true,
      },
      {
        displayName: 'Date&Time',
        key: 'creationTime',
        dataType: 'text',
        dataLength: 30,
        required: true,
      },
      {
        displayName: 'Result',
        key: 'result',
        dataType: 'text',
        dataLength: 30,
        required: true,
      },
    ],
    LoginDatatable: [],
  };
  profileData: any;
  uploadSub: any;
  rdsDeligateTableData: any = [];
  usernameList: any = [];
  sideMenuCollapsed: boolean = false;
  headerHeight: any = '110px';
  @Input() AccountLinkedTable: any = [];
  @Input() Profileurl: string = 'https://anzstageui.raaghu.io/assets/profile-picture-circle.svg';
  @Input() impersonateUserId : boolean = false;
  receiveNotifications: any;
  notificationTypes: any = [];
  sidenavItemsOriginal: any = [
    {
      label: 'Dashboard',
      labelTranslationKey: 'Dashboard',
      id: 1,
      permissionName: 'Pages.Administration.Host.Dashboard',
      icon: 'home',
      path: '/pages/dashboard',
      descriptionTranslationKey: 'Statistics and reports',
      description: 'Statistics and reports',
      parent: null
    },
    {
      label: 'Dashboard',
      labelTranslationKey: 'Dashboard',
      id: 2,
      permissionName: 'Pages.Tenant.Dashboard',
      icon: 'home',
      path: '/pages/dashboard',
      description: 'Statistics and reports',
      descriptionTranslationKey: 'Statistics and reports',
      parent: null
    },
    {
      label: 'UI Components',
      labelTranslationKey: 'UI Components',
      id: 3,
      permissionName: '',
      icon: 'demo_ui',
      path: '/pages/demo-ui',
      description: '',
      descriptionTranslationKey: '',
      parent: null
    },
    {
      label: 'Icons',
      labelTranslationKey: 'Icons',
      id: 4,
      permissionName: '',
      icon: 'icons',
      path: '/pages/icons',
      description: 'icons',
      descriptionTranslationKey: '',
      parent: null
    },
    {
      label: 'Pages',
      labelTranslationKey: 'Pages',
      id: 5,
      permissionName: '',
      icon: 'pages',
      path: 'pages',
      parent: null,
      children: [
        {
          label: 'Tenants',
          labelTranslationKey: 'Tenants',
          id: 51,
          permissionName: 'Pages.Tenants',
          icon: 'tenant',
          path: '/pages/tenant',
          description: 'Manage your tenants',
          descriptionTranslationKey: 'Manage your tenants',
          parent: 5
        },
        {
          label: 'Editions',
          labelTranslationKey: 'Editions',
          id: 52,
          permissionName: 'Pages.Editions',
          icon: 'editions',
          path: '/pages/edition',
          description: 'Manage editions and features of the application',
          descriptionTranslationKey: 'Manage editions and features of the application',
          parent: 5
        },
        {
          label: 'Administration',
          labelTranslationKey: 'Administration',
          id: 53,
          permissionName: '',
          icon: '',
          path: '',
          parent: 5,
          children: [
            {
              label: 'Organization Units',
              labelTranslationKey: 'Organization Units',
              id: 531,
              permissionName: 'Pages.Administration.OrganizationUnits',
              icon: 'organization',
              path: '/pages/organization-unit',
              description: 'Use organization units to organize users and entities',
              descriptionTranslationKey: 'Use organization units to organize users and entities',
              parent: 53
            },
            {
              label: 'Roles',
              labelTranslationKey: 'Roles',
              id: 532,
              permissionName: 'Pages.Administration.Roles',
              icon: 'roles',
              path: '/pages/role',
              description: 'Use roles to group permissions',
              descriptionTranslationKey: 'Use roles to group permissions',
              parent: 53
            },
            {
              label: 'Users',
              labelTranslationKey: 'Users',
              id: 533,
              permissionName: 'Pages.Administration.Users',
              icon: 'users',
              path: '/pages/user',
              description: 'Manage users and permissions',
              descriptionTranslationKey: 'Manage users and permissions',
              parent: 53
            },
            {
              label: 'Language',
              labelTranslationKey: 'Language',
              id: 534,
              permissionName: 'Pages.Administration.Languages',
              icon: 'languages',
              path: '/pages/language',
              description: 'Manage user interface languages',
              descriptionTranslationKey: 'Statistics and reports',
              parent: 53
            },
            {
              label: 'Audit logs',
              labelTranslationKey: 'Audit logs',
              id: 535,
              permissionName: 'Pages.Administration.AuditLogs',
              icon: 'audit_logs',
              path: '/pages/audit-logs',
              descriptionTranslationKey: '',
              parent: 53
            },
            {
              label: 'Subscription',
              labelTranslationKey: 'Subscription',
              id: 536,
              permissionName: 'Pages.Administration.Tenant.SubscriptionManagement',
              icon: 'subscription',
              path: '/pages/subscription',
              descriptionTranslationKey: '',
              parent: 53
            }, ,
            {
              label: 'Maintenance',
              labelTranslationKey: 'Maintenance',
              id: 537,
              permissionName: '',
              icon: 'maintenance',
              path: '/pages/maintenance',
              description: 'Statistics and reports',
              descriptionTranslationKey: 'Statistics and reports',
              parent: 53

            },
            {
              label: 'Visual Settings',
              labelTranslationKey: 'Visual Settings',
              id: 538,
              permissionName: '',
              icon: 'visual_settings',
              path: '/pages/visualsettings',
              description: 'Change the look of UI',
              descriptionTranslationKey: 'Change the look of UI',
              parent: 53

            },
            {
              label: 'Webhook Subscriptions',
              labelTranslationKey: 'Webhook Subscriptions',
              id: 539,
              permissionName: 'Pages.Administration.WebhookSubscription',
              icon: 'webhook_subscription',
              path: '/pages/webhooksubscription',
              description: 'Webhook Subsubscription Info',
              descriptionTranslationKey: 'Statistics and reports',
              parent: 53

            },
            {
              label: 'Dynamic Properties',
              labelTranslationKey: 'Dynamic Properties',
              id: 540,
              permissionName: 'Pages.Administration.DynamicProperties',
              icon: 'dynamic_properties',
              path: '/pages/dynamic-property-management',
              descriptionTranslationKey: '',
              parent: 53

            },
            {
              label: 'Settings',
              labelTranslationKey: 'Settings',
              id: 541,
              permissionName: 'Pages.Administration.Host.Settings',
              icon: 'setting',
              path: '/pages/settings',
              description: 'Show and change application settings',
              descriptionTranslationKey: 'Show and change application settings',
              parent: 53

            },
            {
              label: 'Settings',
              labelTranslationKey: 'Settings',
              id: 542,
              permissionName: 'Pages.Administration.Tenant.Settings',
              icon: 'setting',
              path: '/pages/settings',
              description: 'Show and change application settings',
              descriptionTranslationKey: 'Show and change application settings',
              parent: 53

            },
          ],
        }
      ],
    }
    //,
    //{
    //  label: 'Apps',
    //  labelTranslationKey: 'Apps',
    //  id: '',
    //  permissionName: '',
    //  icon: 'apps',
    //  path: '',
    //  children: [
    //    {
    //      label: 'Settings',
    //      labelTranslationKey: 'Settings',
    //      id: '',
    //      permissionName: 'Pages.Administration.Tenant.Settings',
    //      icon: 'setting',
    //      path: '/pages/settings',
    //      description: 'Show and change application settings',
    //      descriptionTranslationKey: 'Show and change application settings',
    //    },
    //  ]
    //}

    // { label: 'Api Scopes', id: 'ApiScope', permissionName: '', icon: 'settings', path: '/pages/apiScope', description: 'Home > Identity Server > Api Scope' },

    // { label: 'Cart', labelTranslationKey: 'Cart', id: 'cart', permissionName: '' ,icon: 'tenant', path: '/pages/cart', description: 'Manage your cart', descriptionTranslationKey: 'Manage your cart' },
    // { label: 'Edition-New', labelTranslationKey: 'Edition-New', id: '', permissionName: '', icon: 'home', path: '/pages/editionnew', description: '', descriptionTranslationKey: '' },
  ];

  logo: string =
    'https://www.carlogos.org/logo/Volkswagen-logo-2019-640x500.jpg';
  logoWithName: string =
    'https://www.sydneydieselcentre.com.au/wp-content/uploads/2015/10/volkswagen-cars-logo-300x275.jpg';
  color: string = '#8d9ba9';
  backgroundColor: string = '#F5F5FA';
  collapsedHeaderHeight: any = '40px';
  profilePic: string = '../assets/profile-picture.png';
  offCanvasId: string = 'profileOffCanvas';
  collapseRequired: any = true;
  tenancy: string = 'Host Admin';
  selectedMenu: string = '';
  selectedMenuDescription: string = '';
  sub: Subscription;
  accountPage = true;
  activeMenu: any;
  languageItems: any = [];
  linkedAccountData: any = [];
  linkedAccountHeaders: any = [
    {
      displayName: 'User Name',
      key: 'username',
      dataType: 'text',
      dataLength: 30,
      required: true,
    },
  ];
  notifications: any[];
  unreadCount: number = 0;
  selectedMode: any;
  counter: number = 0;
  isLightMode: boolean = true;
  fixedHeader: boolean = true;
  tenancyTableData = [];
  sidenavItems = [];
  permissions: any;

  constructor(
    private router: Router,
    private store: Store,
    private alertService: AlertService,
    public translate: TranslateService,
    private shared: SharedService,
    private userAuthService: UserAuthService,
    private http: HttpClient,
    private sessionService: SessionServiceProxy,
    private _profileService: ProfileServiceProxy,
    private theme: RdsThemesService,
    private appSessionService: AppSessionService,
    @Inject(DOCUMENT) private document: Document
  ) {

    this.index = localStorage.getItem('themeIndex');
    if (this.index == null) {
      this.index = '12'
    }
    this.getProfilePicture();
  }


  ngAfterViewInit() {

  }


  ngOnInit(): void {
    this.store.dispatch(getVisualsettings());
    let selectedTheme = localStorage.getItem('THEME');
    this.setTheme(selectedTheme);
    this.userAuthService.index$.subscribe((value) => {
      this.index = value;
      // this.selectAllvisualSettings();
    });
    this.alertService.themes.subscribe((theme) => {
      if (theme) {
        this.setTheme(theme);
      }

    });
    if(this.appSessionService.impersonatorUserId > 0){
      this.impersonateUserId=true;
    }
    // this.appSessionService.impersonatorUserId>0;
    // this.appSessionService.impersonateId$.subscribe(res=>{
    //   this.impersonateUserId = res;
    // })


    // this.selectAllvisualSettings()

    const tenancy: any = JSON.parse(localStorage.getItem('tenantInfo'));
    if (tenancy) {
      this.tenancy = tenancy.name;
    } else {
      this.tenancy = 'Host Admin';
    }
    this.store.dispatch(getLanguages());
    this.store.select(selectDefaultLanguage).subscribe((res: any) => {
      if (res) {
        this.translate.use(res);
        let htmlTag = this.document.getElementsByTagName(
          'html'
        )[0] as HTMLHtmlElement;
        if (htmlTag) {
          htmlTag.dir = res === 'ar' ? 'rtl' : 'ltr';
        }
        this.sidenavItems = this.translateMenu(this.sidenavItems);
      }
    });

    this.userAuthService.getPermissions().subscribe((res) => {
      if (res) {
        this.filterNavItems(this.sidenavItemsOriginal, res, this.sidenavItems);
      } else {
        const storedPermission = localStorage.getItem('storedPermissions');
        const parsedPermission = JSON.parse(storedPermission);
        if (parsedPermission) {
          this.permissions = parsedPermission;
          this.filterNavItems(
            this.sidenavItemsOriginal,
            parsedPermission,
            this.sidenavItems
          );
        }
      }
      if (this.sidenavItems && this.sidenavItems.length > 0) {
        if (
          this.sidenavItems[0].children &&
          this.sidenavItems[0].children.length > 0
        ) {
          this.selectedMenu = this.sidenavItems[0].children[0].label;
          this.selectedMenuDescription =
            this.sidenavItems[0].children[0].description;
        } else {
          this.selectedMenu = this.sidenavItems[0].label;
          this.selectedMenuDescription = this.sidenavItems[0].description;
        }
      }
    });
    this.subscribeToAlerts();
    this.store.dispatch(getNotificationSettings());
    this.store.select(selectNotificationSettings).subscribe((res: any) => {
      if (res && res !== null) {
        this.receiveNotifications = res.receiveNotifications;
        this.notificationTypes = [];
        res.notifications.forEach((notification: any) => {
          const data: any = {
            name: notification.name,
            displayName: notification.displayName,
            isSubscribed: notification.isSubscribed,
          };
          this.notificationTypes.push(data);
        });
      }
    });
    this.store.dispatch(getUserNotification());

    this.store.select(selectAllNotification).subscribe((res: any) => {
      if (res && res.items && res.items.length) {
        this.unreadCount = res.unreadCount;
        this.notifications = [];
        res.items.forEach((element: any) => {
          this.notifications.push(this.format(element));
        });
        this.notifications.sort(function (a, b) {
          return a.state - b.state;
        });
      }
    });

    this.store.select(selectAllLanguages).subscribe((res: any) => {
      if (res && res.items && res.items.length > 0) {
        this.languageItems = [];
        const languages: any = [];
        res.items.forEach((item: any) => {
          if (item) {
            let icon: string = '';
            if (item.icon) {
              icon = item.icon.split(' ')[1];
              icon = icon.replace('-', '_');
            }
            this.languageItems.push({
              value: item.displayName,
              name: item.name,
              some: item.displayName,
              id: item.id,
              icon: icon,
              iconWidth: '21px',
              iconHeight: '14px',
            });
          }
          if (res.defaultLanguageName === item.name) {
            this.selectedLanguage.language = item.displayName;
            this.selectedLanguage.icon = item.icon.split(' ')[1];
          }
          languages.push(item.name);
        });
        if (res.defaultLanguageName) {
          this.store.dispatch(setDefaultLanguageForUI(res.defaultLanguageName));
          this.translate.use(res.defaultLanguageName);
        }

        // this.translate.addLangs(languages);
      }
    });
 

    if (this.router.url) {
      this.getMatchedRoute(this.sidenavItems);
    }

    this.store.dispatch(getMLATenancyData());

    this.store.select(selectTenancyData).subscribe((res) => {
      this.linkedAccountData = [];
      if (res && res.items) {
        const data: any = [];
        res.items.forEach((item: any) => {
          const _item: any = {
            id: item.id,
            username: item.username,
            tenancyName: item.tenancyName,
            tenantId: item.tenantId,
          };
          this.linkedAccountData.push(_item);
        });
      }
    });
 
    this.store.dispatch(getProfile());
    this.store.select(selectProfileInfo).subscribe((res: any) => {
      if (res) {
        this.profileData = res;
      }
    })

    this.store.dispatch(getDelegations());
    this.store.select(selectDelegationsInfo).subscribe((res: any) => {
      this.rdsDeligateTableData = [];
      if (res && res.items && res.items.length) {
        res.items.forEach((element: any) => {
          const item: any = {
            username: element.username,
            startTime: element.startTime,
            endTime: element.endTime,
            id: element.id,
          };
          this.rdsDeligateTableData.push(item);
        });
      }
    });
    const UsernameFilter: any = {
      excludeCurrentUser: true,
      filter: '',
      maxResultCount: 10,
      skipCount: 0,
    };
    this.store.dispatch(getUsername(UsernameFilter));
    this.store.select(selectUserFilter).subscribe((res: any) => {
      if (res && res.items && res.items.length) {
        res.items.forEach((res: any) => {
          const item: any = {
            value: res.value,
            some: res.name,
            isSelected: res.isSelected,
            icon: '',
            iconWidth: 0,
            iconHeight: 0,
            iconFill: false,
            iconStroke: true,
            isFree: res.isFree

          };
          this.usernameList.push(item);
        });

      }
    });
    this.sub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.accountPage = ['/login', '/forgot-password'].includes(event.url);
        this.getMatchedRoute(this.sidenavItems);
      }
    });
    // this.getProfilePicture();

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getProfilePicture();
  }
  onLanguageSelection(lan) {
    this.translate.use(lan);
    this.store.dispatch(setDefaultLanguageForUI(lan));
 const data: any = { name: lan };
          this.store.dispatch(setDefaultLanguage(data));
  }
  deleteDeligateuser(data: any) {
    if (data) {
      this.store.dispatch(deleteDelegations(data.id));
    }
  }
  saveDeligate(data: any) {
    if (data) {
      this.store.dispatch(saveDelegations(data));
    }
  }
  onProfileSave(passwordInfo: any) {
    if (passwordInfo) {
      this.store.dispatch(changePassword(passwordInfo));
    }
  }
  logoutEmitter($event) {
    if (this.counter < 1) {
      this.userAuthService.unauthenticateUser(false);
      this.counter++;
    }
  }
  deleteLinkaccount(data: any) {
    this.store.dispatch(deleteAccount(data));
  }
  onDownloadLink(data: any) {
    this.store.dispatch(PrepareCollectedData());
  }
  onLoginAttemptsRefresh(data: any) {
    this.store.dispatch(getLoginAttempts(data));
    this.store.select(selectAllLoginAttempts).subscribe((res: any) => {
      if (res && res.items) {
        this.LoginAttempts.LoginDatatable = [];
        res.items.forEach((element: any) => {
          const item: any = {
            browserInfo: element.browserInfo,
            clientIpAddress: element.clientIpAddress,
            clientName: element.clientName,
            creationTime: element.creationTime,
            result: element.result,
            tenancyName: element.tenancyName,
            userNameOrEmail: element.userNameOrEmail,
          };
          this.LoginAttempts.LoginDatatable.push(item);
        });
      }
    });
  }
  onAlertHide(event: any) {
    this.currentAlerts = event;
  }

  linkUser(data: any) {
    this.store.dispatch(linkToUser(data));
  }
  setAllNotificationAsRead($event) {
    this.store.dispatch(SetAllNotificationsAsRead());
  }
  setNotificationAsRead(data: any) {
    this.store.dispatch(
      SetNotificationRead({ id: data.userNotificationId })
    );
  }
  onUpdateNotificationSettings(data: any) {
    this.store.dispatch(updateNotificationSettings(data));
  }
  // onProfileData(event: any) {
  //   this.store.dispatch(getProfilepic());
  // }

  selectAllvisualSettings() {
    this.store.select(selectAllVisualsettings).subscribe((res: any) => {
      if (res && res.length > 0) {
        const header = JSON.parse(
          res[this.index].header.minimizeDesktopHeaderType
        );
        if (header) {
          this.fixedHeader = header.desktop;
          if (header.desktop) {
            this.document.getElementById('FixedHeaderOverFlow').style.overflow =
              'scroll';
            document.getElementsByTagName('html')[0].style.overflow = 'hidden';
          } else {
            this.document.getElementById('FixedHeaderOverFlow').style.overflow =
              'inherit';
            document.getElementsByTagName('html')[0].style.overflow = 'inherit';
          }
          this.FixedHeaderBody = header.desktop;
        }
        this.collapseRequired = res[this.index].menu.allowAsideMinimizing;

        if (res[this.index].menu.defaultMinimizedAside) {
          if (this.sideMenuCollapsed == false) {
            document.getElementById('sidenavCollapsed').click();
          }
        } else {
          if (this.sideMenuCollapsed == true) {
            document.getElementById('sidenavCollapsed').click();
          }
        }
      }
    });
  }
  redirectPath(event): void {
    this.currentAlerts = [];
    this.router.navigate([event.path]);
    var alertNode = document.querySelector('.alert');
    if (alertNode) {
      var alert = bootstrap.Alert.getInstance(alertNode);
      if (alert) {
        alert.close();
      }
    }
    this.shared.setTopNavTitle('');
    this.shared.setSideBarStatus(true)
  }
  redirect(event): void { }

  onCollapse(event): void {
    this.sideMenuCollapsed = event;
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
      this.showDelegationButtonSpinner = false;
    });
  }
  getMatchedRoute(menus): any {
    menus.forEach((menu: any, _index: number) => {
      if (menu.path === this.router.url) {
        this.activeMenu = menu;
        this.selectedMenu = menu.label;
        this.selectedMenuDescription = menu.description;
        // const rdsTopNavigationMfeConfig = this.rdsTopNavigationMfeConfig;
        // rdsTopNavigationMfeConfig.input.selectedMenu = menu.label;
        // rdsTopNavigationMfeConfig.input.selectedMenuDescription = menu.description;
        // this.rdsTopNavigationMfeConfig = rdsTopNavigationMfeConfig;
      } else if (menu.children) {
        this.getMatchedRoute(menu.children);
      }
    })
    // return menus.findIndex((x: any) => x.path === this.router.url);
  }
  format(userNotification) {
    let formatted = {
      userNotificationId: userNotification.id,
      title: userNotification.notification.notificationName,
      time: moment(
        new Date(userNotification.notification.creationTime),
        'YYYY-MM-DD hh:mm:ss'
      ).fromNow(),
      creationTime: userNotification.notification.creationTime,
      data: userNotification.notification.data,
      status: this.severity[userNotification.notification.severity],
      url: this.getUrl(userNotification),
      state: userNotification.state,
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
        return (
          '/app/admin/users?filterText=' +
          userNotification.notification.data.properties.emailAddress
        );
      case 'App.NewTenantRegistered':
        return (
          '/app/admin/tenants?filterText=' +
          userNotification.notification.data.properties.tenancyName
        );
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

  toggleBetweenMode(event: any) {
    let checked = event;
    let selectedTheme: string = 'default';
    if (!checked) {
      // this.theme.theme = 'dark';
      this.theme.setThemeMode('dark');
      localStorage.setItem('THEME', 'dark');
      selectedTheme = 'dark'
      localStorage.setItem('themeIndex', '7');

    } else {
      // this.theme.theme = 'light';
      this.theme.setThemeMode('light');
      localStorage.setItem('THEME', 'light');
      selectedTheme = 'default';
      localStorage.setItem('themeIndex', '12');

    }
    // this.alertService.setTheme(selectedTheme);
  }

  private filterNavItems(
    sidenavItemsOriginal,
    grantedPermissions: any,
    sidenavItems: any[]
  ) {
    sidenavItemsOriginal.forEach((node) => {
      if (
        grantedPermissions[node.permissionName] === 'true' ||
        node.permissionName == ''
      ) {
        let childrenValue = node.children ? [] : undefined;
        var item: any = {
          children: childrenValue,
          label: node.label,
          id: node.id,
          permissionName: node.permissionName,
          icon: node.icon,
          path: node.path,
          description: node.description,
          parent: node.parent,
          labelTranslationKey: node.labelTranslationKey,
          active: node.active,
        };

        if (node.children != undefined) {
          this.filterNavItems(node.children, grantedPermissions, item.children);
        }
        sidenavItems.push(item);
      }
    });
  }

  public getSideNavItems(): any {
    this.sidenavItems = this.translateMenu(this.sidenavItems);
    return this.sidenavItems;
  }

  private translateMenu(sidenavItems): any {
    sidenavItems.forEach((menu: any) => {
      menu.label = this.translate.instant(menu.labelTranslationKey);
      if (menu.children && menu.children.length > 0) {
        this.translateMenu(menu.children);
      }
    });
    return sidenavItems;
  }


  setTheme(selectedTheme: any): void {
    if (selectedTheme == "undefined" || selectedTheme == '' || selectedTheme == 'light' || selectedTheme == 'default' || selectedTheme == undefined || selectedTheme == null) {
      // this.theme.theme = 'light';
      this.theme.setThemeMode('light');
      localStorage.setItem('THEME', 'light');
      this.isLightMode = true;
    } else {
      // this.theme.theme = 'dark';
      this.theme.setThemeMode('dark');
      this.isLightMode = false;
    }
    if (selectedTheme !== undefined && selectedTheme !== '' && selectedTheme !== 'undefined') {
      if (selectedTheme == 'light') {
        selectedTheme = 'default';
      }
      const headEl = this.document.getElementsByTagName('head')[0];
      const existingLinkEl = this.document.getElementById(
        'client-theme'
      ) as HTMLLinkElement;
      const newLinkEl = this.document.createElement('link');

      if (existingLinkEl) {
        existingLinkEl.href = selectedTheme + '.css';
      } else {
        newLinkEl.id = 'client-theme';
        newLinkEl.rel = 'stylesheet';
        newLinkEl.href = selectedTheme + '.css';
        headEl.appendChild(newLinkEl);
      }
    }
  }

  toggle(): void {
    var element = document.getElementById('sidebar');
    element.style.display =
      element.style.display === 'none' || element.style.display == '' || !element.style.display ? 'block' : 'none';
    this.collapseRequired = false;
  }

  backToImpersonateAccount():void{
    this.store.dispatch(backToImpersonator());
  }


   getProfilePicture(): void {
    this._profileService.getProfilePicture().subscribe((result) => {
      
      if (result && result.profilePicture) {
        this.Profileurl = 'data:image/jpeg;base64,' + result.profilePicture;
        // this.onProfilePicUpdate.emit(this.Profileurl);
        
      }
    })
  }


  onUploadProfile(event): void{
    if (event.target.files && event.target.files[0]) {

      const file: File = event.target.files[0];

      const formData = new FormData();
      formData.append('file', file);
      formData.append('fileType', file.type);
      formData.append('fileName', 'ProfilePicture');
      formData.append('fileToken', this.guid());

      const upload$ = this.http.post("https://anzdemoapi.raaghu.io/Profile/UploadProfilePicture", formData);
      this.uploadSub = upload$.subscribe((result: any) => {
        this.updateProfilePicture(result.result.fileToken);
        console.log(result)
      });

    }

    // this._profileService.getProfilePicture().subscribe((result) => {
    //   if (result && result.profilePicture) {
    //     this.Profileurl = 'data:image/jpeg;base64,' + result.profilePicture;
    //     console.log(this.Profileurl);
    //     // this.onUploadProfile.emit(this.Profileurl);
    //   }
    //   this.onSelectFile(event);
    // })
    //  this.onSelectFile(event);
    // this.getProfilePicture(event);
  }


  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {

      const file: File = event.target.files[0];

      const formData = new FormData();
      formData.append('file', file);
      formData.append('fileType', file.type);
      formData.append('fileName', 'ProfilePicture');
      formData.append('fileToken', this.guid());

      const upload$ = this.http.post("https://anzdemoapi.raaghu.io/Profile/UploadProfilePicture", formData);
      this.uploadSub = upload$.subscribe((result: any) => {
        this.updateProfilePicture(result.result.fileToken);
        // this.onProfileData.emit(result);
        console.log(result)

      });

    }
  }

  updateProfilePicture(fileToken: string): void {
    const input = new UpdateProfilePictureInput();
    input.fileToken = fileToken;

    this._profileService
      .updateProfilePicture(input)
      .subscribe(() => {
        this.onUploadProfile(event);
      });
  }


  reset(): void {
    throw new Error('Method not implemented.');
  }

  guid(): string {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

}
