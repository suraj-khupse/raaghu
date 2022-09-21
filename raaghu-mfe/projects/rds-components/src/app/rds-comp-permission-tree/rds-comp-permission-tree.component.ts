import { Component, DoCheck, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { PermissionNode, TreeType } from '../../models/pemission.model';

@Component({
  selector: 'app-rds-comp-permission-tree',
  templateUrl: './rds-comp-permission-tree.component.html',
  styleUrls: ['./rds-comp-permission-tree.component.scss']
})
export class RdsCompPermissionTreeComponent implements OnInit {
  @Input() isReset: boolean = false;
  @Input() isEdit: boolean = false;
  @Input() selectedItems: PermissionNode[] = [];
  @Input() selectAllLabel: string = 'Select All';
  @Input() treeData: PermissionNode[];
  @Input() mutable: boolean;
  @Input() ButtonLabel: String;
  @Input() multiselectTree: boolean = true;
  @Input()
  TreeType: TreeType = {
    IconLabel: false,
    Normal: false,
    checkbox: true
  }
  @Input() nodeColors: string[] = ['#6E4D9F', '#0D79AE', '#14A94B', '#FBA919'];
  @Output() onSelectAll = new EventEmitter<{ item: any }>();
  @Output() onSelectnode = new EventEmitter<{ item: any }>();
  @Output() getAllSelectedNodes = new EventEmitter<any>();
  @Output() getAllselectedPermissions = new EventEmitter<any>();
  @Input() permissions: any;
  elementUrls: string[];
  activepage: any = 0;
  activesubmenu: any = 0;
  activeMenuWithChildren: any = 0;
  collapsed = false;
  openedMenu = false;
  selectedPermissions: any = [];
  public permissionForm: NgForm;

  constructor(public translate: TranslateService) {
  }
  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {

    if (this.treeData && this.multiselectTree) {
      this.selectAllPermissions(false);
      if (this.selectedItems.length > 0) {
        this.selectedItems.forEach((item) => {
          this.checkSelectedNodes(this.treeData, item);

        })
      }
    } else {
      this.selectAllPermissions(false)
      if (this.selectedItems.length > 0) {
        this.selectedItems.forEach((item) => {
          this.checkSelectedNodes(this.treeData, item);
        })
      }
    }

  }


  checkSelectedNodes(treeData: any, node: any) {
    treeData.forEach((item: any) => {
      if (item.data.name) {
        if (item.data.name === node.name) {
          item.selected = (node.value === 'true') ? true : (node.value === 'false') ? false : node.value;

        } else {
          this.checkSelectedNodes(item.children, node)
        }
      }
      if (item.data.displayName) {
        if (item.data.displayName === node.name) {
          item.selected = (node.value === 'true') ? true : (node.value === 'false') ? false : node.value;

        } else {
          this.checkSelectedNodes(item.children, node)

        }
      }
    })
  }

  checkSelectAll(treeData: any): boolean {

    let allSelected: boolean = true;
    if (!this.treeData || this.treeData.length == 0) {
      allSelected = false;
    }
    this.treeData.forEach((tree: any) => {
      if (tree.selected && allSelected) {
        allSelected = this._checkSelectAll(tree.children);
      } else {
        allSelected = false;
      }
    });
    return allSelected;

  }

  _checkSelectAll(treeData: any): boolean {
    let allSelected: boolean = true;
    treeData.forEach((tree: any) => {
      if (tree.selected && allSelected) {
        allSelected = this._checkSelectAll(tree.children);
      } else {
        allSelected = false;
      }
    });
    return allSelected;

  }

  disableSaveButton: boolean;
  disableSaveButtonfromDes: boolean
  disableSaveButtonfromCode: boolean
  selectedNodeList: PermissionNode[] | null;
  selectedNestedNode: PermissionNode | null;
  SelectAll: boolean = false;
  nodeLabel!: string;
  itemCode: any;
  ItemDescription: any;
  addNode(nodeArray: PermissionNode[]) {
    this.itemCode = '';
    this.ItemDescription = '';
    this.selectedNodeList = nodeArray;
  }
  addNestedNode(node: PermissionNode) {
    this.disableSaveButton = true
    this.itemCode = '';
    this.ItemDescription = '';
    this.selectedNestedNode = node;
  }
  getNodeColor(level: number) {
    return this.nodeColors[(level - 1) % 4];
  }
  setStateBasedOnMutable(lastNode: boolean, node: PermissionNode) {
    if (!this.mutable && lastNode && node.children.length === 0) {
      return false;
    }
    return true;
  }
  selectNode(node: any, event: any) {
    if (this.multiselectTree) {
      node.selected = event;
      this.selectAllNode(node, event);
      if (node.data.parentName) {
        this.checkForParent(this.treeData, node, event);
      }
      this.selectedPermissions = [];
      this.getSelectedPermissionNodes(this.treeData)
      const selectedNodes: PermissionNode[] = this.getSelectedNodes(this.treeData);
      this.getAllSelectedNodes.emit(this.treeData);
      this.onSelectnode.emit({ item: node });
      this.getAllselectedPermissions.emit(this.selectedPermissions)
    } else {
      this.selectedPermissions = [];
      const itemselected: any = {
        name: node.data.name,
        value: event
      }
      this.selectedPermissions.push(itemselected)
      node.selected = event;
      this.UnselectAllNodeExceptSelctedNode(false, node.data.name)
      this.onSelectnode.emit(node.data);
      this.getAllselectedPermissions.emit(this.selectedPermissions)
    }
  }
  getCounterData(count: number, name: string) {
    this.selectedPermissions = [];
    this.selectedItems.forEach((item: any) => {
      if (item.name == name) {
        const itemselected: any = {
          name: name,
          value: count
        }
        this.selectedPermissions.push(itemselected)
      } else {
        const itemselected: any = {
          name: item.name,
          value: item.value
        }
        this.selectedPermissions.push(itemselected)
      }
    })
    //this.selectedPermissions.push(itemselected)
    this.selectedItems = [...this.selectedPermissions]
    this.getAllselectedPermissions.emit(this.selectedPermissions)
  }
  getselectedPermissions(name: any, value: any) {
    this.selectedPermissions = [];
    this.selectedItems.forEach((item: any) => {
      if (item.name == name) {
        const itemselected: any = {
          name: name,
          value: value
        }
        this.selectedPermissions.push(itemselected)
      } else {
        const itemselected: any = {
          name: item.name,
          value: item.value
        }
        this.selectedPermissions.push(itemselected)
      }
    })
    this.selectedItems = [...this.selectedPermissions]

  }
  getSelectedNodes(treeData: any): PermissionNode[] {
    const selectedNodes: any = [];
    treeData.forEach((tree: any) => {
      if (tree.selected) {
        tree.selectedChildren = this.getSelectedNodes(tree.children);
        selectedNodes.push(tree);
      }
    })
    return selectedNodes;
  }
  getSelectedPermissionNodes(treeData: any) {
    treeData.forEach((tree: any) => {
      const itemselected: any = {
        name: tree.data.name,
        value: tree.selected
      }
      this.selectedPermissions.push(itemselected)
      if (tree.children) {
        this.getSelectedPermissionNodes(tree.children);
      }

    })

  }
  checkForParent(treeData: PermissionNode[], node: any, event: boolean): void {
    treeData.forEach((tree: any) => {
      if (tree.data.name === node.data.parentName) {
        const exist: any = tree.children.find((x: any) => x.selected && x.data.name !== node.data.name);
        if (!exist) {
          tree.selected = event;
        }
        if (tree.data.parentName) {
          this.checkForParent(this.treeData, tree, event);
        }
      } else {
        this.checkForParent(tree.children, node, event);
      }
    })
  }

  onClicknode(node: string) {
    this.onSelectnode.emit({ item: node })
  }
  selectAllNode(node: PermissionNode, checked: boolean) {
    node.selected = checked;
    for (const n of node.children) {
      this.selectAllNode(n, checked);
    }
    const selectedNodes: PermissionNode[] = this.getSelectedNodes(this.treeData);
    this.getAllSelectedNodes.emit(selectedNodes);
  }
  unselecttAllNode(node: any, checked: boolean, name: string) {
    node.selected = checked;
    for (const n of node.children) {
      if (n.data.name != name) {
        this.unselecttAllNode(n, checked, name);
      }
    }

  }
  UnselectAllNodeExceptSelctedNode(checked: boolean, nodename: string) {
    for (const n of this.treeData) {
      this.unselecttAllNode(n, checked, nodename);
    }


  }
  selectAllFeature(event: any) {
    for (const n of this.treeData) {
      this.selectAllNode(n, event);
    }
    this.SelectAll = event;
    if (event) {
      this.onSelectAll.emit({ item: this.treeData });
    } else {
      this.onSelectAll.emit({ item: [] });
      this.resetPermission();
    }
  }

  resetPermission() {
    if (this.permissions) {
      this.permissions.forEach((element: any) => {
        if (element.value == 'false' || element.value == 'true') {
          element.value = false;
        }
        else {
          element.value = 0;
        }
      });
    }
  }

  selectAllPermissions(event: any) {
    for (const n of this.treeData) {
      this.selectAllNode(n, event);
    }
    this.SelectAll = event;
    if (event) {
      this.onSelectAll.emit({ item: this.treeData });
    } else {
      this.onSelectAll.emit({ item: [] });

    }

  }

  checkNodSelectOrnot(node: PermissionNode): boolean {
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

  onMenuWithChildrenClick(i: number, path: any) {
    const x = document.getElementById('menuWithChildren' + i);
    if (x !== null)
      this.openedMenu = x.classList.contains('collapsed');
    if (!this.openedMenu) {
      this.activepage = i;
      this.activesubmenu = 0;

    }
  }


}
