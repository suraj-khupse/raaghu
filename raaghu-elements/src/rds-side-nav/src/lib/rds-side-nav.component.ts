import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Dropdown } from 'bootstrap'

export interface SideNavItem {
  label: string,
  id: any,
  parent: any,
  active?: boolean,
  icon?: string,
  path: string,
  iconFill?: boolean,
  iconStroke?: boolean,
  children?: SideNavItem[]
}
@Component({
  selector: 'rds-side-nav',
  templateUrl: './rds-side-nav.component.html',
  styleUrls: ['./rds-side-nav.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: RdsSideNavComponent,
    multi: true
  }]
})
export class RdsSideNavComponent implements OnInit, OnChanges {

  @Input() sidenavItems: SideNavItem[] = [];
  @Input() isPageWrapper: boolean = true;
  @Input() collapseRequired: boolean = true;
  @Input() iconHeight: string = '20px';
  @Input() iconWidth: string = '20px';
  @Output() emitPath = new EventEmitter<any>();
  @Output() collapsedState = new EventEmitter<any>();
  @Input() activeMenu: any = '';
  @Output() selectedMode = new EventEmitter<any>();
  activeMenuWithChildren: any = 0;
  @Input() isLightMode: boolean = true;
  collapsed = false;
  openedMenu = false;
  activeMenuId: any;
  showHide: boolean = false;
  showHideSubmenu: boolean = false;
  title = 'rds-side-nav';
  toggleOffLabel : string = '☀️';
  toggleOnLabel : string = '🌙';

  
  constructor() { }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (this.activeMenu !== '' && this.activeMenu !== undefined) {
      this.activeMenuId = this.activeMenu.id;
      setTimeout(() => {
        this.clearItems(this.sidenavItems);
        this.findActiveItem(this.sidenavItems);
      }, 500);
    }
  }

  ngOnInit(): void {

    // $(document).on('click', '.popover-content a', function (e) {
    //   alert();
    // });
  }

  findActiveItem(sidenavItems): void {
    if (this.activeMenuId !== null && this.activeMenuId !== undefined && this.activeMenuId !== '') {
      sidenavItems.forEach((item: any, index: number) => {
        if (item.id === this.activeMenuId) {
          item.active = true;
          this.activeMenuId = item.parent;
          if (this.activeMenu.parent !== null) {
            this.onMenuWithChildrenClick(index, item, true);
          }
          this.findActiveItem(this.sidenavItems);
        } else {
          if (item.children) {
            this.findActiveItem(item.children);
          }
        }

      })
    }
  }

  clearItems(sidenavItems): void {
    sidenavItems.forEach((item: any, i: number) => {
      if (item) {
        item.active = false;
        if (item.children && item.children.length > 0) {
          const x = document.getElementById('menuWithChildren' + i);
          if (x) {
            const btnElement: any = document.getElementById(item.label + i);
            if (x.classList.contains('show')) {
              x.classList.remove('show');
              if (btnElement) {
                btnElement.setAttribute('aria-expanded', false);
              }

            }
          }
          this.clearItems(item.children);
        }
      }
    })
  }

  onClick(event: any, i: number, path: any): void {
    event.preventDefault();
    this.emitPath.emit(path);
    this.activeMenuWithChildren = '';
    this.showHide = false;
  }

  onMenuWithChildrenClick(i: number, item: any, show: boolean = false) {
    const x = document.getElementById('menuWithChildren' + i);
    if (x) {
      const btnElement: any = document.getElementById(item.label + i);
      if (!show) {
        if (x.classList.contains('show')) {
          x.classList.remove('show');
          if (btnElement) {
            btnElement.setAttribute('aria-expanded', false);
          }

        } else {
          x.classList.add('show');
          if (btnElement) {
            btnElement.setAttribute('aria-expanded', true);
          }
        }
      } else {
        x.classList.add('show');
        if (btnElement) {
          btnElement.setAttribute('aria-expanded', true);
        }
      }

    }
  }

  onClickSubMenu(event: any, i: number, j: number, path: any): void {
    event.preventDefault();
    this.emitPath.emit(path);
    this.activeMenuWithChildren = i;
  }


  onCollapse() {
    this.collapsed = !this.collapsed;
    this.collapsedState.emit(this.collapsed);
  }

  toggleLightAndDarkMode() {
    this.isLightMode = !this.isLightMode
    this.selectedMode.emit(this.isLightMode)
  }


  openSideDropdown(id, item): void {
    this.collapseDropdown(item.children);
    var element: any = document.getElementById(id);
    var dropdown = new Dropdown(element);
    dropdown.show();
  }

  collapseDropdown(children): void {
    children.forEach((child) => {
      if (child.children) {
        child.expanded = child.active;
        this.collapseDropdown(child.children);
      }
    })
  }

  expandMenu(item, id): void {
    if (item.children && item.children.length > 0) {
      if (item.expanded) {
        item.expanded = false
      } else {
        item.expanded = true;
      }
    } else {
      this.emitPath.emit(item);
      var element: any = document.getElementById(id);
      var dropdown = new Dropdown(element);
      dropdown.hide();
    }

  }

}
