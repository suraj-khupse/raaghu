import { DatePipe } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { ComponentLoaderOptions } from '@libs/shared';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { TableHeader } from 'projects/rds-components/src/models/table-header.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {

  title = 'tenant';
  tenantSettingsInfo: any = {};
  tenantData: any = {};

  rdsTenantMfeConfig: ComponentLoaderOptions = {
    name: 'RdsTenantMfeConfig'
  };
  editionList: any = [];
  tenantFeatures: any = [];
  tenantFeatureValues: any = [];

  isAnimation: boolean = true;

  tenantTableData: any = []
  constructor(public datepipe: DatePipe, private store: Store,
    //  private translate: TranslateService,
    //   private _arrayToTreeConverterService: ArrayToTreeConverterService
      ) { }
  ngOnInit(): void {
    this.isAnimation = true;

    // this.store.select(selectDefaultLanguage).subscribe((res: any) => {
    //   if (res) {
    //     this.translate.use(res);
    //   }
    // });
    this.rdsTenantMfeConfig = {
      name: 'RdsCompTenantListNew',
      input: {
        tenantHeaders :[
          { displayName: 'Name', key: 'tenantInfoTemplate', dataType: 'html', dataLength: 30, sortable: true, required: true, filterable: true },  
          { displayName: 'Role', key: 'roleTemplate', dataType: 'html', dataLength: 30, sortable: true, required: true, filterable: true },  
          { displayName: 'Edition', key: 'editionTemplate', dataType: 'html', dataLength: 30, sortable: true, required: true, filterable: true },
          { displayName: 'Status', key: 'statusTemplate', dataType: 'html', dataLength: 30, sortable: true, required: true, filterable: true },
         
        ],
        tenantList:[{tenantInfoTemplate: '<div class="d-flex align-items-center"><div> <img src="../assets/dashboard-data.png" width="40px"></div><div class="ms-2 mt-2"><p class="mb-0"><b>Amc Corporation</b></p><small class="text-muted">Support@amc.com</small></div></div>',roleTemplate: '<div class="d-flex align-items-center"><div class=…tandard"></div><div class="">Admin</div></div>', statusTemplate: '<div><span class="badge badge-success">Active</span></div>', editionDisplayName: 'Standard', editionTemplate: '<div class="d-flex align-items-center"><div class=…tandard"></div><div class="">Standard</div></div>', id: 1},
        {tenantInfoTemplate: '<div class="d-flex align-items-center"><div> <img src="../assets/dashboard-data.png" width="40px"></div><div class="ms-2 mt-2"><p class="mb-0"><b>Acentric Global</b></p><small class="text-muted">Support@amc.com</small></div></div>',roleTemplate: '<div class="d-flex align-items-center"><div class=…tandard"></div><div class="">Admin</div></div>', statusTemplate: '<div> <span class="badge badge-danger">Inactive</span></div>', editionDisplayName: 'Standard', editionTemplate: '<div class="d-flex align-items-center"><div class=…tandard"></div><div class="">Standard</div></div>', id: 4},
        {tenantInfoTemplate: '<div class="d-flex align-items-center"><div> <img src="../assets/dashboard-data.png" width="40px"></div><div class="ms-2 mt-2"><p class="mb-0"><b>Cubic Systems</b></p><small class="text-muted">Support@amc.com</small></div></div>',roleTemplate: '<div class="d-flex align-items-center"><div class=…tandard"></div><div class="">Admin</div></div>', statusTemplate: '<div><span class="badge badge-success">Active</span></div>', editionDisplayName: 'Apple1', editionTemplate: '<div class="d-flex align-items-center"><div class=…on Apple1"></div><div class="">Extensive</div></div>', id: 9},
        {tenantInfoTemplate: '<div class="d-flex align-items-center"><div> <img src="../assets/dashboard-data.png" width="40px"></div><div class="ms-2 mt-2"><p class="mb-0"><b>Revamp Tech</b></p><small class="text-muted">Support@amc.com</small></div></div>',roleTemplate: '<div class="d-flex align-items-center"><div class=…tandard"></div><div class="">Admin</div></div>', statusTemplate: '<div> <span class="badge badge-success">Active</span></div>', editionDisplayName: 'Standard', editionTemplate: '<div class="d-flex align-items-center"><div class=…tandard"></div><div class="">Standard</div></div>', id: 2},
        {tenantInfoTemplate: '<div class="d-flex align-items-center"><div> <img src="../assets/dashboard-data.png" width="40px"></div><div class="ms-2 mt-2"><p class="mb-0"><b>Kengar Soft</b></p><small class="text-muted">Support@amc.com</small></div></div>',roleTemplate: '<div class="d-flex align-items-center"><div class=…tandard"></div><div class="">Admin</div></div>', statusTemplate: '<div> <span class="badge badge-success">Active</span></div>', editionDisplayName: 'Standard', editionTemplate: '<div class="d-flex align-items-center"><div class=…tandard"></div><div class="">Trail - 1 Month</div></div>', id: 22},],
        editionList:[
          {isFree: true, value: '1', displayText: 'Standard', isSelected: false},
          {isFree: false, value: '5', displayText: 'Advanced', isSelected: false},
          ],
      },
      output: {
      
      }
    };

  }
}
