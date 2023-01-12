import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import {
    RdsAlertComponent,
  RdsButtonModule,
   RdsCheckboxModule,
  RdsIconModule, RdsInputModule, RdsNavTabModule, RdsOffcanvasModule, RdsPaginationModule, RdsSelectListModule, 
} from '@libs/rds-elements';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { CommonModule } from '@angular/common';
import { AppComponent as OrganizationUnit} from './app.component';
import { RdsDataTableComponent } from '../../../rds-components/src/app/rds-comp-data-table/rds-comp-data-table.component';
import { RdsCompOrganizationTreeComponent } from '../../../rds-components/src/app/rds-comp-organization-tree/rds-comp-organization-tree.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'Pages/Organization Unit',
  component: OrganizationUnit,
  decorators: [
    moduleMetadata({
      declarations: [
        RdsDataTableComponent,
        RdsCompOrganizationTreeComponent,
        RdsAlertComponent
      ],
      imports: [
        FormsModule,
        BrowserAnimationsModule,  
        ReactiveFormsModule,
        RdsButtonModule,
        NgxTranslateModule,       
        SharedModule,
        CommonModule,
        RdsPaginationModule,
        RdsInputModule,
        RdsIconModule,
        RdsCheckboxModule,
        RdsOffcanvasModule,
        RdsNavTabModule,
        StoreModule.forRoot({}),
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<OrganizationUnit> = (args: OrganizationUnit) => ({
  props: {
    ...args
  },

});


export const Default = Template.bind({});
Default.args = {
   template: `
   <div>
   <div [class]="selectedTreeNode==0">
     <div class="row" [class.card-body]="selectedTreeNode==0">
       <div class="col-md-6 gutter-b">
         <div>
           <div class="card p-2 vh-88 rounded-0 border-0" [@fadeAnimation]="isAnimation ? 'fadeAnimation' : ''">
 
             <div class="card-header bg-transparent">
               <h5 class="card-title">{{'Organization Tree'| translate}}</h5>
             </div>
             <div class="card-body overflow-auto vh-75">
               <mfe-loader [config]="rdsOrganizationTreeConfig"></mfe-loader>
               <rds-organization-tree [organizationTreeData]="organizationTreeData" [nodeColor]="nodeColors"  [mutable]="true" ></rds-organization-tree>
             </div>
           </div>
         </div>
 
       </div>
 
       <div class="col-md-6 gutter-b">
         <div class="card p-2  vh-88 rounded-0 border-0">
           <div class="card-header bg-transparent" *ngIf="selectedTreeNode == 0">
             <h5 class="card-title">{{'Select an organization unit to see members' | translate}}</h5>
           </div>
 
           <div [@fadeAnimation]="isAnimation ? 'fadeAnimation' : ''">
             <div class="">
               <div *ngIf="selectedTreeNode != 0">
 
                 <div class="card-header d-flex justify-content-between bg-transparent align-items-center">
                   <h5 class="card-title text-primary">
                     {{ organizationName }}
                   </h5>
                   <rds-button [label]="translate.instant('New Member')" *ngIf="selectedTabIndex == 0" [size]="'small'"
                     [colorVariant]="'primary'" (click)="newUser($event)" [icon]="'plus'" iconHeight="12px" iconWidth="12px">
                     
                   </rds-button>
                   <rds-button [label]="translate.instant('New Role')" (click)="newRole($event)" type="button"
                     *ngIf="selectedTabIndex == 1" [size]="'small'" class="px-2" [colorVariant]="'primary'"
                     data-bs-dismiss="offcanvas" data-bs-target="#addRoleModal" [icon]="'plus'" iconHeight="12px" iconWidth="12px">
                    
                   </rds-button>
                 </div>
 
                 <div class="card-body pt-2">
                   <div class="col-md-12 mb-2">
                     <rds-nav-tab [navtabsItems]="getNavTabItems()" [horizontalAlignment]="'start'"
                       [verticalAlignment]="false" [pills]="false" [tabs]="true" [fill]="false" [justified]="false"
                       (onClicktab)="btnClick($event)"></rds-nav-tab>
                   </div>
                   <div naveContent class="row tab-content" id="nav-tabContent">
                     <div class="tab-pane fade show active" id="Members" role="tabpanel" aria-labelledby="nav-home-tab">
                       <div [@fadeAnimation]="isAnimation ? 'fadeAnimation' : ''"></div>
                       <div class="row">
                         <mfe-loader [config]="rdsDataTableForMemberMfeConfig"></mfe-loader>
                       </div>
                     </div>
                     <div class="tab-pane fade" id="Roles" role="tabpanel" aria-labelledby="nav-home-tab">
                       <div class="row">
                         <mfe-loader [config]="rdsDataTableForRoleMfeConfig"></mfe-loader>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
 
         </div>
       </div>
     </div>
   </div>
 </div>
 
 
 <rds-offcanvas [canvasTitle]="translate.instant(usercanvasTitle)" [offId]="'addUserModal'" [offcanvaswidth]="550"
   *ngIf="viewCanvas" [placement]="'end'" (onClose)="close()">
   <div class="row form-style">
     <form>
       <div class="tab-content">
         <div class="form-group mb-3">
           <div class="col-md-12  mt-2">
             <!-- (deleteEvent)="deleteUsers.emit($event)" -->
             <mfe-loader [config]="rdsDataTableForUserListMfeConfig"></mfe-loader>
           </div>
         </div>
       </div>
       <div class="footer-buttons my-2">
         <div class="row">
           <div class="col-md-12 d-flex flex-row">
             <div>
               <rds-button [label]="translate.instant('Cancel')" type="button" [size]="'small'"
                 [colorVariant]="'primary'" [isOutline]="true" data-bs-dismiss="offcanvas">
               </rds-button>
             </div>
             <div *ngIf="addedDataMember">
               <rds-button [label]="translate.instant('Save')" [isDisabled]="!selectedUsers||selectedUsers.length==0"
                 type="button" [size]="'small'" class="px-2" [colorVariant]="'primary'" (click)="pushUser()"
                 data-bs-dismiss="offcanvas" data-bs-target="#addUserModal">
               </rds-button>
             </div>
           </div>
         </div>
       </div>
     </form>
   </div>
 </rds-offcanvas>
 <rds-offcanvas [canvasTitle]="translate.instant(rolecanvasTitle)" [offId]="'addRoleModal'" [offcanvaswidth]="550"
   *ngIf="viewCanvas" [placement]="'end'" (onClose)="close()">
   <div class="row form-style">
     <form>
       <div class="tab-content">
         <div class="form-group mb-3">
           <div class="col-md-12 mt-3">
             <!-- (deleteEvent)="deleteRoles.emit($event)" -->
             <mfe-loader [config]="rdsDataTableForRoleListMfeConfig"></mfe-loader>
           </div>
         </div>
       </div>
       <div class="footer-buttons my-2">
         <div class="row">
           <div class="col-md-12 d-flex flex-row">
             <div>
               <rds-button [label]="translate.instant('Cancel')" type="button" [size]="'small'"
                 [colorVariant]="'primary'" [isOutline]="true" data-bs-dismiss="offcanvas">
               </rds-button>
             </div>
             <div *ngIf="addedDataRole">
               <rds-button [label]="translate.instant('Save')" [isDisabled]="!selectedRoles||selectedRoles.length==0"
                 type="button" [size]="'small'" class="px-2" [colorVariant]="'primary'" (click)="pushRole()"
                 data-bs-dismiss="offcanvas" data-bs-target="#addRoleModal">
               </rds-button>
             </div>
 
           </div>
         </div>
       </div>
     </form>
   </div>
 </rds-offcanvas>
 
 <rds-offcanvas [canvasTitle]="translate.instant(canvasTitle)" [offId]="'addNodeOffcanvas'" [placement]="'end'"
   *ngIf="viewCreateOrganisationCanvas" [offcanvaswidth]="550">
   <div class="tab-content">
     <div class="row form-style mt-2">
       <div class="col-md-12">
         <form #nodeForm="ngForm" novalidate>
           <div class="form-group mb-3">
             <rds-input size="medium" [label]="translate.instant('Name')" [labelPosition]="'top'" [placeholder]="'Wai Technologies'"
               [(ngModel)]="node" id="txtDescription" name="node_name" [isRequired]="true" required ngDefaultControl
               #nodeName="ngModel">
             </rds-input>
             <div class="form-control-feedback" *ngIf="nodeName.errors && (nodeName.dirty || nodeName.touched)">
               <span class="text-danger" *ngIf="nodeName.errors.required">{{"Name is required"|translate}}</span>
             </div>
           </div>
         </form>
       </div>
     </div>
   </div>
   <div class="footer-buttons my-2">
     <div class="row">
       <div class="col-md-12">
         <rds-button [label]="translate.instant('Cancel')" (click)="onCancelOrganisation()" [isOutline]="true"
           type="button" [colorVariant]="'primary'" [size]="'small'" data-bs-target="#addNodeOffcanvas"
           data-bs-dismiss="offcanvas">
         </rds-button>
         <rds-button [isDisabled]="!nodeForm.valid" [label]="translate.instant('Save')" [submit]="true" type="submit"
           [size]="'small'" class="px-2" [colorVariant]="'primary'" (click)="saveNode(nodeForm)">
         </rds-button>
       </div>
     </div>
   </div>
 </rds-offcanvas>
`
}

