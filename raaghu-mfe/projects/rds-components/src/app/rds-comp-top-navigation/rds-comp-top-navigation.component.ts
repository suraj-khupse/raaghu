import { Component, DoCheck, EventEmitter, Inject, Injector, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentLoaderOptions, MfeBaseComponent, SharedService, ThemeSettingsDto } from '@libs/shared';
import { TranslateService } from '@ngx-translate/core';
import { TableHeader } from '../../models/table-header.model';
import { DOCUMENT } from '@angular/common';
let that: any;
declare var bootstrap: any;
@Component({
  selector: 'app-rds-top-navigation',
  templateUrl: './rds-comp-top-navigation.component.html',
  styleUrls: ['./rds-comp-top-navigation.component.scss']
})
export class RdsTopNavigationComponent extends MfeBaseComponent implements OnInit, DoCheck, OnChanges {
  // rdsProfileMfeConfig: ComponentLoaderOptions;

  showOffcanvas: boolean = false;
  themes: any = [

    { value: 'default', some: 'default', id: 1 },
    { value: 'accessible', some: 'accessible', id: 2 },
    { value: 'blue', some: 'blue', id: 3 },
    { value: 'green', some: 'green', id: 4 },
    { value: 'orange', some: 'orange', id: 5 }
  ]
  @Input()
  LoginAttempts: any = {};
  @Input() LinkAccounts: []
  @Input() logo: string = '';
  @Input() projectName: string = '';
  @Input() sideMenuCollapsed: boolean = false;
  @Input() isPageWrapper: boolean = false;
  @Input() selectedMenu: string = 'Dashboard';
  @Input() backgroundColor: string = 'rgb(245, 245, 250)';
  @Input() selectedMenuDescription: string = 'Statics and reports';
  @Input() userList: any = [];
  @Input() languageItems = [];
  @Input() defaultLanguage: string = '';
  selectedLanguage: any = { language: '', icon: '' };
  @Input() notificationData = [];
  @Input() tenancy: string = 'Host Admin';
  @Input() offCanvasId: string = ''
  @Input() profileLink: string = '';
  @Input() UserName: string = 'Wai Technologies';
  @Input() profilePic: string = '../assets/profile-picture-circle.svg';
  @Input() notificationLink: string = '';
  @Input() profileData: any;
  @Input() rdsDeligateTableData: any = [];
  @Input() unreadCount: any = 0;
  @Input() notificationTypes: any = [];
  @Input() receiveNotifications: any;
  @Output() deleteLinkaccount = new EventEmitter<any>();
  @Output() deleteDeligateuser = new EventEmitter<any>();
  @Output() linkUser = new EventEmitter<any>();
  @Output() redirection = new EventEmitter<any>();
  @Output() saveDeligate = new EventEmitter<any>();
  @Output() toggleEvent = new EventEmitter<boolean>();
  @Output() setAllNotificationAsRead = new EventEmitter<boolean>();
  @Output() onLoginAttemptsRefresh = new EventEmitter<any>();
  @Output() onLanguageSelection = new EventEmitter<any>();
  @Output() onDownloadLink = new EventEmitter<any>();
  @Output() setNotificationAsRead = new EventEmitter<any>();
  @Output() onUpdateNotificationSettings = new EventEmitter<any>();
  @Input() linkedAccountHeaders: any = [];
  @Input() linkedAccountData: any = [];
  tabName: string = '';
  navtabItems: any = [
    { label: 'Manage Linked Accounts', translationKey: 'Manage Linked Accounts', tablink: '#nav-LinkAccount', ariacontrols: 'nav-LinkAccount', Image: 'bi bi-pencil-fill', icon: 'manage_linked', subText: 'Manage accounts linked to your account', subtextTranslationKey: 'Manage accounts linked to your account', showoffcanvas: true },
    { label: 'Manage Authority Delegation', translationKey: 'Manage Authority Delegation', tablink: '#nav-Deligation', ariacontrols: 'nav-Deligation', icon: 'manage_authority', subText: 'Manage authority accounts', subtextTranslationKey: 'Manage authority accounts', showoffcanvas: true },
    { label: 'Login Attempts', translationKey: 'Login Attempts', tablink: '#nav-Attempts', ariacontrols: 'nav-Attempts', icon: 'login_attempts', subText: 'See recent login attempts for your account', subtextTranslationKey: 'See recent login attempts for your account', showoffcanvas: true },
    { label: 'My Settings', translationKey: 'My Settings', tablink: '#nav-Settings', ariacontrols: 'nav-Settings', icon: 'my_settings', subText: 'Change your account settings', subtextTranslationKey: 'Change your account settings', showoffcanvas: true },
    { label: 'Download Collected Data', translationKey: 'Download Collected Data', tablink: '#nav-DownLoad', ariacontrols: 'nav-DownLoad', icon: 'download_data', subText: 'Download data belongs to your account', subtextTranslationKey: 'Download data belongs to your account', showoffcanvas: false },
  ]
  userdata: any = {
    ProfileName: "Test",
    EmailAddress: "",
    UserName: this.UserName,
    CurrentPassword: "",
    NewPassword: "",
    ConFNewPassword: "",
  }

