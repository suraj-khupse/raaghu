import { Component, EventEmitter, Injector, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, NgForm, Validators } from '@angular/forms';
import { ComponentLoaderOptions, MfeBaseComponent, ThemeSettingsDto } from '@libs/shared';
import { OrganizationTreeLabeles, OrganizationTreeNode, OrganizationTreeType } from '../../models/organization-tree.model';
import { AlertPopupData } from '../rds-comp-alert-popup/rds-comp-alert-popup.component';
import { TranslateService } from '@ngx-translate/core';
declare var bootstrap: any;
declare var $: any;
@Component({
  selector: 'app-rds-organization-tree',
  templateUrl: './rds-comp-organization-tree.component.html',
  styleUrls: ['./rds-comp-organization-tree.component.scss']
})
export class RdsOrganizationTreeComponent extends MfeBaseComponent implements OnInit {

  constructor(public translate: TranslateService, private injector: Injector, private formBuilder: FormBuilder) {
    super(injector);
  }
  public rdsAlertMfeConfig: ComponentLoaderOptions;
  nodeForm :  FormGroup
   ItemsDescription: FormControl;
  ngOnInit(): void {
 this.ItemsDescription= new FormControl('',[Validators.required,Validators.minLength(10)]);
 this.nodeForm= new FormGroup({
  'ItemsDescription': this.ItemsDescription
 })
    // this.nodeForm = this.formBuilder.group({
    //   itemCodeData: ['', Validators.required],
    //   ItemDescription: ['', Validators.required]
    // })
    this.nodeEditForm = this.formBuilder.group({
      ItemDescription: ['', Validators.required]
    })
    this.NetednodeForm = this.formBuilder.group({
      ItemDescription: ['', Validators.required]
    })
    this.rdsAlertMfeConfig = {
      name: 'RdsCompAlertPopup',
      input: {
        alertID: 'deleteTreeNode',
        alertData: this.alertData
      },
      output: {
        onDelete: (event) => {
          this.deleteNode(event);
        },
        onCancel: (event) => {
          this.deleteNodeId = undefined;
        }
      }
    }
  }
  elementUrls: string[];

  ngOnChanges(changes: SimpleChanges): void {

    if (this.OrganizationTreeType.checkbox) {
      this.SelectAll = this.checkAllSelectorNot()
    }
  }



  
  //public nodeForm = new FormGroup({})
  public nodeEditForm = new FormGroup({})
  public NetednodeForm = new FormGroup({})
  disableSaveButton: boolean;
  disableSaveButtonfromDes: boolean
  disableSaveButtonfromCode: boolean
  @Input() organizationTreeData;
  @Input() mutable: boolean;
  @Input() ButtonLabel: String;
  @Input()
  OrganizationTreeLabeles: OrganizationTreeLabeles = {
    ParentItemPlaceholder: "",
    ChildItemPlaceholder: "",
    ParentDescriptionPlaceholder: "",
    ChildDescriptionPlaceholder: "",
    ChildDescriptionEditPlaceholder: "",
    ParentNodeTitle: "",
    ChildNodeTitle: "",
  }
  @Input()
  OrganizationTreeType: OrganizationTreeType = {
    IconLabel: false,
    Normal: false,
    checkbox: true
  }
  @Input() nodeColor: string[] = ['#BDCEFC', '#0D79AE', '#14A94B', '#FBA919'];
  @Output()
  onChildSave = new EventEmitter<{ displayName: any, parentId: any }>()
  @Output()
  onSelectAll = new EventEmitter<{ item: any }>()
  @Output()
  onSelectnode = new EventEmitter<{ item: any }>()
  @Output()
  onDeleteNode = new EventEmitter<{ id: any }>()
  @Output()
  onEdit = new EventEmitter<{ item: any }>()
  @Output()
  onUpdateUnitTree = new EventEmitter<{ data: { id: number, displayName: string } }>()

  alertData: AlertPopupData = {
    iconUrl: "delete",
    colorVariant: "danger",
    alertConfirmation: "Are you sure ?",
    messageAlert: "The record will be deleted permanently",
    CancelButtonLabel: "Cancel",
    DeleteButtonLabel: "Delete"
  }

  @Output()
  onDelete = new EventEmitter<{ evnt: any, item: boolean }>()
  selectedData: any;

  deleteNodeId: any;

  selectedNodeList: OrganizationTreeNode[] | null;
  selectedNestedNode;
  SelectAll: boolean;
  nodeLabel!: string;
  itemCode: any;
  ItemDescription: any;

  itemcodeRequiredMessage: boolean;
  DescriptionRequiredMessage: boolean;
  offcanvasTitleModel: string = "New Organization Unit";
  offcanvasTitleModelEdit: string = "Edit Organization Unit"
  addNode(nodeArray) {
    this.itemCode = nodeArray[0].data.parentId;
    this.ItemDescription = '';
    //this.checkSavebuttonEnable(false,false)
  }

