import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedService } from '@libs/shared';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-rds-comp-visual-settings',
  templateUrl: './rds-comp-visual-settings.component.html',
  styleUrls: ['./rds-comp-visual-settings.component.scss']
})
export class RdsCompVisualSettingsComponent implements OnInit {

  constructor(public translate: TranslateService, private sharedService: SharedService) { }
  ngOnInit(): void {
    if (this.visualsettingsItem && this.visualsettingsItem.length) {
      this.theme = JSON.parse(JSON.stringify(this.visualsettingsItem[0].theme));
      this.visualSettingsFooter = JSON.parse(JSON.stringify(this.visualsettingsItem[0].footer));
      this.visualSettingsHeader = JSON.parse(JSON.stringify(this.visualsettingsItem[0].header));
      this.visualSettingsLayout = JSON.parse(JSON.stringify(this.visualsettingsItem[0].layout));
      this.visualSettingsMenu = JSON.parse(JSON.stringify(this.visualsettingsItem[0].menu));
      this.visualSettingsSubHeader = JSON.parse(JSON.stringify(this.visualsettingsItem[0].subHeader));
    }
  }
  selectedThemeIndex: any = '0';
  dataLoaded = false;
  @Input() navtabItems: any;
  @Input() listskin: any;
  @Input() listSubmenu: any;
  @Input() theme: string = 'default';
  @Input() visualSettingsHeader: any = {};
  @Input() visualSettingsSubHeader: any = {}
  @Input() visualSettingsMenu: any = {}
  @Input() isShimmer: boolean = false;
  @Input() visualSettingsFooter: any = {}
  @Input() visualSettingsLayout: any = {}
  @Input() public visualsettingsItem: any[] = [];
  @Input() visualsetting: any

  @Output() onSaveVisualsettingsData = new EventEmitter<any>();

  ngDoCheck(): void {
    if (this.visualsettingsItem && this.visualsettingsItem.length && !this.dataLoaded) {
      this.theme = JSON.parse(JSON.stringify(this.visualsettingsItem[0].theme));
      this.visualSettingsFooter = JSON.parse(JSON.stringify(this.visualsettingsItem[0].footer));
      this.visualSettingsHeader = JSON.parse(JSON.stringify(this.visualsettingsItem[0].header));
      this.visualSettingsLayout = JSON.parse(JSON.stringify(this.visualsettingsItem[0].layout));
      this.visualSettingsMenu = JSON.parse(JSON.stringify(this.visualsettingsItem[0].menu));
      this.visualSettingsSubHeader = JSON.parse(JSON.stringify(this.visualsettingsItem[0].subHeader));
    }
  }

  saveVisualSettings() {
    this.onSaveVisualsettingsData.emit({
      theme: this.theme,
      footer: this.visualSettingsFooter,
      header: this.visualSettingsHeader,
      layout: this.visualSettingsLayout,
      menu: this.visualSettingsMenu,
      subHeader: this.visualSettingsSubHeader
    });
  }
  getThemeSettings(index: any) {
    this.dataLoaded = true;
    this.selectedThemeIndex = index;

    this.theme = JSON.parse(JSON.stringify(this.visualsettingsItem[index].theme));
    this.visualSettingsFooter = JSON.parse(JSON.stringify(this.visualsettingsItem[index].footer));
    this.visualSettingsHeader = JSON.parse(JSON.stringify(this.visualsettingsItem[index].header));
    this.visualSettingsLayout = JSON.parse(JSON.stringify(this.visualsettingsItem[index].layout));
    this.visualSettingsMenu = JSON.parse(JSON.stringify(this.visualsettingsItem[index].menu));
    this.visualSettingsSubHeader = JSON.parse(JSON.stringify(this.visualsettingsItem[index].subHeader));
  }
  getNavTabItems(): any {
    this.navtabItems[0].label = this.translate.instant('Header Bar');
    this.navtabItems[1].label = this.translate.instant('Sub header');
    this.navtabItems[2].label = this.translate.instant('Menu');
    this.navtabItems[3].label = this.translate.instant('Footer');
    return this.navtabItems;
  }
  
  onSelectnode(event: any) {
    if (event > 0) {
      this.sharedService.setTopNavTitle(this.navtabItems[event].label);
    } else {
      this.sharedService.setTopNavTitle('');
    }
  }
}
