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
import { RdsOrganizationTreeComponent } from '../../../rds-components/src/app/rds-comp-organization-tree/rds-comp-organization-tree.component';

export default {
  title: 'Pages/Organization Unit',
  component: OrganizationUnit,
  decorators: [
    moduleMetadata({
      declarations: [
        RdsDataTableComponent,
        RdsOrganizationTreeComponent,
        RdsAlertComponent
      ],
      imports: [
        FormsModule,
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
        RdsNavTabModule
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
  <div [class.card]="selectedTreeNode==0">
    <div class="row" [class.card-body]="selectedTreeNode==0">
      <div class="col-md-6 gutter-b">
        <div >
          <div class="card p-2 border-0 rounded-0 vh-88" >

            <div class="card-header bg-transparent">
              <h5 class="card-title">{{'Organization Tree'| translate}}</h5>
            </div>
            <div class="card-body overflow-auto vh-75">
              <mfe-loader [config]="rdsOrganizationTreeConfig"></mfe-loader>
            </div>
          </div>
        </div>
        
      </div>

      <div class="col-md-6 gutter-b">
        <div class="card p-2 border-0 rounded-0 vh-88">
          <!-- <div class="card-header bg-transparent" *ngIf="selectedTreeNode == 0">
    <h5 class="card-title">{{'Select an organization unit to see members' | translate}}</h5>
  </div> -->
          <div [@fadeAnimation]="isAnimation ? 'fadeAnimation' : ''">
            <div class="">
              <div *ngIf="selectedTreeNode != 0">

                <div class="card-header d-flex justify-content-between bg-transparent align-items-center">
                  <h5 class="card-title text-primary">
                    {{ organizationName }}
                  </h5>
                  <rds-button [label]="translate.instant('New Member')" *ngIf="selectedTabIndex == 0" [size]="'small'" [colorVariant]="'primary'"
                              (click)="newUser($event)">
                    <rds-icon left name="plus" height="12px" width="12px"></rds-icon>

                  </rds-button>
                  <rds-button [label]="translate.instant('New Role')" (click)="newRole($event)" type="button" *ngIf="selectedTabIndex == 1"
                              [size]="'small'" class="px-2" [colorVariant]="'primary'" data-bs-dismiss="offcanvas"
                              data-bs-target="#addRoleModal">
                    <rds-icon left name="plus" height="12px" width="12px"></rds-icon>

                  </rds-button>
                </div>

                <div class="card-body pt-2">
                  <div class="col-md-12 mb-2">
                    <rds-nav-tab [navtabsItems]="getNavTabItems()" [horizontalAlignment]="'start'" [verticalAlignment]="false"
                                 [pills]="false" [tabs]="true" [fill]="false" [justified]="false" [flex]="false"
                                 (onClicktab)="btnClick($event)"></rds-nav-tab>
                  </div>
                  <div naveContent class="row tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="Members" role="tabpanel" aria-labelledby="nav-home-tab">
                     
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


<rds-offcanvas [canvasTitle]="usercanvasTitle" [offId]="'addUserModal'" [offcanvaswidth]="550" *ngIf="viewCanvas"
               [placement]="'end'" (onClose)="close()">
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
              <rds-button [label]="'Cancel'" type="button" [size]="'small'" [colorVariant]="'outline-primary'"
                          data-bs-dismiss="offcanvas">
              </rds-button>
            </div>
            <div *ngIf="addedDataMember">
              <rds-button [label]="'Save'" type="button" [size]="'small'" class="px-2" [colorVariant]="'primary'"
                          (click)="pushUser()" data-bs-dismiss="offcanvas" data-bs-target="#addUserModal">
              </rds-button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</rds-offcanvas>
<rds-offcanvas [canvasTitle]="rolecanvasTitle" [offId]="'addRoleModal'" [offcanvaswidth]="550" *ngIf="viewCanvas"
               [placement]="'end'" (onClose)="close()">
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
              <rds-button [label]="'Cancel'" type="button" [size]="'small'" [colorVariant]="'outline-primary'"
                          data-bs-dismiss="offcanvas">
              </rds-button>
            </div>
            <div *ngIf="addedDataRole">
              <rds-button [label]="'Save'" type="button" [size]="'small'" class="px-2" [colorVariant]="'primary'"
                          (click)="pushRole()" data-bs-dismiss="offcanvas" data-bs-target="#addRoleModal">
              </rds-button>
            </div>

          </div>
        </div>
      </div>
    </form>
  </div>
</rds-offcanvas>

`
}
