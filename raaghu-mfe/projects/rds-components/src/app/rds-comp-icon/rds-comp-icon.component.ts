import { Component } from '@angular/core';
import iconsData from './icons.json';

interface Icon {

  name: String;
}
@Component({
  selector: 'rds-comp-icon',
  templateUrl: './rds-comp-icon.component.html',
  styleUrls: ['./rds-comp-icon.component.scss']
})
export class RdsCompIconComponent {
  title = 'rds-icon';
  all_icons: Icon[] = iconsData;
  icons: Icon[] = iconsData;
  debugger;
  item = '';
  searchText = '';

  filterIt(evt): string {
    this.searchText = evt.target.value;
    console.log("filterIt: ", this.searchText, evt);
    if (this.searchText && this.searchText != "") {
      this.icons = this.all_icons.filter(item => item.name.toLowerCase().indexOf(this.searchText) >= 0);
    } else {
      this.icons = this.all_icons;
    }
    return this.searchText;
  }
}
