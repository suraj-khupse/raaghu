import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
declare let bootstrap: any;

@Component({
  selector: 'app-rds-comp-tenant-features',
  templateUrl: './rds-comp-tenant-features.component.html',
  styleUrls: ['./rds-comp-tenant-features.component.scss'],
})
export class RdsCompTenantFeaturesComponent implements OnInit {
  @Input() public editionList: any = [];
  public emailPattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  @Output() tenantInfo = new EventEmitter<any>();
  @Output() onCancel = new EventEmitter<any>();
  @Input() tenantData: any;
  @ViewChild('tenantCreationForm') tenantInfoForm: NgForm;
  @Input() showEmail: boolean = true;
  @Input() editShimmer: boolean = false;
  @Input() buttonSpinner: boolean = true;
  @Output() onSaveFeatures = new EventEmitter<any>();
  showInput: boolean = false;
  buttonSpinnerForSave: boolean = true;
  buttonSpinnerForNewUser: boolean = true;
  selectedFeatureList: any = [];
  selectedId: any = '';
  activePage: number = 0;
  viewCanvas: boolean = false;
  @Input() offCanvasId: string;
  sampleCounter = 0;
  EnableSettingsManagement = false;
  EnableLanguageManagement = false;
  EnableTextTemplateManagement = false;
  EnableThemeManagement = false;
  EnableAuditLoggingPage = false;
  AuditLoggingPage = false;

  constructor(public translate: TranslateService) {}

  ngOnInit(): void {
    if (!this.tenantData) {
      this.tenantData = {};
      this.tenantData['tenancyName'] = undefined;
      this.tenantData['tenantName'] = '';
      this.tenantData['adminEmailAddress'] = '';
      this.tenantData['edition'] = '';
      this.tenantData['unlimitedSubscription'] = true;
      this.tenantData['imageUrl'] = '../assets/edit-pic.png';
      this.tenantData['subscriptionEndDate'] = null;
    }
    setTimeout(() => {
      if (this.tenantData && this.tenantInfoForm) {
        this.tenantInfoForm.statusChanges.subscribe((res) => {
          if (res === 'VALID') {
            this.tenantInfo.emit({ tenant: this.tenantData, next: false });
          } else {
            this.tenantInfo.emit({ tenant: undefined, next: false });
          }
        });
      }
    }, 100);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.tenantData) {
      this.tenantData = {};
      this.tenantData['tenancyName'] = '';
      this.tenantData['tenantName'] = '';
      this.tenantData['adminEmailAddress'] = '';
      this.tenantData['edition'] = '';
      this.tenantData['unlimitedSubscription'] = true;
      this.tenantData['imageUrl'] = '../assets/edit-pic.png';
      this.tenantData['subscriptionEndDate'] = null;
    }
  }

  onCanceled() {
    this.buttonSpinner = false;
    this.onCancel.emit(true);
  }
  save(event: NgForm): void {
    console.log(event.form.value);
    this.buttonSpinnerForSave = true;
    this.buttonSpinnerForNewUser = false;
    this.onSaveFeatures.emit(event.form.value);
    this.activePage = 0;
    var offcanvas = document.getElementById(this.offCanvasId);
    var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
    bsOffcanvas.hide();
    this.viewCanvas = false;
  }

  counterVal(event: number) {
    this.sampleCounter = event;
  }
}
