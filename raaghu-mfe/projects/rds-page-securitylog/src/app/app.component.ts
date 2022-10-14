import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { ComponentLoaderOptions } from '@libs/shared';
import { TableHeader } from 'projects/rds-components/src/models/table-header.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  public rdssecurityLogTableMfeConfig: ComponentLoaderOptions;
  public securityLogs: any = [];
  @Output() deleteEvent = new EventEmitter<any>();
  public securityLogsHeaders: TableHeader[] = [
    { key: 'time', displayName: 'Time', dataType: 'text', sortable: true, filterable: true },
    { key: 'action', displayName: 'Action', dataType: 'text', sortable: true, filterable: true },
    { key: 'ipAddress', displayName: 'IP Address', dataType: 'text', sortable: true, filterable: true },
    { key: 'browser', displayName: 'Browser', dataType: 'html', sortable: true, filterable: true },
    { key: 'application', displayName: 'Application', dataType: 'html', sortable: true, filterable: true },
    { key: 'identity', displayName: 'Identity', dataType: 'text', sortable: true, filterable: true },
    { key: 'username', displayName: 'Users', dataType: 'text', sortable: true, filterable: true },





  ];
  ngOnInit(): void {
    this.securityLogs = [
      {
        id: 1, username: 'admin', identity: 'Kol324i', action: 'GetActiveUserDelegations',
        duration: '1351ms', ipAddress: '103.151.184.6', application: 'Software 1.0',
        browser: '<div class="row"><div class="col-md-2 mt-2"><img src="assets/firefox.png" class="image"></div> <div class="col-md-8 title" ><b>Firefox</b><p class="subtitle">Windows NT 10</p></div></div>', time: '11/15/2021 2:44:52 PM'
      },
      {
        id: 2, username: 'rr', identity: 'Kol324i', action: 'GetActiveUserDelegations',
        duration: '1351ms', ipAddress: '103.151.184.6', application: 'Software 1.0',
        browser: '<div class="row"><div class="col-md-2 mt-2"><img src="assets/firefox.png" class="image"></div> <div class="col-md-8 title" ><b>Firefox</b><p class="subtitle">Windows NT 10</p></div></div>', time: '11/15/2021 2:44:52 PM'
      },
      {
        id: 3, username: 'lk', identity: 'Kol324i', action: 'GetActiveUserDelegations',
        duration: '1351ms', ipAddress: '103.151.184.6', application: 'Software 1.0',
        browser: '<div class="row"><div class="col-md-2 mt-2"><img src="assets/firefox.png" class="image"></div> <div class="col-md-8 title" ><b>Firefox</b><p class="subtitle">Windows NT 10</p></div></div>', time: '11/15/2021 2:44:52 PM'
      },
      {
        id: 4, username: 'nj', identity: 'Kol324i', action: 'GetActiveUserDelegations',
        duration: '1351ms', ipAddress: '103.151.184.6', application: 'Software 1.0',
        browser: '<div class="row"><div class="col-md-2 mt-2"><img src="assets/firefox.png" class="image"></div> <div class="col-md-8 title" ><b>Firefox</b><p class="subtitle">Windows NT 10</p></div></div>', time: '11/15/2021 2:44:52 PM'
      },
      {
        id: 5, username: 'admin', identity: 'Kol324i', action: 'GetActiveUserDelegations',
        duration: '1351ms', ipAddress: '103.151.184.6', application: 'Software 1.0',
        browser: '<div class="row"><div class="col-md-2 mt-2"><img src="assets/firefox.png" class="image"></div> <div class="col-md-8 title" ><b>Firefox</b><p class="subtitle">Windows NT 10</p></div></div>', time: '11/15/2021 2:44:52 PM'
      },
      {
        id: 6, username: 'admin', identity: 'Kol324i', action: 'GetActiveUserDelegations',
        duration: '1351ms', ipAddress: '103.151.184.6', application: 'Software 1.0',
        browser: '<div class="row"><div class="col-md-2 mt-2"><img src="assets/firefox.png" class="image"></div> <div class="col-md-8 title" ><b>Firefox</b><p class="subtitle">Windows NT 10</p></div></div>', time: '11/15/2021 2:44:52 PM'
      },
      {
        id: 7, username: 'admin', identity: 'Kol324i', action: 'GetActiveUserDelegations',
        duration: '1351ms', ipAddress: '103.151.184.6', application: 'Software 1.0',
        browser: '<div class="row"><div class="col-md-2 mt-2"><img src="assets/firefox.png" class="image"></div> <div class="col-md-8 title" ><b>Firefox</b><p class="subtitle">Windows NT 10</p></div></div>', time: '11/15/2021 2:44:52 PM'
      }
    ];
    this.rdssecurityLogTableMfeConfig = {
      name: 'RdsDataTable',
      input: {
        tableHeaders: this.securityLogsHeaders,
        tableStyle: 'light',
        width: '100%',
        tableData: this.securityLogs,
        recordsPerPage: 10,
        pagination: true,
        actions: [{ id: 'delete', displayName: 'Delete' }],
        noDataTitle: 'Currently you do not have security log'
      },
      output: {
        onActionSelection: (event: any) => {
          if (event.actionId === 'delete') {
            const index = this.securityLogs.findIndex((x: any) => x.id === event.selectedData.id);
            if (index !== -1) {
              this.securityLogs.splice(index, 1);
              const mfeConfig = this.securityLogs
              mfeConfig.input.tableData = [... this.securityLogs];
              this.securityLogs = mfeConfig;
            }
          }
        }
      }
    };
  }
  exportToExcel(navTab: string): void {
    this.downloadCSV(this.securityLogs, this.securityLogsHeaders, 'security_logs');
  }

  downloadCSV(tableData: any, tableHeaders: TableHeader[], filename: string): void {
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
  public ConvertToCSV(objArray: Array<object>, headerList: TableHeader[]): string {
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
          line += ',' + array[i][head];
        }
      }
      str += line + '\r\n';
    }
    return str;
  }
  delete(event: any): void {

    this.deleteEvent.emit(event);
  }
}
