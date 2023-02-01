import {
  Component,
  EventEmitter,
  DoCheck,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-rds-comp-edition-new-basic',
  templateUrl: './rds-comp-edition-new-basic.component.html',
  styleUrls: ['./rds-comp-edition-new-basic.component.scss'],
})
export class RdsCompEditionNewBasicComponent implements OnInit {
  @Input() PlanList: any = [];
  @Output() editionBasicInfo = new EventEmitter<any>();
  @Input() editionData: any;

  @ViewChild('editionBasicForm') editionInfoForm: NgForm;
  constructor(public translate: TranslateService) {}
  ngOnInit(): void {
    if (!this.editionData) {
      this.editionData = {};
      this.editionData['editionName'] = '';
      this.editionData['editionPlan'] = null;
      this.editionData['planValue'] = 0;
    }
    setTimeout(() => {
      if (this.editionData && this.editionInfoForm) {
        this.editionInfoForm.statusChanges.subscribe((res) => {
          if (res === 'VALID') {
            this.editionBasicInfo.emit(this.editionData);
          } else {
            this.editionBasicInfo.emit(undefined);
          }
        });
      }
    }, 100);
  }

  onEditionSelect(event) {
    this.editionData.editionPlan = event.item.value;
  }
}

 