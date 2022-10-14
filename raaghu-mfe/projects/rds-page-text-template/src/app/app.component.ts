import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ComponentLoaderOptions } from '@libs/shared';
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

  viewCanvas: boolean = false;
  canvasTitle: string = '';
  offcanvasId: string = 'text_template_canvas';
  selectedData: any={};
  tableHeadersForTextTemplate:TableHeader[] = [
    {
      displayName: 'Template Name',
      key: 'templateName',
      dataType: 'text',
      dataLength: 5,
      required: false,
      filterable: true,
      sortable: true,
    },
    {
      displayName: 'Inline Localized',
      key: 'inlineLocalizedTemplate',
      dataType: 'html',
      required: false,
    },
    {
      displayName: 'Layout Status',
      key: 'layoutStatusTemplate',
      dataType: 'html',
      required: false,
    },
    {
      displayName: 'Layout Details',
      key: 'layoutDetails',
      dataType: 'text',
      dataLength: 5,
      required: true,
      sortable: true,
    },
  ];
  tableDataForTextTemplate = [
    {
      id: 1,
      templateName: 'Default Email Layout Template',
      inlineLocalized: true,
      layoutStatus: false,
      layoutDetails: 'abp.EmailLayoutTemplate',
    },
    {
      id: 2,
      templateName: 'Simple Message Template',
      inlineLocalized: true,
      layoutStatus: true,
      layoutDetails: 'abp.EmailLayoutTemplate',
    },
    {
      id: 3,
      templateName: 'Default Email Layout Template',
      inlineLocalized: true,
      layoutStatus: true,
      layoutDetails: 'abp.PasswordResetTemplate',
    },
    {
      id: 4,
      templateName: 'Password Reset Template',
      inlineLocalized: true,
      layoutStatus: true,
      layoutDetails: 'abp.EmailLayoutTemplate',
    },
    {
      id: 5,
      templateName: 'Simple Message Template',
      inlineLocalized: true,
      layoutStatus: false,
      layoutDetails: 'abp.PasswordResetTemplate',
    },
    {
      id: 6,
      templateName: 'Email Confirmation Template',
      inlineLocalized: false,
      layoutStatus: false,
      layoutDetails: 'abp.SecurityCodeTemplate',
    },
    {
      id: 7,
      templateName: 'Default Email Layout Template',
      inlineLocalized: false,
      layoutStatus: true,
      layoutDetails: 'abp.EmailConfirmationTemplate',
    },
    {
      id: 8,
      templateName: 'Email Confirmation Template',
      inlineLocalized: true,
      layoutStatus: false,
      layoutDetails: 'abp.EmailLayoutTemplate',
    },
    {
      id: 9,
      templateName: 'Password Reset Template',
      inlineLocalized: false,
      layoutStatus: true,
      layoutDetails: 'abp.EmailConfirmationTemplate',
    },
    {
      id: 10,
      templateName: 'Simple Message Template',
      inlineLocalized: true,
      layoutStatus: true,
      layoutDetails: 'abp.SecurityCodeTemplate',
    },
    {
      id: 11,
      templateName: 'Default Email Layout Template',
      inlineLocalized: true,
      layoutStatus: false,
      layoutDetails: 'abp.EmailConfirmationTemplate',
    },
    {
      id: 12,
      templateName: 'Password Reset Template',
      inlineLocalized: false,
      layoutStatus: true,
      layoutDetails: 'abp.EmailLayoutTemplate',
    },
    {
      id: 13,
      templateName: 'Simple Message Template',
      inlineLocalized: true,
      layoutStatus: false,
      layoutDetails: 'abp.PasswordResetTemplate',
    },
    {
      id: 14,
      templateName: 'Default Email Layout Template',
      inlineLocalized: false,
      layoutStatus: false,
      layoutDetails: 'abp.EmailLayoutTemplate',
    },
    {
      id: 15,
      templateName: 'Default Email Layout Template',
      inlineLocalized: true,
      layoutStatus: true,
      layoutDetails: 'abp.EmailLayoutTemplate',
    },
    {
      id: 16,
      templateName: 'Simple Message Template',
      inlineLocalized: true,
      layoutStatus: false,
      layoutDetails: 'abp.SecurityCodeTemplate',
    },
  ];
  rdsDataTableForTextTemplateMfeConfig: ComponentLoaderOptions = {
    name: 'RdsDataTable',
    input: {
      tableData: this.tableDataForTextTemplate,
      tableHeaders: this.tableHeadersForTextTemplate,
      recordsPerPage: 5,
      width: '100%',
      pagination: true,
      actions: [{ id: 'edit', displayName: 'Edit' }],
      inlineEdit: false,
    },
    output: {
      onActionSelection: (event: any) => {
        if(event.actionId==='edit'){
          this.selectedData = event.selectedData;
          this.openTextTemplate();
        }
      },
      
    },
  };

  ngOnInit(): void {
    this.tableDataForTextTemplate.forEach((item) => {
      if (item.inlineLocalized) {
        item['inlineLocalizedTemplate'] = '<i class="bi bi-check-lg"></i>';
      } else {
        item['inlineLocalizedTemplate'] = '<i class="bi bi-x-lg"></i>';
      }
      if (item.layoutStatus) {
        item['layoutStatusTemplate'] = '<i class="bi bi-check-lg"></i>';
      } else {
        item['layoutStatusTemplate'] = '<i class="bi bi-x-lg"></i>';
      }
    });
    const mfeConfig = this.rdsDataTableForTextTemplateMfeConfig;
    mfeConfig.input.tableData = [...this.tableDataForTextTemplate];
    this.rdsDataTableForTextTemplateMfeConfig = mfeConfig;
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
     
   }
}
