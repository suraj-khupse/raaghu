import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { AlertService, ComponentLoaderOptions, SharedService } from '@libs/shared';
import { clearcache, deletecache, getmaintenances, getWebsitelog } from 'projects/libs/state-management/src/lib/state/maintenance/maintenance.actions';
import { selectAllmaintenance, selectAllWebsitelog } from 'projects/libs/state-management/src/lib/state/maintenance/maintenance.selector';
declare var $: any;
import { transition, trigger, query, style, animate, state, } from '@angular/animations';
import { selectDefaultLanguage } from 'projects/libs/state-management/src/lib/state/language/language.selector';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // animations: [
  //   trigger('fadeAnimation', [
  //     transition('* <=> *', [
  //       query(':enter',
  //         [
  //           style({ opacity: 0 })
  //         ],
  //         { optional: true }
  //       ),
  //       query(':leave',
  //         [
  //           style({ opacity: 1 }),
  //           animate('0.4s', style({ opacity: 0 }))
  //         ],
  //         { optional: true }
  //       ),
  //       query(':enter',
  //         [
  //           style({ opacity: 0 }),
  //           animate('0.4s', style({ opacity: 1 }))
  //         ],
  //         { optional: true }
  //       )
  //     ])
  //   ])
  // ]
  animations: [
    trigger('fadeAnimation', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ]),
  ]
})
export class AppComponent implements OnInit {
  isAnimation: boolean = true;

  title = 'maintenance';
  alertData: any = {
    iconUrl: "delete",
    colorVariant: "danger",
    alertConfirmation: "Are you sure ?",
    messageAlert: "All items will be deleted",
    CancelButtonLabel: "Cancel",
    DeleteButtonLabel: "Delete"
  }
  public rdsAlertMfeConfig: ComponentLoaderOptions;
  public rdscacheMfeConfig: ComponentLoaderOptions;
  public rdswebsiteMfeConfig: ComponentLoaderOptions;

  @Input() listItems1 = [
    { value: 'Clear All', some: 'value', key: 'clearall', icon: 'delete', iconWidth: '20px', iconHeight: '20px' },
  ];
  @Input() listItems2 = [
    { value: 'Refresh', some: 'value', key: 'refresh', icon: 'refresh', iconWidth: '20px', iconHeight: '20px' },
    { value: 'Download All', some: 'value', key: 'downloadall', icon: 'download_data', iconWidth: '20px', iconHeight: '20px' },
  ];
  cashedata: any = []
  websiteLogData: any[];
  isShimmer: boolean = false;
  tableData: any = [];
  currentAlerts: any = [];

  constructor(private store: Store,
    private sharedService: SharedService,
    public translate: TranslateService,
    private alertService: AlertService) { }




  ngOnInit(): void {
    this.subscribeToAlerts();
    this.isAnimation = true;
    // this.rdscacheMfeConfig = {
    //   name: 'RdsCompCache',
    //   input: {
    //     cashedata: this.cashedata,
    //     // dataSource: this.cashedata
    //   },
    //   output: {
    //     onClearCache: (eventData: any) => {
    //       const data: any = {
    //         id: eventData
    //       }
    //       this.store.dispatch(deletecache(data));
    //       const index = this.cashedata.findIndex((x: any) => x.name === eventData);
    //       if (index !== -1) {
    //         this.cashedata.splice(index, 1);
    //         const mfeConfig = this.rdscacheMfeConfig
    //         mfeConfig.input.tableData = [... this.cashedata];
    //         this.rdscacheMfeConfig = { ...mfeConfig };
    //       }
    //     }
    //   }
    // };
    // this.rdswebsiteMfeConfig = {
    //   name: 'RdsCompWebsiteLog',
    //   input: {
    //     websiteLogData: this.websiteLogData
    //   },
    //   output: {

    //   }
    // };
    this.store.select(selectDefaultLanguage).subscribe((res: any) => {
      if (res) {
        this.translate.use(res);
        this.navtabItems[0].label = this.translate.instant('Caches');
        this.navtabItems[1].label = this.translate.instant('Website Logs');
      }
      this.isShimmer = true;
    })
    // this.rdsAlertMfeConfig = {
    //   name: 'RdsCompAlertPopup',
    //   input: {
    //     alertID: 'deleteAllModal',
    //     alertData: this.alertData
    //   },
    //   output: {
    //     onDelete: (event) => {
    //       this.deletAllcashe();
    //     },
    //     onCancel: (event) => {
    //       this.deletecaheid = undefined;
    //     }
    //   }
    // },
    this.refreshData();
    
  }

  onAlertHide(event: any): void {
    this.currentAlerts = event;
  } 

  subscribeToAlerts() {
    this.alertService.alertEvents.subscribe((alert) => {
      this.currentAlerts = [];
      const currentAlert: any = {
        type: alert.type,
        title: alert.title,
        message: alert.message,
        sticky: alert.sticky,
      };
      this.currentAlerts.push(currentAlert);
    });
  }

  getNavTabItems(): any {
    this.navtabItems[0].label = this.translate.instant('Caches');
    this.navtabItems[1].label = this.translate.instant('Website Logs');
    return this.navtabItems;
  }

