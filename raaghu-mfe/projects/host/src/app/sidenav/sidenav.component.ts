import { Component, Inject, Injector, Input, OnInit, SimpleChanges } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ComponentLoaderOptions, MfeBaseComponent, ServiceProxy, SharedService, UserAuthService } from '@libs/shared';
import { Store } from '@ngrx/store';
import { DateTime } from 'luxon';
import { AlertService } from 'projects/libs/shared/src/lib/alert.service';
import { TranslateService } from '@ngx-translate/core';
import { PrepareCollectedData } from 'projects/libs/state-management/src/lib/state/DownloadData/download-data.action';
import { DatePipe, DOCUMENT } from '@angular/common';
import { slideInAnimation } from '../animation';
import { RouterOutlet } from '@angular/router';
import * as moment from 'moment'
import { TableHeader } from 'projects/rds-components/src/models/table-header.model';
import { getSecuritylogs } from 'projects/libs/state-management/src/lib/state/security-logs/security-logs.actions';
import { selectSecurityLogs } from 'projects/libs/state-management/src/lib/state/security-logs/security-logs.selector';
import { deletePersonalData, downloadData, getProfilePictureData, logout, requestPersonalData } from 'projects/libs/state-management/src/lib/state/profile-settings/profile-settings.actions';
import { selectProfilePictureData } from 'projects/libs/state-management/src/lib/state/profile-settings/profile-settings.selectors';
import { getLinkUserData, getPersonalData, getProfileSettings, getTwoFactor, saveChangedPassWord, saveProfile, saveProfilePicture, saveTwoFactor } from 'projects/libs/state-management/src/lib/state/profile-settings/profile-settings.actions';
import { selectAllProfileSettings, selectlinkUser, selectPersonalData, selectTwoFactor } from 'projects/libs/state-management/src/lib/state/profile-settings/profile-settings.selectors';
import { getLanguages } from 'projects/libs/state-management/src/lib/state/language/language.actions';
declare var bootstrap: any;
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    slideInAnimation
  ],
})
export class SidenavComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  profilePicId = {
    id: '6f9f495e-f308-9a83-e524-3a079ce6f2f5'
  }

  tenantName = 'Admin';

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
  usernameList: any = [];

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
      label: 'Identity Management', labelTranslationKey: 'Identity Management', id: 'admin', permissionName: '', icon: 'identity_management', path: '',
      children: [
        { label: 'Organization Units', labelTranslationKey: 'Organization Units', id: '', permissionName: 'AbpIdentity.OrganizationUnits', icon: 'organization', path: '/pages/organization-unit', description: 'Use organization units to organize users and entities', descriptionTranslationKey: 'Use organization units to organize users and entities' },
        { label: 'Roles', labelTranslationKey: 'Roles', id: '', permissionName: 'AbpIdentity.Roles', icon: 'roles', path: '/pages/role', description: 'Use roles to group permissions', descriptionTranslationKey: 'Use roles to group permissions' },
        { label: 'Users', labelTranslationKey: 'Users', id: '', permissionName: 'AbpIdentity.Users', icon: 'users', path: '/pages/user', description: 'Manage users and permissions', descriptionTranslationKey: 'Manage users and permissions' },
        { label: 'Claim Types', labelTranslationKey: 'Claim Types', id: '', permissionName: 'AbpIdentity.ClaimTypes', icon: 'users', path: '/pages/user', description: 'Manage users and permissions', descriptionTranslationKey: 'Manage users and permissions' },
        { label: 'Security-logs', labelTranslationKey: 'Security-logs', id: '', permissionName: 'AbpIdentity.SecurityLogs', icon: 'tenant', path: '/pages/security-logs', description: 'Manage your cart', descriptionTranslationKey: 'Manage your cart' },
      ],
    },
    {
      label: 'Identity Server', labelTranslationKey: 'Identity Server', id: 'admin', permissionName: '', icon: 'identity_server', path: '',
      children: [
        { label: 'Client', labelTranslationKey: 'Client', id: '', permissionName: 'IdentityServer.Client', icon: 'users', path: '/pages/client', description: 'Manage clients and permissions', descriptionTranslationKey: 'Manage users and permissions' },
        { label: 'Identity Resource', labelTranslationKey: 'Identity Resources', id: '', permissionName: 'IdentityServer.IdentityResource', icon: 'home', path: '/pages/identityResources', description: 'Show and change application settings', descriptionTranslationKey: 'Show and change application settings' },
        { label: 'Api Resources', labelTranslationKey: 'Api Resources', id: '', permissionName: 'IdentityServer.ApiResource', icon: 'home', path: '/pages/apiresources', description: 'Show and change application settings', descriptionTranslationKey: 'Show and change application settings' },
        { label: 'Api Scopes', id: 'ApiScope',labelTranslationKey: 'Api Scopes', permissionName: 'IdentityServer.ApiScope', icon: 'settings', path: '/pages/apiScope', description: 'Home > Identity Server > Api Scope' },
      ],
    },
    {
      label: 'Language Management', labelTranslationKey: 'Language Management', id: 'admin', permissionName: '', icon: 'languages', path: '',
      children: [
        { label: 'Language', labelTranslationKey: 'Language', id: '', permissionName: 'LanguageManagement.Languages', icon: 'languages', path: '/pages/language', description: 'Manage user interface languages', descriptionTranslationKey: 'Statistics and reports' },
        { label: 'Language-Text', labelTranslationKey: 'Language-Text', id: '', permissionName: 'LanguageManagement.LanguageTexts', icon: 'languages', path: '/pages/languagetext', description: 'Manage user interface languagesText', descriptionTranslationKey: 'Statistics and reports' },
      ],
    },
    { label: 'Text Template', labelTranslationKey: 'Text Template', id: '', permissionName: 'TextTemplateManagement.TextTemplates', icon: 'text_template', path: '/pages/text-template', description: 'Show and change application settings', descriptionTranslationKey: 'Show and change application settings' },
    { label: 'Audit logs', labelTranslationKey: 'Audit logs', id: '', permissionName: 'AuditLogging.AuditLogs', icon: 'audit_logs', path: '/pages/audit-logs', descriptionTranslationKey: '' },
    // { label: 'UI Components', labelTranslationKey: 'UI Components', id: '', permissionName: '', icon: 'demo_ui', path: '/pages/demo-ui', description: '', descriptionTranslationKey: '' },
    { label: 'Settings', labelTranslationKey: 'Settings', id: '', permissionName: 'AbpIdentity.SettingManagement', icon: 'setting', path: '/pages/settings', description: 'Show and change application settings', descriptionTranslationKey: 'Show and change application settings' },

  ];


  logo: 'assets/raaghu_icon.png';
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
  FixedHeaderBody: boolean = false;




  securityLogs: any[] = [];

  profilePicUrl: any;

  constructor(private router: Router,
    private store: Store,
    public datepipe: DatePipe,
    private alertService: AlertService,
    public translate: TranslateService,
    private shared: SharedService,
    private userAuthService: UserAuthService,
    private serviceProxies: ServiceProxy,
    @Inject(DOCUMENT) private document: Document
  ) {
  }

  
  getdata() {
  }
  tenancyTableData = [];
  sidenavItems = [];
  personalData: any[] = [];

  permissions: any;
  onLanguageSelection(lan){
    this.translate.use(lan);
    this.userAuthService.getApplicationConfiguration(lan,false);
  }

  onDownloadLink (data: any){
    this.store.dispatch(PrepareCollectedData());
  }

  ngOnInit(): void {
    if(this.userAuthService.currentLanguage){
      this.translate.use(this.userAuthService.currentLanguage);
    }

    
    this.store.dispatch(getProfilePictureData(this.profilePicId));
    this.store.select(selectProfilePictureData).subscribe(res => {
      if (res) {
        this.profilePicUrl = 'data:image/jpeg;base64,' + res.fileContent;
        this.profilePic = 'data:image/jpeg;base64,' + res.fileContent;
      };
    });
    this.store.dispatch(getProfileSettings());
    this.store.select(selectAllProfileSettings).subscribe((res: any) => {
      if (res) {
        [res].forEach(ele => {
          this.tenantName = ele.name;
          this.profileData.name = ele.name;
          this.profileData.surname = ele.surname;
          this.profileData.email = ele.email;
          this.profileData.phoneNumber = ele.phoneNumber;
          this.profileData.userName = ele.userName;
          this.profileData.concurrencyStamp = ele.concurrencyStamp
        });
      }
    });

    const storedPermission = localStorage.getItem('storedPermissions');
    const parsedPermission = JSON.parse(storedPermission);
    if (parsedPermission) {
      this.permissions = parsedPermission;
      this.filterNavItems(this.sidenavItemsOriginal, parsedPermission, this.sidenavItems);
    }

    this.userAuthService.localization.subscribe((ele:any ) => {
      ele.forEach((element:any) => {
        const data :any = {
          value: element.displayName,
          some: element.displayName,
          id : element.id,
          icon: element.flagIcon,
          iconWidth: '21px',
          iconHeight: '14px',
        }
        this.languageItems.push(data);
      })
     
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
    }

    this.sub = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.accountPage = ["/login", "/forgot-password"].includes(event.url)
      }
    })
    // if (this.sidenavItems && this.sidenavItems.length > 0) {
    //   if (this.sidenavItems[0].children && this.sidenavItems[0].children.length > 0) {
    //     this.selectedMenu = this.sidenavItems[0].children[0].label;
    //     this.selectedMenuDescription = this.sidenavItems[0].children[0].description;
    //   } else {
    //     this.selectedMenu = this.sidenavItems[0].label;
    //     this.selectedMenuDescription = this.sidenavItems[0].description;
    //   }
    // }
    this.sub = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.accountPage = ["/login", "/forgot-password"].includes(event.url)
      }
    })
  }
  toggleEvent() {
    var element = document.getElementById("sidebar");
    element.style.display = (element.style.display === 'none') ? 'block' : 'none'
  }
  onLogout(){
    this.userAuthService.unauthenticateUser();
    localStorage.removeItem('storedPermissions');
    localStorage.removeItem('userName');
    localStorage.removeItem('userId');
    localStorage.removeItem('userNameInfo');
    localStorage.setItem('userAuthenticated', JSON.stringify({ value: false }));
    this.router.navigate(['/login']);
  }
 

  onProfileSave(event: any) {
    if (event.changedPassword.currentPassword != '' && event.changedPassword.newPassword != '') this.store.dispatch(saveChangedPassWord(event));
    else {
      this.store.dispatch(saveProfile(event));
      this.store.dispatch(saveTwoFactor(event));
      this.close();
    }
  }

  getProfilePic(event: any): void {
    const item: any = {
      data: event,
      id: '6f9f495e-f308-9a83-e524-3a079ce6f2f5'
    };
    this.store.dispatch(saveProfilePicture(item));
    this.store.select(selectProfilePictureData).subscribe(res => {
      if (res) this.profilePicUrl = 'data:image/jpeg;base64,' + res.fileContent;
    });
  }

  onDownloadData(event: any) {
    const item = {
      id: localStorage.getItem('currentUser')
    }
    this.store.dispatch(downloadData(item));
  }
  onRequestData() {
    this.store.dispatch(requestPersonalData());
  }

  onDeleteData() {
    this.store.dispatch(deletePersonalData())
  }

  redirectPath(event): void {
    console.log('event path', event);
    localStorage.setItem('topnavTitle', event.label);
    this.selectedMenu = event.label;
    this.selectedMenuDescription = event.description;
    this.router.navigate([event.path]);
    var alertNode = document.querySelector('.alert');
    if (alertNode) {
      var alert = bootstrap.Alert.getInstance(alertNode);
      alert.close();
    }
    this.shared.setTopNavTitle(event.label);

  }

  viewProfileCanvas(value: string){
    var offcanvas = document.getElementById('profile-canvas');
    var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
    bsOffcanvas.show();
    this.canvasTitle = value;
    if (value == 'My Accounts') {
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
      this.store.dispatch(getTwoFactor());
      this.store.select(selectTwoFactor).subscribe(res => {
        if (res) this.profileData.twoFactorEnabled = true;
      });
    } else if (value == 'Security Logs') {
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
    } else if (value == 'Linked Accounts') {
      this.store.dispatch(getLinkUserData());
      this.store.select(selectlinkUser).subscribe(res => {
        if (res) {
          this.linkedAccountData = [
            { targetUserId: '1', targetUserName: 'sample', targetTenantId: '1.1', targetTenantName: 'set', directlyLinked: false },
            { targetUserId: '2', targetUserName: 'test', targetTenantId: '2.1', targetTenantName: 'get', directlyLinked: true },
            { targetUserId: '1', targetUserName: 'sample', targetTenantId: '1.1', targetTenantName: 'set', directlyLinked: false },
            { targetUserId: '2', targetUserName: 'test', targetTenantId: '2.1', targetTenantName: 'get', directlyLinked: true },
            { targetUserId: '1', targetUserName: 'sample', targetTenantId: '1.1', targetTenantName: 'set', directlyLinked: false },
            { targetUserId: '2', targetUserName: 'test', targetTenantId: '2.1', targetTenantName: 'get', directlyLinked: true }
          ];
          // this.linkedAccountData = res.items;
        }
      });
    } else if (value == 'Personal Data') {
      this.store.dispatch(getPersonalData('6f9f495e-f308-9a83-e524-3a079ce6f2f5'));
      this.store.select(selectPersonalData).subscribe(res => {
        if (res) {
          this.personalData = res.items;
        }
      });
    }

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

  public currentTheme() {
    //return this.theme.current;
  }
  public selectTheme(value: string): void {
    //this.theme.current = value;
  }
  set dark(enabled: boolean) {
    //this.theme.theme = enabled ? 'dark' : null;
  }

  toggleBetweenMode(event: any) {
    let checked = event;
    if (!checked) {
      //this.theme.theme = 'dark';
    }
    else {
      //this.theme.theme = 'light';
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
    this.sidenavItems = this.translateMenu(this.sidenavItems);
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









