import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ComponentLoaderOptions } from '@libs/shared';
import { TableHeader } from 'projects/rds-components/src/models/table-header.model';
import { Claims } from './api-claims/api-claims.component';

export class apiResponsetype {
  public Name: string;
  public DisplayName: string;
  public Description: string;
}


declare let bootstrap: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public apiResourceForm: FormGroup;
  rdsApiResourceTableMfeConfig: ComponentLoaderOptions;

  constructor(private formBuilder: FormBuilder) { }

  apiResponsetypeTypeData: apiResponsetype = {
    Name: '',
    DisplayName: '',
    Description: '',
  };
  activePage: any;
  BasicResource: any;

  Properties: any = ([] = []);

  Secrets: any = ([] = [{ type: 'SharedSecrets', value: '12121', expiration: '12/12/1000', description: 'ABCDEF' }]);

  apiResourceTableHeader: TableHeader[] = [
    {
      displayName: 'Name',
      key: 'Name',
      dataType: 'text',
      dataLength: 30,
      sortable: true,
      required: true,
    },
    {
      displayName: 'Display Name',
      key: 'DisplayName',
      dataType: 'text',
      dataLength: 30,
      required: true,
      sortable: true,
    },
    {
      displayName: 'Description',
      key: 'Description',
      dataType: 'text',
      dataLength: 30,
      required: true,
      sortable: true,
    },
  ];

  apiResourceTableData: any = ([] = [
    { Name: 'User Id', DisplayName: 'Your Id', Description: 'Assosiate' },
    {
      Name: 'Address',
      DisplayName: 'Your Address',
      Description: 'Address as described as the documents',
    },
    {
      Name: 'Email Id',
      DisplayName: 'Your Email Id',
      Description: 'Email Id associated',
    },
    {
      Name: 'Phone Number',
      DisplayName: 'Your Phone Number',
      Description: 'Contact number to this account',
    },
    {
      Name: 'Profile',
      DisplayName: 'Your Profile',
      Description: 'Image as per request',
    },
    {
      Name: 'Phone Number',
      DisplayName: 'Your Phone Number',
      Description: 'Contact number to this account',
    },
    {
      Name: 'Profile',
      DisplayName: 'Your Profile',
      Description: 'Image as per request',
    },
  ]);

  navtabsItems: any = [
    {
      label: 'Basics',
      tablink: '#basics',
      ariacontrols: 'basics',
    },
    {
      label: 'Claims',
      tablink: '#claims',
      ariacontrols: 'claims',
    },
  ];

  navtabsItemsEdit: any = [
    {
      label: 'Basics',
      tablink: '#editBasics',
      ariacontrols: 'basics',
    },
    {
      label: 'Claims',
      tablink: '#editClaims',
      ariacontrols: 'claims',
    },
    {
      label: 'Secrets',
      tablink: '#editSecrets',
      ariacontrols: 'secrets',
    },
    {
      label: 'Properties',
      tablink: '#editProperties',
      ariacontrols: 'properties',
    },
  ];

  claimData: Claims = {
    claim_ato_e: [
      { label: 'Availability', checked: false },
      { label: 'Apiopolis', checked: false },
      { label: 'Apigenix', checked: false },
      { label: 'Best Selector', checked: false },
      { label: 'Best Selector', checked: false },
      { label: 'Creative', checked: false },
      { label: 'ALT Genix Api', checked: false },
      { label: 'Dev Support Api', checked: false },
    ],
    claim_f_to_o: [
      { label: 'Availability', checked: false },
      { label: 'Apiopolis', checked: false },
      { label: 'Apigenix', checked: false },
      { label: 'Best Selector', checked: false },
      { label: 'Best Selector', checked: false },
      { label: 'Creative', checked: false },
      { label: 'ALT Genix Api', checked: false },
      { label: 'Dev Support Api', checked: false },
    ],
    claim_p_to_z: [
      { label: 'Availability', checked: false },
      { label: 'Apiopolis', checked: false },
      { label: 'Apigenix', checked: false },
      { label: 'Best Selector', checked: false },
      { label: 'Best Selector', checked: false },
      { label: 'Creative', checked: false },
      { label: 'ALT Genix Api', checked: false },
      { label: 'Dev Support Api', checked: false },
    ],
  };
  ngOnInit(): void {
    this.activePage = 0;

    this.rdsApiResourceTableMfeConfig = {
      name: 'RdsDataTable',
      input: {
        tableHeaders: this.apiResourceTableHeader,
        tableStyle: 'light',
        width: '100%',
        tableData: this.apiResourceTableData,
        recordsPerPage: 10,
        pagination: true,
        inlineEdit: false,
        actions: [{ id: 'delete', displayName: 'Delete' }, { id: 'edit', displayName: 'Edit' }],
        noDataTitle: 'Currently you do not have resource'
      },
      output: {
        onActionSelection: (event: any) => {
          if (event.actionId === 'delete') {
            const index = this.apiResourceTableData.findIndex(
              (x: any) => x.userId === event.selectedData.userId
            );
            if (index !== -1) {
              this.apiResourceTableData.splice(index, 1);
              const mfeConfig = this.rdsApiResourceTableMfeConfig;
              mfeConfig.input.tableData = [...this.apiResourceTableData];
              this.rdsApiResourceTableMfeConfig = mfeConfig;
            }
          } else if (event.actionId === 'edit') {
            this.BasicResource = event.selectedData
            this.EditApiresource(undefined);
          }

        },
      },
    };
  }

  EditApiresource(event): void {
    setTimeout(() => {
      var offcanvas = document.getElementById('EditApiresource');
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show();
    }, 100);
    this.activePage = 0;
  }

  SaveBasicResource(BasicResource: any) {
    const ResourceList: any = this.apiResourceTableData;
    if (BasicResource.BasicResource.id) {
      const BasicResourceData = ResourceList.find((x: any) => x.id === BasicResource.BasicResource.id)
      BasicResourceData.Name = BasicResource.BasicResource.Name;
      BasicResourceData.Displayname = BasicResource.BasicResource.Displayname;
      BasicResourceData.Description = BasicResource.BasicResource.Description;
    } else {
      this.apiResourceTableData.push(BasicResource.BasicResource)
    }
  }


  SaveClaimResource(Claim: any) {
  }
}
