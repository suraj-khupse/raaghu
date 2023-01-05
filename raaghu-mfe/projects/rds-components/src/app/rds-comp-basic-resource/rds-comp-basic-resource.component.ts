import {
  AfterViewInit,
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

@Component({
  selector: 'rds-comp-basic-resource',
  templateUrl: './rds-comp-basic-resource.component.html',
  styleUrls: ['./rds-comp-basic-resource.component.scss'],
})
export class RdsCompBasicResourceComponent implements OnInit, AfterViewInit {
  constructor(public translate: TranslateService) {}

  @Input() isApiResources: boolean = false;
  @Input() isResources: boolean = false;
  @Output() onBasicInfoSave = new EventEmitter<any>();
  @Output() onValidForm = new EventEmitter<any>();
   @Input() isEditShimmer:boolean=false
  @Output() onFormValid = new EventEmitter<any>();

  @ViewChild('resourceForm') resourceForm: NgForm;
  @Input() basicInfo: any;
  @Input() isEdit: boolean = false;
  ngAfterViewInit(): void {
    if (this.basicInfo && this.resourceForm) {
      this.resourceForm.statusChanges.subscribe((res) => {
        if (res === 'VALID') {
          this.onValidForm.emit(this.basicInfo);
        } else {
          // this.onValidForm.emit(undefined);
        }
      });
    }
  }
  ngOnInit(): void {
    if (!this.basicInfo) {
      this.basicInfo = {};
      this.basicInfo['name'] = '';
      this.basicInfo['description'] = '';
      this.basicInfo['displayName'] = '';
      this.basicInfo['enabled'] = false;
      this.basicInfo['required'] = false;
      this.basicInfo['emphasize'] = false;
      this.basicInfo['showInDiscoveryDocument'] = false;
      this.basicInfo['algorithm'] = '';
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.basicInfo) {
      this.basicInfo = {};
      this.basicInfo['name'] = '';
      this.basicInfo['description'] = '';
      this.basicInfo['displayName'] = '';
      this.basicInfo['enabled'] = false;
      this.basicInfo['required'] = false;
      this.basicInfo['emphasize'] = false;
      this.basicInfo['showInDiscoveryDocument'] = false;
      this.basicInfo['algorithm'] = '';
    }
  }

  saveResource(resourceForm: NgForm) {
    resourceForm.form.markAllAsTouched();
    if (!resourceForm || resourceForm.invalid) {
      return;
    }
    // this.onBasicInfoSave.emit({ scopeResource: this.basicInfo, next: true });
    this.onBasicInfoSave.emit(this.basicInfo);
  }

  getCheckboxValue(event: boolean, value: string) {
    switch (value) {
      case 'enables':
        this.basicInfo.enabled = event;
        break;

      case 'required':
        this.basicInfo.required = event;

        break;

      case 'emphasize':
        this.basicInfo.emphasize = event;
        break;
      case 'showindiscovery':
        this.basicInfo.showInDiscoveryDocument = event;
        break;
    }
  }

  getBtnName(): string {
    if (this.isEdit) {
      return 'UPDATE';
    }
    return 'CREATE';
  }
}
