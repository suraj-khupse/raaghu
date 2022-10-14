import { FormBuilder } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsIconModule, RdsPaginationModule } from '@libs/rds-elements';
import { NgxTranslateModule } from '@libs/shared';
import { RdsCompCacheComponent } from './rds-comp-cache.component';

export default {
  title: 'Components/Cache',
  component: RdsCompCacheComponent,
  decorators: [
    moduleMetadata({
      imports: [
        RdsButtonModule,
        RdsIconModule,
        RdsPaginationModule,
        NgxTranslateModule.forRoot()
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdsCompCacheComponent> = (args: RdsCompCacheComponent) => ({
    props:{
        ...args
    }
});

export const Default = Template.bind({});
Default.args={
    cashedata:[{ id: 1,name: "AbpUserSettingsCache"},
{ id: 2,name: "AbpZeroRolePermissions"},
{ id: 3,name: "AbpZeroTenantCache"},
{ id: 4,name: "AbpZeroEditionFeatures"},
{ id: 5,name: "AbpTenantSettingsCache"},
 { id: 6,name: "token_validity_key"},
 { id: 7,name: "AbpZeroMultiTenantLocalizationDictionaryCache"},
{ id: 8,name: "AspNet.Identity.SecurityStamp"},
{ id: 9,name: "TempFileCacheName"},
{ id: 10,name: "AbpApplicationSettingsCache"},
{ id: 11,name: "AbpZeroUserPermissions"},
{ id: 12,name: "AbpZeroLanguages"}],
role:'Advanced',
alignmentType: "end",
resetPagination: false,
recordsPerPage:  10}
