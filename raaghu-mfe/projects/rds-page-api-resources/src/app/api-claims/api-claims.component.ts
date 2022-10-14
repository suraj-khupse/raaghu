import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ComponentLoaderOptions } from '@libs/shared';

export class Claims {
  public claim_ato_e: any;
  public claim_f_to_o: any;
  public claim_p_to_z: any;
}

@Component({
  selector: 'app-api-claims',
  templateUrl: './api-claims.component.html',
  styleUrls: ['./api-claims.component.scss'],
})
export class ApiClaimsComponent implements OnInit {
  constructor() {}
  public rdsClaimsMfeConfig: ComponentLoaderOptions;
  ngOnInit(): void {
    this.rdsClaimsMfeConfig = {
      name: 'RdsCompClaims',
      input: {
        ClaimData: this.ClaimData,
      },
      output: {
        onClaimResourceSave: (ClaimResource) => {
          this.onClaimResourceSave.emit({ ClaimResource: ClaimResource });
        },
      },
    };
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.rdsClaimsMfeConfig = {
      name: 'RdsCompClaims',
      input: {
        ClaimData: this.ClaimData,
      },
      output: {
        onClaimResourceSave: (ClaimResource) => {
          this.onClaimResourceSave.emit({ ClaimResource: ClaimResource });
        },
      },
    };
  }
  AtoEcheckedAll: boolean = false;
  FtoOcheckedAll: boolean = false;
  PtoZcheckedAll: boolean = false;
  @Output()
  onClaimResourceSave = new EventEmitter<{ ClaimResource: any }>();
  @Input() ClaimData: Claims = {
    claim_ato_e: undefined,
    claim_f_to_o: undefined,
    claim_p_to_z: undefined,
  };
}
