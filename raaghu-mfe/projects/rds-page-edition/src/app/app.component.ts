import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AlertService, ComponentLoaderOptions } from '@libs/shared';
import { Store } from '@ngrx/store';
import { ArrayToTreeConverterService } from 'projects/libs/shared/src/lib/array-to-tree-converter.service';
import { TranslateService } from '@ngx-translate/core';
import {
  transition,
  trigger,
  query,
  style,
  animate,
} from '@angular/animations';
import {
  deleteEdition,
  getEditionFeature,
  getEditionInfo,
  getEditions,
  getplanLookupInfo,
  saveEdition,
  updateEdition,
  updateEditionFeatureValues,
} from 'projects/libs/state-management/src/lib/state/edition/edition.action';
import {
  selectAllEditions,
  selectEditionFeatures,
  selectEditionInfo,
  selectEditionPlan,
} from 'projects/libs/state-management/src/lib/state/edition/edition.selector';
import { element } from 'protractor';
declare var bootstrap: any;
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
  newEditionName: string = '';
  newEditionFeature: any = [];
  featuresName: any;
  constructor(
    private store: Store,
    private translate: TranslateService,
    private _arrayToTreeConverterService: ArrayToTreeConverterService,
    private alertService: AlertService
  ) {}
  isSaved: boolean = false;
  featuresData: any = {};
  editionData: any[] = [];
  editionDataInfo: any = [];
  emitEditionDataInfo: any[] = [];
  selectId: any;
  planList: any = [];
  planValue = [29, 27, 19, 11, 20, 99, 98, 21, 45, 34, 67, 33];
  TwoFactorList = [
    { value: 'optional', some: 'Optinal' },
    { value: 'disabled', some: 'Disabled' },
    { value: 'forced', some: 'Forced' },
  ];
  isEdit : boolean = false;
  ngOnInit(): void {
    this.store.dispatch(getEditions());
    this.store.select(selectAllEditions).subscribe((res: any) => {
      if (res) {
        this.editionData = [];
        res.forEach((element, index) => {
          const data: any = {
            editionName: element.displayName,
            editionPlan: element.planName,
            id: element.id,
            planValue: this.planValue[index % 11],
          };
          this.editionData.push(data);
        });
      }
      this.onEditionSave();
    });

    this.store.select(selectEditionInfo).subscribe((res: any) => {
      if (res) {
        this.selectId = res.id;
        const data = {
          editionName: res.displayName,
          editionPlan: res.planName,
          id: res.id,
        };
        this.emitEditionDataInfo.push(data);
      }
    });

    this.store.dispatch(getplanLookupInfo());
    this.store.select(selectEditionPlan).subscribe((res: any) => {
      if (res) {
        res.forEach((ele: any) => {
          const data: any = {
            value: ele.planId,
            some: ele.planName,
            isSelected: ele.isSelected,
            icon: '',
            iconWidth: 0,
            iconHeight: 0,
            iconFill: false,
            iconStroke: true,
          };
          this.planList.push(data);
        });
      }
    });

    this.store.dispatch(getEditionFeature('Standard'));
    this.store.select(selectEditionFeatures).subscribe((res: any) => {
      if (res && res.groups) {
        this.newEditionFeature = [];
        this.featuresData = res.groups;
        this.featuresName
        this.isEdit = false;
      }
    });
  }

  onEditionSave(edition?: any) {
    if (edition?.editionDataInfo.id){
      const data: any = {
        id: edition?.editionDataInfo.id,
        body: {
          displayName: edition.editionDataInfo.editionName,
          planId: edition.editionDataInfo.editionPlan,
        },
      };
      this.store.dispatch(updateEdition(data));
      const convertFearures = [];
    edition.features.forEach((ele)=> {
      const _data: any = {
          name: ele.name,
          value: ele.value.toString()
      };
      convertFearures.push(_data);
    })   
     const _data: any = {
        id: edition?.editionDataInfo.id,
        body:{
          features: convertFearures
        }
      };
    this.store.dispatch(updateEditionFeatureValues(_data));
    } else {
      if(!this.isSaved){
        const data: any = {
          displayName: edition.editionDataInfo.editionName,
          planId: edition.editionDataInfo.editionPlan,
        };
        this.newEditionName = edition.editionDataInfo.editionName;
        this.newEditionFeature = edition.features;
        this.store.dispatch(saveEdition(data));
        this.isSaved = true;  
      }else if (this.isSaved){
        this.isSaved = false;
        this.editionData.forEach((ele)=>{
          if(ele.editionName == this.newEditionName){
              this.selectId = ele.id;
          }
        })
        const convertFearures = [];
        this.newEditionFeature.forEach((ele)=> {
          const _data: any = {
              name: ele.name,
              value: ele.value.toString()
          };
          convertFearures.push(_data);
        })   
         const _data: any = {
            id: this.selectId,
            body:{
              features: convertFearures
            }
          };
        this.store.dispatch(updateEditionFeatureValues(_data));
        this.newEditionFeature = undefined;
      }     
   
      
    }
  }

  EditEdition(event) {
    this.editionDataInfo = event;
    this.store.dispatch(getEditionInfo(this.editionDataInfo.id));
    this.store.dispatch(getEditionFeature(this.editionDataInfo.id));
  }

  onEditionDelete(event) {
    this.store.dispatch(deleteEdition(event.id));
  }
}
