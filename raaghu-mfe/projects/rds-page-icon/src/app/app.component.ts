import { Component } from '@angular/core';
import iconsData from './icons.json';

interface Icon {

  name: String;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
}
)

export class AppComponent {
  title = 'rds-page-icon';
  icons: Icon[] = iconsData;

  
}