  rdsDeligateTableHeader: TableHeader[] = [
    { displayName: 'User name', dataLength: 30, dataType: 'text', key: 'username' },
    { displayName: 'Start time', dataType: 'date', sortable: false, key: 'startTime' },
    { displayName: 'End time', dataType: 'date', sortable: false, key: 'endTime' }];
  // rdsDeligateTableData: any = [];
  recordsPerpage: number = 5;

  pagination: boolean = true;
  tableWidth: string = '100%';
  tableStyle: string = 'light';

  listusename: any[] = [
    { value: 'Admin1', some: 'Admin', status: 'All', isSelected: false },
    { value: 'jack', some: 'jack1', status: 'jack1', isSelected: false },
    { value: 'John', some: 'John', status: 'John', isSelected: false },
    { value: 'Niel', some: 'Niel', status: 'Niel', isSelected: false },
  ]
  dounloadata: any[] = [
    { DateofData: '08/07/2022', NummberofDates: '5days ago', downloadUrl: 'assets/Group.jpg' },
    { DateofData: '08/07/2022', NummberofDates: '5days ago', downloadUrl: 'assets/DeleteIcon.jpg' },
    { DateofData: '08/07/2022', NummberofDates: '5days ago', downloadUrl: 'assets/Photp.jpeg' }
  ]
  openNotification: boolean;


  @Output() onProfileSave = new EventEmitter<any>();

  constructor(private router: Router, private injector: Injector,
    private shared: SharedService,
    public translate: TranslateService, @Inject(DOCUMENT) private document: Document
  ) {
    super(injector);
    that = this;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.defaultLanguage) {
      this.selectedLanguage = this.defaultLanguage;
    }
  }

  ngOnInit(): void {
    this.shared.getTopNavTitle().subscribe((res: any) => {
      this.tabName = res;
    });

    var notificationDropdown = document.getElementById('navbarDropdownMenuLink')
    notificationDropdown.addEventListener('hide.bs.dropdown', function () {
      that.notificationData.forEach((x: any) => {
        x.selected = false;
      })
    })
    // const existingLinkEl = this.document.getElementById('client-theme') as HTMLLinkElement;
    // existingLinkEl.href = 'default.css';
    const event = 'default';
    this.onThemeSelect(event);

    if (this.defaultLanguage) {
      this.selectedLanguage = this.defaultLanguage;
    }


    this.on('logout').subscribe(r => {
      this.emitEvent('logout-returns', {});
    })

    this.on('tenancyDataAgain').subscribe(res => {
      console.log(res);
      this.emitEvent('tenancyDataReturns', res);
    })
  }



  ngDoCheck(): void {
  }

  redirect(type: any) {
    this.redirection.emit(type);
  }

  openNotificationComp() {
    this.openNotification = !this.openNotification;
  }

  redirectToSettings() {
    this.router.navigateByUrl('/pages/settings');
  }
  deleteLink(event: any) {
    this.deleteLinkaccount.emit(event);
  }
  saveLinkUsers(event: any) {
    this.linkUser.emit(event);
  }
  viewOffcanvas(): void {
    this.showOffcanvas = true;
    var offcanvas = document.getElementById(this.offCanvasId);
    var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
    bsOffcanvas.show()
  }
  onLanguageSelect(lan: any): void {
    if (lan && lan.item) {
      this.selectedLanguage.language = lan.item.some;
      this.selectedLanguage.icon = lan.item.icon;
      this.onLanguageSelection.emit(lan.item.name)
    }
  }
  onToggleButton(): void {
    this.toggleEvent.emit();
  }
  onThemeSelect(event: any) {

    console.log(event)
    const headEl = this.document.getElementsByTagName('head')[0];
    const existingLinkEl = this.document.getElementById('client-theme') as HTMLLinkElement;
    const newLinkEl = this.document.createElement('link');

    if (existingLinkEl) {
      existingLinkEl.href = event + '.css';
    } else {
      newLinkEl.id = 'client-theme'
      newLinkEl.rel = 'stylesheet';
      newLinkEl.href = event + '.css';
      headEl.appendChild(newLinkEl);
    }
  }
}
