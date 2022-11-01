import { AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-rds-comp-client-basics',
  templateUrl: './rds-comp-client-basics.component.html',
  styleUrls: ['./rds-comp-client-basics.component.scss']
})
export class RdsCompClientBasicsComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() clientBasics: any = {};
  numberPattern: any = /^[0-9]+$/;
  @Input() clientInfo: any = undefined;
  tempData: any;
  @ViewChild('clientBasicsForm') basicInfo: NgForm;
  @Output() clientBasicInfo = new EventEmitter<any>();
  constructor(public translate:TranslateService) { }
  ngOnChanges(changes: SimpleChanges): void {
    // if (this.clientInfo) {
    //   this.clientBasics.clientId = this.clientInfo.clientId;
    //   this.clientBasics.clientName = this.clientInfo.clientName;
    //   this.clientBasics.requiredConsent = this.clientInfo.requireConsent;
    //   this.clientBasics.clientUri = this.clientInfo.clientUrl;
    //   this.clientBasics.logoUri = this.clientInfo.logoUrl;
    //   this.clientBasics.description = this.clientInfo.description;
    //   this.clientBasics.callbackUrl = this.clientInfo.callbackUrl;
         

    // }
  }

  ngOnInit(): void {
    if (!this.clientBasics.clientId) {
      this.clientBasics.clientId = "";
      this.clientBasics.clientName = "";
      this.clientBasics.requireConsent = false;
      this.clientBasics.clientUri = "";
      this.clientBasics.logoUri = "";
      this.clientBasics.description = "";
      this.clientBasics.callbackUrl = "";
      this.clientBasics.logoutUrl = "";
    }
  }
  ngAfterViewInit(): void {
    if (this.basicInfo) {
      this.basicInfo.statusChanges.subscribe(res => {
        if (res === 'VALID') {
          this.clientBasicInfo.emit(this.clientBasics);
          console.log(this.clientBasics)
        } else {
          this.clientBasicInfo.emit(undefined);
        }
      });
    }
  }

}
