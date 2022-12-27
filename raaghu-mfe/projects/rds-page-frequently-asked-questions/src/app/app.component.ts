import { Component } from '@angular/core';
import { ComponentLoaderOptions } from '@libs/shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frequently-asked-questions';
  questionList:any;
  // rdsNewRoleMfeConfig: ComponentLoaderOptions = {
  //   name: 'RdsCompFaqComponent'
  // };
  ngOnInit(): void {
    // this.rdsNewRoleMfeConfig
  }
}
