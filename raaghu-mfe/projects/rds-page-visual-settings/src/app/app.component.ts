import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  AlertService,
  ComponentLoaderOptions,
  UserAuthService,
} from '@libs/shared';
import { Store } from '@ngrx/store';
import {
  getVisualsettings,
  UpdateUiManagementSettings,
} from 'projects/libs/state-management/src/lib/state/Visual-settings/visual-settings.actions';
import { selectAllVisualsettings } from 'projects/libs/state-management/src/lib/state/Visual-settings/visual-settings.selector';
import { TranslateService } from '@ngx-translate/core';
import { ThemesService } from 'projects/libs/themes/src/public-api';

import {
  transition,
  trigger,
  query,
  style,
  animate,
} from '@angular/animations';
import { selectDefaultLanguage } from 'projects/libs/state-management/src/lib/state/language/language.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      transition('* <=> *', [
        query(':enter', [style({ opacity: 0 })], { optional: true }),
        query(
          ':leave',
          [style({ opacity: 1 }), animate('0.4s', style({ opacity: 0 }))],
          { optional: true }
        ),
        query(
          ':enter',
          [style({ opacity: 0 }), animate('0.4s', style({ opacity: 1 }))],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  isAnimation: boolean = true;
  selectedThemeIndex: any = '0';
  constructor(
    private store: Store,
    private alertService: AlertService,
    public translate: TranslateService,
    private theme: ThemesService,
    private userAuthService: UserAuthService
  ) {

  }
  visualsettingsData: any = [];
  rdsvisualsettingsMfeConfig: ComponentLoaderOptions;
  currentAlerts: any = [];
  public rdsAlertMfeConfig: ComponentLoaderOptions = {
    name: 'RdsCompAlert',
    input: {
      currentAlerts: this.currentAlerts,
    },
    output: {
      onAlertHide: (event: any) => {
        this.currentAlerts = event;
      },
    },
  };
  ngOnInit(): void {
    this.isAnimation = true;
    this.store.select(selectDefaultLanguage).subscribe((res: any) => {
      if (res) {
        this.translate.use(res);
      }
    });
    this.subscribeToAlerts();

    this.rdsvisualsettingsMfeConfig = {
      name: 'RdsCompVisualSettings',
      input: {
        listskin: this.listskin,
        listSubmenu: this.listSubmenu,
        visualsettingsItem: this.visualsettingsData,
        isShimmer: true,
      },
      output: {
        onSaveVisualsettingsData: (visualsettingsItem: any) => {
          if (visualsettingsItem) {
            this.store.dispatch(UpdateUiManagementSettings(visualsettingsItem));
          }
        },
        indexEmitter: (value: any) => {
          this.userAuthService.getVisualSettingIndex(value);
          if(value == '12'){
            this.theme.theme = 'light'

          }
        },
      },
    };
    this.store.dispatch(getVisualsettings());
    this.store.select(selectAllVisualsettings).subscribe((res: any) => {
      this.visualsettingsData = [];
      if (res && res.length > 0) {
        this.isAnimation = false;
        this.visualsettingsData = res;
        const mfeConfig = this.rdsvisualsettingsMfeConfig;
        mfeConfig.input.visualsettingsItem = [...this.visualsettingsData];
        mfeConfig.input.isShimmer = false;
        this.rdsvisualsettingsMfeConfig = mfeConfig;
      }
    });
  }

  listskin: any[] = [
    { value: 'light', displayText: 'Light' },
    { value: 'dark', displayText: 'Dark' },
  ];
  listSubmenu: any[] = [
    { value: 'false', displayText: 'Accordian' },
    { value: 'true', displayText: 'Dropdown' },
  ];

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
 
}
