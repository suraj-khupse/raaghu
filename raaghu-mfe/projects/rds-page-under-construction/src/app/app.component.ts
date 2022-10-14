
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ComponentLoaderOptions } from '@libs/shared';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit  {
  constructor(public translate : TranslateService ) { }
  ngOnInit(): void {

  }

}


