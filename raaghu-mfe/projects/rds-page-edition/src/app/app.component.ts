import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AlertService, ComponentLoaderOptions } from '@libs/shared';
import { Store } from '@ngrx/store';
import { ArrayToTreeConverterService } from 'projects/libs/shared/src/lib/array-to-tree-converter.service';
import { TreeNode } from 'projects/rds-components/src/models/tree-node.model';
import { TableHeader } from 'projects/rds-components/src/models/table-header.model';
import { TranslateService } from '@ngx-translate/core';
import {
  transition,
  trigger,
  query,
  style,
  animate,
} from '@angular/animations';
import { selectDefaultLanguage } from 'projects/libs/state-management/src/lib/state/language/language.selector';
import { deleteEdition, getEditionInfo, getEditionPageComboboxItems, getEditions, getTenantCount, moveTenant, saveEdition, updateEdition } from 'projects/libs/state-management/src/lib/state/edition/edition.action';
import { selectAllEditions, selectEditionInfo, selectEditionPageComboboxItems, selectTenant } from 'projects/libs/state-management/src/lib/state/edition/edition.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      transition('* <=> *', [
        query(':enter',
          [
            style({ opacity: 0 })
          ],
          { optional: true }
        ),
        query(':leave',
          [
            style({ opacity: 1 }),
            animate('0.4s', style({ opacity: 0 }))
          ],
          { optional: true }
        ),
        query(':enter',
          [
            style({ opacity: 0 }),
            animate('0.4s', style({ opacity: 1 }))
          ],
          { optional: true }
        )
      ])
    ])
  ]
})
export class AppComponent implements OnInit {

  isAnimation: boolean = true;

  currentAlerts: any = [];
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
  // public rdsEditionMfeConfig: ComponentLoaderOptions;
  constructor(private store: Store, private translate: TranslateService, private _arrayToTreeConverterService: ArrayToTreeConverterService, private alertService: AlertService) { }
  TableHeader: TableHeader[] = [
    { displayName: 'Edition Name', key: 'editionname', dataType: 'text', dataLength: 30, sortable: true, required: true, filterable: true },
    { displayName: 'Price', key: 'price', dataType: 'text', dataLength: 30, sortable: true, required: true },
    { displayName: 'Trial Period', key: 'trialPeriod', dataType: 'text', dataLength: 30, sortable: true, required: true },
    { displayName: 'Expiring Edition', key: 'expiringEdition', dataType: 'text', dataLength: 30, sortable: true, required: true },
  ]

  EditionDatatable: any = [];
  featureList: any = [];
  freeEditions: any = [];
  nodeColors = ['#6E4D9F', '#0D79AE', '#14A94B', '#FBA919'];
  treeData: any = [
    new TreeNode("Testtenantscopefeature", 'Test tenant scope feature', 1, [], true, 1),
    new TreeNode("Chat", 'Chat', 1, [new TreeNode("ChatWithHost", 'Chat With Host', 2, [], false, 2), new TreeNode("ChatWithOtherTenant", 'Chat With Other Tenant', 2, [], true, 3)], true, 4)
    , new TreeNode("MaximumUserCount", 'Maximum User Count', 1, [], true, 6)
    , new TreeNode("TestCheckFeature", 'Test Check Feature', 1, [], true, 7)
    , new TreeNode("TestCheckFeature2", 'Test Check Feature2', 1, [], true, 8)
  ]

  editionList: any = [];
  defaultEditionName: any[] = [];
  isShimmer: boolean = false;
  editShimmer: boolean = true;
  tenantCount: any;
  selectedFeatures = [];
  selectedEdition: any;
  showLoadingSpinner:boolean=false;

