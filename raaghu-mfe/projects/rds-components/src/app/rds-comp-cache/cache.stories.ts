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
    cashedata:[{name: "AbpUserSettingsCache"},
{name: "AbpZeroRolePermissions"},
{name: "AbpZeroTenantCache"},
{name: "AbpZeroEditionFeatures"},
{name: "AbpTenantSettingsCache"},
 {name: "token_validity_key"},
 {name: "AbpZeroMultiTenantLocalizationDictionaryCache"},
{name: "AspNet.Identity.SecurityStamp"},
{name: "TempFileCacheName"},
{name: "AbpApplicationSettingsCache"},
{name: "AbpZeroUserPermissions"},
{name: "AbpZeroLanguages"}],
role:'Advanced',
alignmentType: "end",
resetPagination: false,
recordsPerPage:  10}
