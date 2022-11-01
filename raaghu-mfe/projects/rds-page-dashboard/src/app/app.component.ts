import { Component, OnInit } from '@angular/core';
//import { selectDefaultLanguage } from '@libs/state-management';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { getLanguages } from 'projects/libs/state-management/src/lib/state/language/language.actions';
import { selectAllLanguages } from 'projects/libs/state-management/src/lib/state/language/language.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private store: Store, private translate: TranslateService ) { }

  ngOnInit(): void {
    // this.store.select(selectDefaultLanguage).subscribe((res: any) => {
    //   if (res) {
    //     this.translate.use(res);
    //   }
    // }) 
  }
  newapicall(){
    this.store.dispatch(getLanguages());
    this.store.select(selectAllLanguages).subscribe(res=>{
      console.log(res);
    })

  }

}
