import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

export class Role {
  displayName: string;
  id?: number;
  isDefault?: boolean;
  creationDate?: string;
}
@Component({
  selector: 'app-rds-comp-new-role',
  templateUrl: './rds-comp-new-role.component.html',
  styleUrls: ['./rds-comp-new-role.component.scss'],
  providers: [
    DatePipe
  ]
})
export class RdsCompNewRoleComponent implements OnInit {
 
  @Output() RoleInfo = new EventEmitter<any>();
  @Output() RoleDataemit = new EventEmitter<any>();
  @Output() onCancel = new EventEmitter<any>();
  @Input() roleData: any;
  @ViewChild('Roleform') Roleform: NgForm;
  id:any;
  edit:boolean=false;
  @Input()  EditShimmer: boolean = false;
  @Input() isReset: boolean = false;
  @Input () buttonSpinner :boolean=true;
  activePage: number = 0;
  treeData: [] = [];
  rolenameRequired: boolean = false;


  constructor(public datepipe: DatePipe, private formBuilder: FormBuilder, public translate:TranslateService) { }

  ngOnInit(): void {
    this.activePage = 0;
    if (!this.roleData) {
      this.roleData={};
      this.roleData['displayName'] = '';
      this.roleData['id'] =undefined ;
      this.roleData['isDefault'] = false;
     
     
   
    }
    setTimeout(() => {
      if (this.roleData && this.Roleform) {
        this.Roleform.statusChanges.subscribe(res => {
          if (res === 'VALID') {
            this.RoleInfo.emit({roledata: this.roleData,isOnSave:false} );
          } else {
            this.RoleInfo.emit({roledata: undefined,isOnSave:false});
          }
        });
      }
  
      }, 100);
  
  }
  ngDoCheck(): void {
   
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (!this.roleData) {
      this.roleData={};
      this.roleData['displayName'] = '';
      this.roleData['id'] =undefined ;
      this.roleData['isDefault'] = false;
     
      }
  }
  addRole(Roleform: NgForm): void {
    Roleform.form.markAllAsTouched();
    this.buttonSpinner=true;
    if (!Roleform || Roleform.invalid) {
      return;
    }
 this.RoleInfo.emit({ role: this.roleData,isOnSave:true});
     //  this.roleData={};
      // this.roleData['displayName'] = '';
      // this.roleData['id'] =undefined ;
      // this.roleData['isDefault'] = false;
   }

   onCanceledRole(){
    this.onCancel.emit(true);
    this.buttonSpinner=false;
   }
  
   
}
