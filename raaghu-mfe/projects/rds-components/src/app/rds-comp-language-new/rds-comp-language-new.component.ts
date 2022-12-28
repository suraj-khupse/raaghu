import { DatePipe } from '@angular/common';
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

@Component({
  selector: 'app-rds-comp-language-new',
  templateUrl: './rds-comp-language-new.component.html',
  styleUrls: ['./rds-comp-language-new.component.scss'],
})
export class RdsCompLanguageNewComponent implements OnInit {
  constructor(public datepipe: DatePipe, public translate: TranslateService) {}
  @Output() onLanguageSave = new EventEmitter<any>();
  @Output() onCloseCanvas = new EventEmitter<any>();
  @Output() LanguageInfo = new EventEmitter<any>();
  @Output() LanguageInfoEdit = new EventEmitter<any>();
  @Input() editOffCanvas: boolean = false;
  @Input() buttonSpinner: boolean = true;
  @Input() cultureList: any[] = [];
  @Input() uiCultureList: any[] = [];
  @Input() EditShimmer: boolean = false;

  targetCulture = undefined;

  @Input() selectedLanguageData: any;
  @ViewChild('languageForm') languageInfoForm: NgForm;
  viewCanvas: boolean = false;

  ngOnInit(): void {
    if (!this.selectedLanguageData) {
      this.selectedLanguageData = {};
      this.selectedLanguageData['cultureName'] = [];
      this.selectedLanguageData['displayName'] = '';
      this.selectedLanguageData['uiCultureName'] = [];
      this.selectedLanguageData['isEnabled'] = true;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if(this.selectedLanguageData && this.selectedLanguageData.targetCulture){
    //   this.cultureList.forEach((res: any) => {
    //     if (res && +res.value === +this.targetCulture) {
    //       this.selectedLanguageData.cultureName = res.some;
    //     }
    //   })
    // }
  }
  addLanguage(languageForm: NgForm): void {
    languageForm.form.markAllAsTouched();
    this.buttonSpinner = true;
    this.LanguageInfo.emit(this.selectedLanguageData);
  }
  addLanguageEdit(languageForm: NgForm) {
    languageForm.form.markAllAsTouched();
    this.buttonSpinner = true;
    this.LanguageInfoEdit.emit(this.selectedLanguageData);
  }

  onCultureSelect(event: any): void {
    // this.selectedLanguageData.cultureName = event.item.value;
    this.selectedLanguageData.cultureName = event.item.some;
    this.targetCulture = event.item.value;
  }
  onCountryCodeSelect(selectedItem: any): void {
    this.selectedLanguageData.uiCultureName = selectedItem.item.value;
  }

  closeCanvas(): void {
    this.onCloseCanvas.emit(true);
    this.buttonSpinner = false;
    this.viewCanvas = false;
  }
}