  ngOnInit(): void {
    this.isAnimation = true;
    this.store.select(selectDefaultLanguage).subscribe((res: any) => {
      if (res) {
        this.translate.use(res);
      }
    })
    this.subscribeToAlerts();
    // this.rdsEditionMfeConfig = {
    //   name: 'RdsCompFeatures',
    //   input: {
    //     // EditionsTableHeader: this.TableHeader,
    //     // EditionsTableData: this.EditionDatatable,
    //     // recordsPerpage: 10,
    //     // nodeColors: this.nodeColors,
    //     // treeData: this.treeData,
    //     // featureList: this.featureList,
    //     // noDataTitle: 'Currently you do not have edition',
    //     // editionList: this.editionList,
    //     // freeEditions: this.freeEditions,
    //     // tenantCount: 0,
    //     // isShimmer: true,
    //     // editShimmer: true
    //   },
    //   output: {       
    //   }
    // }


    this.store.dispatch(getEditions());
    this.store.select(selectAllEditions).subscribe((res: any) => {
      this.EditionDatatable = [];
      if (res) {
        this.isAnimation = false;
        res.forEach(element => {
          const edition: any = {
            editionname: element.displayName,
            price: '$ ' + element.annualPrice,
            trialPeriod: element.trialDayCount,
            expiringEdition: (element.expiringEditionDisplayName && element.expiringEditionDisplayName !== null) ? element.expiringEditionDisplayName : ' --',
            id: element.id,
            name: element.displayName,
          }
          this.EditionDatatable.push(edition);
        });
      }

    }, (err: any) => {
    })
    this.store.dispatch(getEditionInfo(undefined))
    this.store.select(selectEditionInfo).subscribe((res: any) => {
      if (res && res.featureValues) {
        this.featureList = this.convertArraytoTreedata(res.features)
        // const rdsEditionMfeConfig = this.rdsEditionMfeConfig;
        this.featureList = [...this.featureList];
        this.selectedFeatures = [...res.featureValues];
        this.selectedEdition = { ...res.edition };
        this.editShimmer = false;
        // this.rdsEditionMfeConfig = { ...rdsEditionMfeConfig };
      }

    }, (err: any) => {
    })
    this.store.dispatch(getEditionPageComboboxItems())
    this.store.select(selectEditionPageComboboxItems).subscribe((res: any) => {
      if (res) {
        this.editionList = []
        this.freeEditions = [];
        res.filter((x: any) => x.isFree).forEach(element => {
          const data = {
            value: element.value,
            some: element.displayText,
            isSelected: element.isSelected,
            icon: '',
            iconWidth: 0,
            iconHeight: 0,
            iconFill: false,
            iconStroke: true,
            isFree: element.isFree
          }
          this.freeEditions.push(data);
        });
        res.forEach((res: any) => {
          const data = {
            value: res.value,
            some: res.displayText,
            isSelected: res.isSelected,
            icon: '',
            iconWidth: 0,
            iconHeight: 0,
            iconFill: false,
            iconStroke: true,
            isFree: res.isFree
          }
          this.editionList.push(data);
        });
        // this.editionList = res.editionComboboxItem;
        // const mfeConfig = this.rdsEditionMfeConfig
        this.editionList = [... this.editionList];
        this.freeEditions = [...this.freeEditions]
        // this.rdsEditionMfeConfig = mfeConfig;
      }
    });
    //this.store.dispatch(getDefaultEditionName())
    //this.store.select(selectDefaultNameComboboxItems).subscribe((res: any) => {
    //  if (res && res.defaultEditionNameItem && res.defaultEditionNameItem.length > 0) {
    //    this.defaultEditionName = res.defaultEditionNameItem;
    //    const mfeConfig = this.rdsEditionMfeConfig
    //    mfeConfig.input.defaultEditionName = [this.defaultEditionName];
    //    this.rdsEditionMfeConfig = mfeConfig;
    //  }
    //});
    this.store.select(selectTenant).subscribe((res: any) => {
      if (res) {
        this.tenantCount = res;
        // const mfeConfig = this.rdsEditionMfeConfig
        // mfeConfig.input.tenantCount = res;
        // this.rdsEditionMfeConfig = mfeConfig;
      }
    })
  }
  convertArraytoTreedata(data: any) {
    const treedaTA = this._arrayToTreeConverterService.createTree(
      data,
      'parentName',
      'name',
      null,
      'children',
      [
        {
          target: 'label',
          source: 'displayName',
        },
        {
          target: 'expandedIcon',
          value: 'fa fa-folder-open text-warning',
        },
        {
          target: 'collapsedIcon',
          value: 'fa fa-folder text-warning',
        },
        {
          target: 'expanded',
          value: true,
        },
        {
          target: 'selectable',
          targetFunction(item) {
            return item.inputType.name === 'CHECKBOX';
          },
        },
      ],
      1
    );
    return treedaTA;
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
      this.currentAlerts=[...this.currentAlerts];
      this.showLoadingSpinner=false;
      // const rdsAlertMfeConfig = this.rdsAlertMfeConfig;
      // rdsAlertMfeConfig.input.currentAlerts = [...this.currentAlerts];
      // this.rdsAlertMfeConfig = rdsAlertMfeConfig;
      // const rdsEditionMfeConfig = this.rdsEditionMfeConfig;
      // rdsEditionMfeConfig.input['showLoadingSpinner'] = false;
      // this.rdsEditionMfeConfig = rdsEditionMfeConfig;
    });

  }

  onEditionSave(data) {
    if (data) {
      if (data.edition.id !== undefined) {
        this.store.dispatch(updateEdition(data))
      } else {
        this.store.dispatch(saveEdition(data))
      }
    }
  }

  updateEdition(id) {
    if (id == 0) {
      this.editShimmer = false;
      // const rdsEditionMfeConfig = this.rdsEditionMfeConfig;
      // rdsEditionMfeConfig.input.editShimmer = false;
      // this.rdsEditionMfeConfig = { ...rdsEditionMfeConfig }
    } else {
      this.editShimmer = true
      // const rdsEditionMfeConfig = this.rdsEditionMfeConfig;
      // rdsEditionMfeConfig.input.editShimmer = true;
      // this.rdsEditionMfeConfig = { ...rdsEditionMfeConfig }
    }
    this.store.dispatch(getEditionInfo(id))
  }

  deleteEdition(data) {
    this.store.dispatch(deleteEdition(data.id));
  }

  onMoveTenantAction(editionId) {
    this.store.dispatch(getTenantCount(editionId));
  }

  onMoveTenant(data) {
    this.store.dispatch(moveTenant(data));
  }

}
