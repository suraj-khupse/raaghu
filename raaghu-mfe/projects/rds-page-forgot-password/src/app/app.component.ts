import { Component, Injector, OnInit } from '@angular/core';
import { MfeBaseComponent } from '@libs/shared';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';

declare var bootstrap: any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends MfeBaseComponent implements OnInit {

  title: string = '';
  message: string = '';

  // rdsForgotPasswordMfeConfig: ComponentLoaderOptions = {
  //   name: 'RdsForgotPassword',
  // };
  loadingshimmer: boolean = true;
  emailAddress: any;
  constructor(private injector: Injector,
    private store: Store,
    private translate: TranslateService) {
    super(injector)
  }

  ngOnInit(): void {
    // this.rdsForgotPasswordMfeConfig = {
    //   name: 'RdsForgotPassword',

    //   output: {

    //     onShimmerLoad:(event:any)=>{
    //       this.loadingshimmer=false;
    //     }
    //   }
    // }
    // this.store.select(selectDefaultLanguage).subscribe((res: any) => {
    //   if (res) {
    //     this.translate.use(res);
    //   }
    // })
    this.on('forgetpassword').subscribe(r => {
      this.emailAddress = r.emailAddress;
      // var email =r.emailAddress

          if (true) {
            this.message = this.translate.instant('Email Sent Successfully..');
            this.title = this.translate.instant('Success') + '  !';
          } else {
            this.message = this.translate.instant('Failed') + ' ..';
            this.title = this.translate.instant('Error') + '  !';
          }

          const element = document.getElementById('notification');
          var bsToast = new bootstrap.Toast(element);

          bsToast.show()

          //this._router.navigate(['pages/login']);
        });
  }
}
