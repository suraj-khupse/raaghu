import { Component } from '@angular/core';
import { ComponentLoaderOptions } from '@libs/shared';
import { TableHeader } from 'projects/rds-components/src/models/table-header.model';
import { Claims, Resource } from '../modal/IdentityResourcemodals';

declare let bootstrap: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'identity-resources';
  activePage: any;
  rdsresourceTableMfeConfig: ComponentLoaderOptions;
  BasicResource: Resource;
  public navtabsItems: any = [
    {
      label: 'Basics',
      tablink: '#Basics',
      ariacontrols: 'Basics',
    },
    {
      label: 'Claim',
      tablink: '#Claim',
      ariacontrols: 'Claim',
    },
  ];
  public navtabsItemsEdit: any = [
    {
      label: 'Basics',
      tablink: '#Basicsedit',
      ariacontrols: 'Basics',
    },
    {
      label: 'Claim',
      tablink: '#ClaimEdit',
      ariacontrols: 'Claim',
    },
    {
      label: 'Properties',
      tablink: '#Properties',
      ariacontrols: 'Properties',
    },
  ];
  ResourceTableHeader: TableHeader[] = [
    {
      displayName: 'Name',
      key: 'Name',
      dataType: 'text',
      dataLength: 30,
      sortable: true,
      required: true,
    },
    {
      displayName: 'DisplayName',
      key: 'Displayname',
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
  ResourceTableData: any = ([] = [
    {
      Name: 'User Id',
      Displayname: 'your Id',
      Description: 'Assosiate',
      id: 1,
    },
    {
      Name: 'User Id',
      Displayname: 'your Id',
      Description: 'Assosiate',
      id: 2,
    },
    {
      Name: 'User Id',
      Displayname: 'your Id',
      Description: 'Assosiate',
      id: 3,
    },
    {
      Name: 'User Id',
      Displayname: 'your Id',
      Description: 'Assosiate',
      id: 4,
    },
    {
      Name: 'User Id',
      Displayname: 'your Id',
      Description: 'Assosiate',
      id: 5,
    },
    {
      Name: 'User Id',
      Displayname: 'your Id',
      Description: 'Assosiate',
      id: 6,
    },
  ]);
  Properties: any = ([] = [{ key: 'ShairedSecrets', Value: '12345' }]);
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
    this.rdsresourceTableMfeConfig = {
      name: 'RdsDataTable',
      input: {
        tableHeaders: this.ResourceTableHeader,
        tableStyle: 'light',
        width: '100%',
        tableData: this.ResourceTableData,
        recordsPerPage: 10,
        pagination: true,
        inlineEdit: false,
        actions: [{ id: 'delete', displayName: 'Delete' }, { id: 'edit', displayName: 'Edit' }],
        noDataTitle: 'Currently you do not have identity resource'
      },
      output: {
        onActionSelection: (event: any) => {
          if (event.actionId === 'delete') {
            const index = this.ResourceTableData.findIndex(
              (x: any) => x.userId === event.selectedData.userId
            );
            if (index !== -1) {
              this.ResourceTableData.splice(index, 1);
              const mfeConfig = this.ResourceTableData;
              mfeConfig.input.tableData = [...this.ResourceTableData];
              this.ResourceTableData = mfeConfig;
            }
          } else if (event.actionId === 'edit') {
            this.BasicResource = event.selectedData
            this.EditIdentyresource(undefined);
          }
        }
      }
    };
  }
  EditIdentyresource(event): void {
    setTimeout(() => {
      var offcanvas = document.getElementById('EditIdentityresource');
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show();
    }, 100);

    this.activePage = 0;
  }
  SaveBasicResource(BasicResource: any) {
    const ResourceList: any = this.ResourceTableData;
    if (BasicResource.BasicResource.id) {
      const BasicResourceData = ResourceList.find((x: any) => x.id === BasicResource.BasicResource.id)
      BasicResourceData.Name = BasicResource.BasicResource.Name;
      BasicResourceData.Displayname = BasicResource.BasicResource.Displayname;
      BasicResourceData.Description = BasicResource.BasicResource.Description;
    } else {
      this.ResourceTableData.push(BasicResource.BasicResource)
    }
  }
  SaveClaimResource(Claim: any) {
  }
}
