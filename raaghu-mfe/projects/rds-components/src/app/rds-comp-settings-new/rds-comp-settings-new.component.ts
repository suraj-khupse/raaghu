import { Component, EventEmitter, OnInit,Input, Output } from '@angular/core';

@Component({
  selector: 'app-rds-comp-settings-new',
  templateUrl: './rds-comp-settings-new.component.html',
  styleUrls: ['./rds-comp-settings-new.component.scss']
})
export class RdsCompSettingsNewComponent implements OnInit {
  activePage: number = 0;
  navtabsItems: any = [];
  public settingData: any = {
    emailSettingsData: undefined,
    identityData: undefined,
    themeData:undefined,
    accountData:undefined
   
  };
  @Input() AuthentiactionList:any;
  @Input() StyleList:any;
  @Input() WebList:any;
  @Input() StatusList:any;
  @Input() MenuList:any;
  @Input() VersionList:any;

  @Output() onDataSave= new EventEmitter<any>();
  isReset: boolean = false;
  constructor() { }


  ngOnInit(): void {
    
  }
  private initialize(): void {
    this.navtabsItems = [
      {
        label: 'Email Settings',
        tablink: '#email',
        ariacontrols: 'email',
      },
      {
        label: 'Identity Management',
        tablink: '#identity',
        ariacontrols: 'identity',
      },
      {
        label: 'Theme',
        tablink: '#theme',
        ariacontrols: 'theme',
      },
      {
        label: 'Account',
        tablink: '#account',
        ariacontrols: 'account',
      }
    ];
  }
  onTabClick(index): void {
    this.activePage = index;
  }
  getEmailData(event: any): void {
    this.settingData.emailSettingsInfo = event
  }
  getIdentityData(event : any): void{
    this.settingData.identitymanagementInfo = event
  }
   getThemeData(event: any): void {
      this.settingData.themeInfo = event
    }
    getAccountData(event: any):void{
      
        this.settingData.accountInfo = event
       }
       onSave():void{
        console.log(this.settingData);
        this.onDataSave.emit(this.settingData)
          this.isReset = true;
          this.activePage = 0;
          
         
        }
       
       
}
