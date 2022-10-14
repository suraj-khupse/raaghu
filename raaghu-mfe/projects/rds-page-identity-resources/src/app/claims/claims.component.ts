import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { ComponentLoaderOptions } from '@libs/shared';
import { Claims } from '../../modal/IdentityResourcemodals';

@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.scss']
})
export class ClaimsComponent implements OnInit {

  constructor() { }
  public rdsClaimsMfeConfig: ComponentLoaderOptions;
  ngOnInit(): void {
    this.rdsClaimsMfeConfig = {
      name: 'RdsCompClaims',
      input: {
        ClaimData:this.ClaimData
      },
      output: {
        onClaimResourceSave: (ClaimResource) => { this.onClaimResourceSave.emit({ ClaimResource: ClaimResource }); },
      }
    };
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.rdsClaimsMfeConfig = {
      name: 'RdsCompClaims',
      input: {
        ClaimData:this.ClaimData
      },
      output: {
        onClaimResourceSave: (ClaimResource) => { this.onClaimResourceSave.emit({ ClaimResource: ClaimResource }); },
      }
    };
  }
  AtoEcheckedAll:boolean=false;
  FtoOcheckedAll:boolean=false;
  PtoZcheckedAll:boolean=false;
  @Output()
  onClaimResourceSave = new EventEmitter<{ClaimResource:any}>()
 @Input() ClaimData:Claims={
   claim_ato_e: undefined,
   claim_f_to_o: undefined,
   claim_p_to_z: undefined
 }


}