  addNestedNode(node) {
    this.disableSaveButton = true
    this.itemCode = '';
    this.ItemDescription = '';
    this.selectedNestedNode = node;
  }
formSubmitted=false;
  pushNode() {
    this.onChildSave.emit({ parentId: this.itemCode, displayName: this.ItemDescription })
    this.formSubmitted=true;
  }

  pushNestedNode() {
    this.onChildSave.emit({ displayName: this.ItemDescription, parentId: this.selectedNestedNode.data.id });
    this.itemCode = '';
    this.ItemDescription = '';
    this.selectedNestedNode = null;
  }

  getNodeColor(level: number) {
    return this.nodeColor[(level - 1) % 4];
  }

  setStateBasedOnMutable(lastNode: boolean, node) {
    if (!this.mutable && lastNode && node.children.length === 0) {
      return false;
    }
    return true;
  }

  selectNode(node: OrganizationTreeNode, event: any) {
    node.selected = event.target.checked;
    this.SelectAll = this.checkAllSelectorNot()
    this.onSelectnode.emit({ item: node })
  }

  onClicknode(node: any) {
    this.unselectAllNode(this.organizationTreeData);
    node.selected = true;
    this.onSelectnode.emit({ item: node })
  }

  unselectAllNode(nodes: any): void {
    for (const n of nodes) {
      n.selected = false;
      if (n.children && n.children.length > 0) {
        this.unselectAllNode(n.children);
      }
    }
  }

  selectAllNode(node: OrganizationTreeNode, checked: boolean) {
    node.selected = checked;
    for (const n of node.children) {
      this.selectAllNode(n, checked);
    }
  }

  deleteNode(node) {
    this.onDeleteNode.emit({ id: this.deleteNodeId });
    $('#deleteTreeNode').modal('hide');
  }

  deleteConfirmation(node: any) {
    this.deleteNodeId = node.data.id
    $('#deleteTreeNode').modal('show');

  }


  selectAllFeature(event: any) {
    for (const n of this.organizationTreeData) {
      this.selectAllNode(n, event.detail);
    }
    this.SelectAll = true;
    this.onSelectAll.emit({ item: this.organizationTreeData });

  }
  checkAllSelectorNot(): boolean {
    for (const n of this.organizationTreeData) {
      this.SelectAll = this.checkNodSelectOrnot(n);
      if (this.SelectAll == false) {
        return this.SelectAll;

      }
    }
    return this.SelectAll;
  }

  checkNodSelectOrnot(node: OrganizationTreeNode): boolean {
    if (node.selected == false) {
      return false;
    } else {
      for (const n of node.children) {
        let checked = this.checkNodSelectOrnot(n);
        if (!checked) {
          return false;
        }
      }
    }
    return true;
  }
  getNodeByID(node) {
    this.NetednodeForm = this.formBuilder.group({
      ItemDescription: ['', Validators.required]
    })

    this.ItemDescription = node.data.displayName;
    this.itemCode = node.data.id;
  }
  EditnodeModal() {
    this.onUpdateUnitTree.emit({ data: { id: this.itemCode, displayName: this.ItemDescription } })
  }

  setMaximumuserButton(index: number, length: number) {
    let place = length / 2;
    place = Math.floor(place);
    if (index === place) {
      return true;

    } else {
      return false;
    }
  }
  checkSavebuttonEnable(disableSaveButton: boolean, disableSaveButtonfromDes: boolean) {
    if (disableSaveButton === true || disableSaveButtonfromDes === true) {
      this.disableSaveButton = true;
    } else {
      this.disableSaveButton = false
    }

  }
  checkItemcodeValidation() {
    if (this.itemCode === '' || this.itemCode === undefined) {
      this.itemcodeRequiredMessage = true;
      this.disableSaveButtonfromCode = true
      this.checkSavebuttonEnable(this.disableSaveButtonfromCode, this.disableSaveButtonfromDes)
    }
    else {
      this.itemcodeRequiredMessage = false;
      this.disableSaveButtonfromCode = false
      this.checkSavebuttonEnable(this.disableSaveButtonfromCode, this.disableSaveButtonfromDes)
    }
  }
  checkDescriptionValidation() {
    if (this.ItemDescription === '' || this.ItemDescription === undefined) {
      this.DescriptionRequiredMessage = true;
      this.disableSaveButtonfromDes = true
      this.checkSavebuttonEnable(this.disableSaveButtonfromCode, this.disableSaveButtonfromDes)
    }
    else {
      this.DescriptionRequiredMessage = false;
      this.disableSaveButtonfromDes = false
      this.checkSavebuttonEnable(this.disableSaveButtonfromCode, this.disableSaveButtonfromDes)
    }
  }
}
