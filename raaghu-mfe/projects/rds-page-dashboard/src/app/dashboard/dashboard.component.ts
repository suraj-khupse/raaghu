import { Component, Input, OnInit,  } from '@angular/core';
import { ComponentLoaderOptions } from '@libs/shared';
import { UserAuthService } from '@libs/shared';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Input() istenant:boolean=false;


  constructor( private _userService : UserAuthService) { }

  userName : string = '';

  ngOnInit(): void {

    //this.userName = this._userService.userName;

  }

}