  refreshData() {
    this.store.dispatch(getWebsitelog());
    this.store.select(selectAllWebsitelog).subscribe((res: any) => {
      if (res && res.latestWebLogLines.length > 0) {
        this.isAnimation = false;
        this.websiteLogData = [];
        res.latestWebLogLines.forEach((element: any) => {
          const item: any = element
          this.websiteLogData.push(item);

        });
        // const mfeConfig = this.rdswebsiteMfeConfig
        // mfeConfig.input.websiteLogData = [...this.websiteLogData]
        // this.rdswebsiteMfeConfig = mfeConfig;
      }
      this.isShimmer = false;
    })
    this.store.dispatch(getmaintenances());
    this.store.select(selectAllmaintenance).subscribe((res: any) => {
      if (res && res.items.length > 0) {
        this.isAnimation = false;
        this.cashedata = [];
        res.items.forEach((element: any) => {
          const item: any = {
            name: element.name,
          }
          this.cashedata.push(item);
        });
        // const mfeConfig = this.rdscacheMfeConfig
        // mfeConfig.input.cashedata = [...this.cashedata]
        // // mfeConfig.input.dataSource = [...this.cashedata]
        // this.rdscacheMfeConfig = mfeConfig;
      }
      this.isShimmer = false;
    })
  }
  deletecaheid: any;
  tabId: any;
  tabcash: boolean = true;
  tabweb: boolean = false;
  public websiteLogsHeaders: any[] = [{ key: 'status', displayName: 'status', dataType: 'text', sortable: true, filterable: true },
    //{ key: 'Log', displayName: 'Log', dataType: 'text', sortable: true, filterable: true }
  ]
  navtabItems: any = [
    { label: this.translate.instant('Caches'), tablink: '#nav-Caches', ariacontrols: 'nav-Caches' },
    { label: this.translate.instant('Website Logs'), tablink: '#nav-websiteLogs', ariacontrols: 'nav-websiteLogs' },
  ]



  deleteConfirmation(id: any): void {
    this.deletecaheid = id;
    $('#deleteModal').modal('show');

  }
  deletCashe() {
    this.cashedata.forEach((item, index) => {
      if (item.id === this.deletecaheid) this.cashedata.splice(index, 1);
    });
    $('#deleteModal').modal('hide');
  }
  deletAllcasheConfirmation() {
    $('#deleteAllModal').modal('show');
  }
  deletAllcashe() {
    this.cashedata = [];
    this.store.dispatch(clearcache());
    this.cashedata = [];
    $('#deleteAllModal').modal('hide');
  }
  close(): void {
    $('#deleteModal').modal('hide');
    this.deletecaheid = undefined;
  }

  getnavtabid(e: any) {
    this.tabId = e;
    if (this.tabId == 0) {
      this.tabcash = true;
      this.tabweb = false;
    } else {
      this.tabcash = false;
      this.tabweb = true;
    }

    if (e > 0) {
      this.sharedService.setTopNavTitle(this.navtabItems[e].label);
    } else {
      this.sharedService.setTopNavTitle('');
    }

  }
  exportToExcel(): void {

    this.downloadCSV(this.websiteLogData, this.websiteLogsHeaders, 'operation_logs');
  }
  downloadCSV(tableData: any, tableHeaders: any, filename: string): void {
    const csvData: any = this.ConvertToCSV(tableData, tableHeaders);
    const blob: any = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const dwldLink: any = document.createElement('a');
    const url: any = URL.createObjectURL(blob);
    const isSafariBrowser: boolean = navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1;
    if (isSafariBrowser) {  // if Safari open in new window to save file with random filename.
      dwldLink.setAttribute('target', '_blank');
    }
    dwldLink.setAttribute('href', url);
    dwldLink.setAttribute('download', filename + '.csv');
    dwldLink.style.visibility = 'hidden';
    document.body.appendChild(dwldLink);
    dwldLink.click();
    document.body.removeChild(dwldLink);
  }
  public ConvertToCSV(objArray: Array<object>, headerList: any): string {
    const array: any = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
    let str: string = '';
    let row: string = 'S.No,';
    // const displayedHeaders: Array<string> = ['Name', 'Time', 'Value'];
    for (const index in headerList) {
      row += headerList[index].displayName + ',';
    }
    row = row.slice(0, -1);
    str += row + '\r\n';
    for (let i: number = 0; i < array.length; i++) {
      let line: any = (i + 1) + '';
      for (const index in headerList) {
        if (index) {
          const head: any = headerList[index].key;
          line += ',' + array[i];
        }
      }
      str += line + '\r\n';
    }
    return str;
  }

  // fabmenu mobile
  onSelectMenu(event: any) {
    if (event.key === 'clearall') {
      this.deletAllcasheConfirmation();
    }
    else if (event.key === 'refresh') {
      this.refreshData();
    }
    else if (event.key === 'downloadall') {
      this.exportToExcel();
    }
  }

  onClearCache(eventData: any) {
    const data: any = {
      id: eventData
    }
    this.store.dispatch(deletecache(data));
    const index = this.cashedata.findIndex((x: any) => x.name === eventData);
    if (index !== -1) {
      this.cashedata.splice(index, 1);
      // const mfeConfig = this.rdscacheMfeConfig
      this.tableData = [... this.cashedata];
      // this.rdscacheMfeConfig = { ...mfeConfig };
    }
  }

  onDelete(event) {
    this.deletAllcashe();
  }
  onCancel(event) {
    this.deletecaheid = undefined;
  }
}
