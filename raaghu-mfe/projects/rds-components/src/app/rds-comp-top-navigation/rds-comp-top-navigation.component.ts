import { Component, EventEmitter, Inject, Injector, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService, SharedService, UserAuthService } from '@libs/shared';
import { TranslateService } from '@ngx-translate/core';
let that: any;
declare var bootstrap: any;
@Component({
  selector: 'rds-comp-top-navigation',
  templateUrl: './rds-comp-top-navigation.component.html',
  styleUrls: ['./rds-comp-top-navigation.component.scss']
})
export class RdsTopNavigationComponent implements OnInit {

  @Input() logo: string = '/static/media/.storybook/assets/raaghu-logo.svg';
  @Input() projectName: string = '';
  @Input() selectedMenu: string = 'Dashboard';
  @Input() selectedMenuDescription: string = 'Statics and reports';
  @Input() languageItems = [];
  @Input() selectedLanguage: any = { language: '', icon: '' };
  @Input() profilePic: string = 'https://anzstageui.raaghu.io/assets/profile-picture-circle.svg';
  @Output() toggleEvent = new EventEmitter<boolean>();
  @Output() onLanguageSelection = new EventEmitter<any>();
  @Output() onLogout = new EventEmitter<any>();
  @Input() FixedHeader: boolean = true
  @Input() UserName: string = '';
  @Input() tenantName: string = '';
  tabName = 'Dashboard';

  breadcrumbsItems: any[] = [
    {
      name: "Pages",
      disabled: true
    },
    {
      name: "Dashboard",
      disabled: true
    }
  ]


  profileItems: any = [
    { id: 1, value: 'Linked Accounts', some: 'Linked Accounts' },
    { id: 2, value: 'My Accounts', some: 'My Accounts' },
    { id: 3, value: 'Security Logs', some: 'Security Logs' },
    { id: 4, value: 'Personal Data', some: 'Personal Data' },
    { id: 5, value: 'Log out', some: 'Log out' },
  ];
  @Output() viewProfileCanvas = new EventEmitter<any>();

  constructor(private router: Router, private injector: Injector,
    private alertService: AlertService,
    private userService: UserAuthService,
    private shared: SharedService,
    public translate: TranslateService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const topNavTitle = localStorage.getItem('topnavTitle')
    if (topNavTitle != null) {
      this.tabName = topNavTitle;
      this.breadcrumbsItems[1].name = topNavTitle;
    }
    this.UserName = this.userService.userName;
    this.shared.getTopNavTitle().subscribe((res: any) => {
      if (res != '') {
        this.tabName = res;
        this.breadcrumbsItems[1].name = res;
      } else {
        this.tabName = 'Dashboard'
      }
    });
    this.shared.getSideBarStatus().subscribe((res: any) => {
      if (res === true) {
        const element: any = document.querySelector('.navbar-toggler');
        if (element) {
          const style = getComputedStyle(element)
          if (style && style.display && style.display === 'block') {
            element.click();
          }
        }

        this.shared.setSideBarStatus(false);
      }
    });
    this.shared.getLanguageStatus().subscribe(res => {
      if (res) {
        this.selectedLanguage.language = res.englishName;
        this.selectedLanguage.icon = "gb";
      }
    });
  }

  onProfileSelect(item: any) {
    if (item.value != 'Log out')
      this.viewProfileCanvas.next(item.value);
    else this.onLogout.emit();
  }
  getProfilePic(event: any): void {
    this.profilePic = event;
  }


  onLanguageSelect(lan: any): void {
    this.selectedLanguage.language = lan.item.some;
    this.selectedLanguage.icon = lan.item.icon;
    this.onLanguageSelection.emit(lan.item.icon)
    
  }

  onToggleButton() {
    this.toggleEvent.emit();
  }




}

