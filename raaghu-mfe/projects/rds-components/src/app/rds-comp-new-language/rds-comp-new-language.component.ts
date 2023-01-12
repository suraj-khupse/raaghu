import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { DatePipe } from '@angular/common';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

export class Language {
  public name: string;
  public icon: string;
  public isEnabled: boolean;
  public id: number;
}

@Component({
  selector: 'rds-comp-new-language',
  templateUrl: './rds-comp-new-language.component.html',
  styleUrls: ['./rds-comp-new-language.component.scss'],
  providers: [DatePipe],
})
export class RdsCompNewLanguageComponent implements OnInit, OnChanges {
  constructor(public datepipe: DatePipe, public translate: TranslateService) { }
  @Output() onLanguageSave = new EventEmitter<any>();
  @Output() onCloseCanvas = new EventEmitter<any>();
  @Input() flags: any[] = [];
  @Input() languageNames: any[] = [];
  @Input() EditShimmer: boolean = false;
  @Input() selectedLanguage: any = {
    languageName: '',
    icon: '',
    isEnabled: false,
    id: undefined,
    name: '',
  };
  @Input() public submitted: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
    this.submitted = false;
  }



  addLanguage(languageForm: NgForm): void {
    languageForm.form.markAllAsTouched();
    this.submitted = true;
    if (
      languageForm.invalid || !this.selectedLanguage.languageName
      || this.selectedLanguage.languageName == ''
    ) {
      return;
    }
    const flag: any = this.flags.find(
      (x: any) => x.some === this.selectedLanguage.icon
    );
    const language: any = this.languageNames.find(
      (x: any) => x.value === this.selectedLanguage.countryCode
    );
    this.onLanguageSave.emit({
      icon: flag ? flag.value : '',
      isEnabled: this.selectedLanguage.isEnabled,
      name: language.value,
      id: this.selectedLanguage.id
    });
  }

  onCountryCodeSelect(selectedItem: any): void {
    this.selectedLanguage.languageName = '';
    if (selectedItem && selectedItem.item) {
      this.selectedLanguage.icon = selectedItem.item.some;
      const selectedLanguage: any = this.languageNames.find((x: any) => {
        if (x) {
          const _item = x.value.split('-');
          let selectedCode: string = _item[_item.length - 1];
          selectedCode = selectedCode.toLocaleLowerCase();
          if (selectedCode === selectedItem.item.some.toLocaleLowerCase()) {
            return x;
          }
        }
      });
      if (selectedLanguage) {
        this.selectedLanguage.languageName = selectedLanguage.some;
        this.selectedLanguage.countryCode = selectedLanguage.value;

      } else {
        this.selectedLanguage.languageName = '';
        this.selectedLanguage.countryCode = '';
      }

    }
  }

  onLanguageSelect(selectedItem: any): void {
    if (selectedItem && selectedItem.item) {
      this.selectedLanguage.languageName = selectedItem.item.some;
      this.selectedLanguage.countryCode = selectedItem.item.value;
      const _item = selectedItem.item.value.split('-');
      let selectedCode: string = _item[_item.length - 1];
      selectedCode = selectedCode.toLocaleLowerCase();
      const selectedFlag: any = this.flags.find((x: any) => x.some.toLocaleLowerCase() === selectedCode);
      if (selectedFlag) {
        this.selectedLanguage.icon = selectedFlag.some;
      } else {
        this.selectedLanguage.icon = '';
      }
    }

    //  const selectedFlag=this.flags.find((x:any)=>x.)
  }

  closeCanvas(): void {
    this.onCloseCanvas.emit(true);
  }

}
