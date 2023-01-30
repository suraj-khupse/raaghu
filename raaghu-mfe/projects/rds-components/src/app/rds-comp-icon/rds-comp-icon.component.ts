import { Component } from '@angular/core';
import iconsData from './icons.json';
import { compose } from '@ngrx/store';
import { Clipboard } from '@angular/cdk/clipboard';

interface Icon {

  name: String;
}
@Component({
  selector: 'rds-comp-icon',
  templateUrl: './rds-comp-icon.component.html',
  styleUrls: ['./rds-comp-icon.component.scss']
})

export class RdsCompIconComponent {

  constructor(private clipboard: Clipboard) {}

  title = 'rds-icon';
  all_icons: Icon[] = iconsData;
  icons: Icon[] = iconsData;
  debugger;
  item = '';
  searchText = '';

  filterIt(evt): string {
    this.searchText = evt.target.value;
    if (this.searchText && this.searchText != "") {
      this.icons = this.all_icons.filter(item => item.name.toLowerCase().indexOf(this.searchText) >= 0);
    } else {
      this.icons = this.all_icons;
    }
    return this.searchText;
  }


  copyText(textToCopy: string) {
    this.clipboard.copy(textToCopy);
  }

public copyToClipboardWithParameter(value: any): void {
  const text: string = "<rds-icon name='" + value + "' height='20px' width='20px' colorVariant='primary'></rds-icon>";
  // console.log(text);
  const successful = this.clipboard.copy(text);
}

}
