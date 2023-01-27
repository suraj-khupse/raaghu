import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { UserAuthService } from '@libs/shared';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { restoreToDefault, saveTextTemplateContent } from 'projects/libs/state-management/src/lib/state/text-template/text-template.actions';


//import { satt } from 'projects/libs/state-management/src/lib/state/text-template/text-template.selector';
import { getTemplateContent, getTemplateDefinition } from 'projects/libs/state-management/src/lib/state/user/user.actions';
import { selectAllTT, selectTextContent } from 'projects/libs/state-management/src/lib/state/user/user.selector';


import { TableHeader } from 'projects/rds-components/src/models/table-header.model';
declare var bootstrap: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = 'text-template';
  currentAlerts: any = [];
  @Output() onEdit = new EventEmitter<any>();
  @Output() onRestore = new EventEmitter<any>();
  viewCanvas: boolean = false;
  canvasTitle: string = '';
  templateList: any = [];
  offcanvasId: string = 'text_template_canvas';
  selectedData: any = {
    templateName: '',
    content: '',
    cultureName:null
  };
  

  tableHeadersForTextTemplate: TableHeader[] = [
    { key: 'templateName', displayName: 'Template Name', dataType: 'text', filterable: true, sortable: true, required: false, },
    { key: 'inlineLocalized', displayName: 'Inline Localized', dataType: 'icon', filterable: true, sortable: true, required: false, },
    { key: 'layoutStatus', displayName: 'Layout Status', dataType: 'icon', filterable: true, sortable: true, required: false, },
    { key: 'layoutDetails', displayName: 'Layout Details', dataType: 'html', filterable: true, sortable: true, required: false, },

  ];

  actions = [{ id: 'edit', displayName: 'Edit' }];
  
  constructor(private store: Store,private translate:TranslateService, private userAuthService:UserAuthService) { }
  tableDataForTextTemplate = [];
 
  ngOnInit(): void {
    if(this.userAuthService.currentLanguage){
      this.translate.use(this.userAuthService.currentLanguage);
    }
    this.userAuthService.languageObservable$.subscribe((res: any) => {
      if (res) {
        this.translate.use(res);
      }
    }) 

    this.store.dispatch(getTemplateDefinition());
    this.store.select(selectAllTT).subscribe((res: any) => {

      if (res && res.allTextTemplate) {
        res.allTextTemplate.allTextTemplate.items.forEach((element: any) => {
          let statusTemplate;
          if (element.isActive) {
            statusTemplate = `<div> <span class="badge badge-success">Active</span></div>`;
          } else {
            statusTemplate = `<div><span class="badge badge-secondary">Inactive</span></div>`;
          }

          const inlineLocalized: any = element.isInlineLocalized
          ? {
            icon: 'tick',
            width: '24px',
            height: '16px',
            colorVariant: 'success',
          }
          : {
            icon: 'close',
            width: '24px',
            height: '16px',
            colorVariant: 'danger',
          };

          const isLayout: any = element.isLayout
          ? {
            icon: 'tick',
            width: '24px',
            height: '16px',
            colorVariant: 'success',
          }
          : {
            icon: 'close',
            width: '24px',
            height: '16px',
            colorVariant: 'danger',
          };

          const item: any = {
            // id:element.id,
            name: element.name,
            templateName: element.displayName,
            inlineLocalized:inlineLocalized,
            layoutStatus: isLayout,
            layoutDetails: element.layout

          }
          this.templateList.push(item);
        });
      }
    });

    this.store.select(selectTextContent).subscribe((res: any) => {
      if (res && res.templateContent) {
        this.selectedData={

        }
        const data=res.templateContent
        this.selectedData.templateName = data.name;
        this.selectedData.content = data.content;
      }
    })
  }

  onActionSelection(event: any) {
    if (event.actionId === 'edit') {
      this.openTextTemplate();

      const data: any = {
        templateName: event.selectedData.name,
      }
      this.store.dispatch(getTemplateContent(data));
    }
  }

  openTextTemplate(): void {
    this.canvasTitle = 'Contents';
    this.viewCanvas = true;
    setTimeout(() => {
      var offcanvas = document.getElementById(this.offcanvasId);
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show();
    }, 100);
  }

  close(): void {
    this.viewCanvas = false;
  }

  save(): void {
    if (this.selectedData) {
      this.selectedData.cultureName = null;
      this.store.dispatch(saveTextTemplateContent(this.selectedData))
      this.viewCanvas = false;
    }
  }
  restore(event): void {
    // this.onRestore.emit(event)
    // console.log('restore', event)
    this.store.dispatch(restoreToDefault(this.selectedData))
  }
}