import {
  Component,
  Input,
  OnInit,
  SimpleChanges,
  Output,
  EventEmitter,
  DoCheck,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

declare var bootstrap: any;
export interface EditionItem {
  EditionName: string;
  EditionTitle: string;
  Price: string;
  Plan: string;
  features: any;
}
@Component({
  selector: 'rds-comp-features-list-new',
  templateUrl: './rds-comp-features-list-new.component.html',
  styleUrls: ['./rds-comp-features-list-new.component.scss'],
})
export class RdsCompFeaturesListNewComponent implements OnInit {
  public viewCanvas: boolean = false;
  @Input() canvasTitle: string = 'NEW EDITION';
  @Input() PlanList: any = [];
  @Input() editionData: any[] = [];
  @Input() public EditionList: any = [];
  @Input() public featuresData: any = [];
  @Input() editionDataInfo: any = {};
  @Input() TwoFactorList: any = [];
  @Output() onEditionSave = new EventEmitter<any>();
  @Output() onEditionDelete = new EventEmitter<{ id: any }>();
  @Output() EditEdition = new EventEmitter<any>();
  public editionBasic: any = {
    editionDataInfo: undefined,
    features: undefined,
  };
  isReset: boolean = false;
  navtabsItems: any = [];
  viewMoveTenantCanvas: boolean = false;
  activePage: number = 0;
  selectedId: any ;
  Editionitems: EditionItem[] = [];
  Dataset: any[] = [];
  @Input() EditionBorder?: number = 0;
  @Input() bodybackGroundColor?: string;
  @Input() borderRadious?: number;
  @Input() Paddig?: number;
  @Input() borderwidth?: number;
  @Input() isEdit: boolean = false;
  showConfirmationPopup: boolean = false;
  private deleteId: any;
  alertData: any = {
    iconUrl: 'delete',
    colorVariant: 'danger',
    alertConfirmation: 'Are you sure ?',
    messageAlert: 'The record will be deleted permanently.',
    CancelButtonLabel: 'Cancel',
    DeleteButtonLabel: 'Delete',
  };

  constructor(public translate: TranslateService) {}

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {}
  openCanvas(event) {
    this.activePage = 0;
    this.viewCanvas = true;
    this.selectedId = '';
    this.navtabsItems = [
      {
        label: 'Basics',
        tablink: '#basics',
        ariacontrols: 'basics',
      },
      {
        label: 'Features',
        tablink: '#features',
        ariacontrols: 'features',
      },
    ];
    if(event){
      this.isEdit = false;
      this.canvasTitle = 'NEW EDITION';
      this.editionDataInfo = undefined;
      this.editionBasic.features = undefined;
      this.selectedId = '';
    }
    setTimeout(() => {
      var offcanvas = document.getElementById('addNewEdition');
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show();
    }, 100);
  }
  closeCanvas() {
    this.viewCanvas = false;
    this.selectedId = '';
  }

  onEdit(item) {
    this.canvasTitle = 'Update Edition';
    this.openCanvas(undefined);
    this.EditEdition.emit(item);
    this.selectedId = item.id;
  }
  openDeleteConfirmationPopup(item) {
    this.showConfirmationPopup = true;
    setTimeout(() => {
      this.deleteId = item.id;
      var element: any = document.getElementById('confirmationId');
      var modal = new bootstrap.Modal(element);
      modal.show();
    }, 100);
  }

  deleteEdition() {
    this.onEditionDelete.emit({ id: this.deleteId });
    var myModalEl = document.getElementById('confirmationId');
    var modal = bootstrap.Modal.getInstance(myModalEl);
    modal.hide();
    this.showConfirmationPopup = false;
  }

  cancelDelete(): void {
    this.deleteId = undefined;
    this.showConfirmationPopup = false;
  }
  getEditionData(event: any): void {
    this.editionBasic.editionDataInfo = event;
  }
  getEditionFeatureInfo(event: any): void {
    this.editionBasic.features = event;
  }
  onSave(): void {
    console.log(this.editionBasic);
    this.onEditionSave.emit(this.editionBasic);
    this.isReset = true;
    this.activePage = 0;
    var offcanvas = document.getElementById('addNewEdition');
    var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
    bsOffcanvas.hide();
    this.viewCanvas = false;
  }
}
