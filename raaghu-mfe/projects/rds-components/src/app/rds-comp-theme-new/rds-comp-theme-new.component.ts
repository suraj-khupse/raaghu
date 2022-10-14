import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-rds-comp-theme-new',
  templateUrl: './rds-comp-theme-new.component.html',
  styleUrls: ['./rds-comp-theme-new.component.scss']
})
export class RdsCompThemeNewComponent implements OnInit {
  @Input() public StyleList: any = [];
  @Input() public WebList: any = [];
  @Input() public MenuList: any = [];
  @Input() public StatusList: any = [];
  @Input() themeData: any;
  @ViewChild('themeManagementForm')themeForm: NgForm;
  @Output() themeInfo = new EventEmitter<any>();
  constructor() { }
  ngAfterViewInit(): void {
    if (this.themeData && this.themeForm) {
      this.themeForm.statusChanges.subscribe(res => {
        if (res === 'VALID') {
          this.themeInfo.emit(this.themeData);
        } else {
          this.themeInfo.emit(undefined);
        }
      });
    }  }
  ngOnInit(): void {
  if (!this.themeData) {
    this.themeData = {};
    this.themeData['style'] = '';
    this.themeData['webstyle'] = '';
    this.themeData['placement'] = '';
    this.themeData['status'] = '';
    
  }
}

selectIdentity(e: boolean, type: string) {

  this.themeData.emit(this.themeData);
  
 }
}