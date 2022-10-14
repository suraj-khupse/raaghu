import { Component, Input, OnInit } from '@angular/core';
import { ComponentLoaderOptions } from '@libs/shared';

export class Secrets {
  public type: any;
  public value: any; 
  public expiration: any;
  public description: any;
}


@Component({
  selector: 'app-api-secrets',
  templateUrl: './api-secrets.component.html',
  styleUrls: ['./api-secrets.component.scss'],
})
export class ApiSecretsComponent implements OnInit {
  rdsCompSecretsMfeConfig: ComponentLoaderOptions;

  constructor() {}

  @Input() secretList:any=[];

  
  ngOnInit(): void {
    this.rdsCompSecretsMfeConfig = {
      name: 'RdsCompSecrets',
      input: {
        secretList: this.secretList,
      },
      output: {
      },
    };
  }
}
