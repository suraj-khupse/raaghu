import { Component, EventEmitter, Input, OnChanges, OnInit, Output, Provider, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
export interface EditionDat {
  settingEnabled: boolean;
  languageEnabled: boolean;
  textTemplateEnabled: boolean;
  themeEnabled: boolean;
  auditLogEnabled: boolean;

  }

  export interface FeatureCheckboxes {
    id: any;
    displayName: string;
    name: string;
    features: any[];
  }
  
  // export interface Features {
  //    name: string;
  //    displayName: string;
  //    parentName: string;
  //    value: string;
  //    provider: Provider[];
  //    id: any;
  // }

  export interface provider {
    key:string
    name: string  
  }

@Component({
  selector: 'rds-comp-edition-new-features',
  templateUrl: './rds-comp-edition-new-features.component.html',
  styleUrls: ['./rds-comp-edition-new-features.component.scss']
})
export class RdsCompEditionNewFeaturesComponent implements OnInit , OnChanges{
 finalFeatureData: FeatureCheckboxes[] = [];
 demoTreeData:FeatureCheckboxes[] = [];
 features: any[] = [];
@Output() selectedData = new EventEmitter<any>();
@Input() TwoFactorList : any = [];
@Input() treeData : FeatureCheckboxes[] = [];
@Input() isEdit: boolean = false;

  constructor( public translate : TranslateService) { }

  ngAfterViewInit(): void {
   }
  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.treeData && this.demoTreeData!= this.treeData) {
      const resFeatures: any[] = [];
      this.treeData.forEach(element => {
        const item = {
          name: element.name,
          displayName: element.displayName,
          features: element.features
        };
        resFeatures.push(item);
      });
      for (let i = 0; i < resFeatures.length; i++) {
        const eachFeatures: any[] = [];
        resFeatures[i].features.forEach(element => {
          const item = element.value == 'true' ? true : element.value == 'false' ? false : `${element.value}`;
          const eachFeaturesItem = {
            referParentIndex: i,
            displayName: element.displayName,
            provider: element.provider,
            value: item,
            name: element.name,
            parentName: element.parentName,
          }
          eachFeatures.push(eachFeaturesItem);
        });
        resFeatures[i].features = eachFeatures;
      }
      this.finalFeatureData = resFeatures;
      console.log(this.finalFeatureData, 'this.finalFeatureData');
      
    }
  
    this.demoTreeData = this.treeData;
  }


  onSelectChild() {
    const selectedData: any[] = [];
    for (let i = 0; i < this.finalFeatureData.length; i++) {
      this.finalFeatureData[i].features.forEach(ele => {
        const item = {
          value: ele.value,
          name: ele.name,
        };
        selectedData.push(item);
      });
    };
    this.selectedData.next(selectedData);
    console.log(selectedData, 'selectedData');
    
  }

  getSelectedValue(event){
    this.finalFeatureData[0].features[0].value = event.item.value
  }


}
