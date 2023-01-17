import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
import { RdsCompDemouiComponent } from './rds-comp-demoui.component';
import {
  RdsAccordionModule, RdsButtonModule, RdsAlertModule, RdsAvatarModule, RdsBadgeModule,
  RdsBannerModule, RdsWidgetModule, RdsBigNumberWidgetModule, RdsButtonGroupModule, RdsBreadcrumbModule,
  RdsCardModule, RdsCarouselModule, RdsCheckboxModule, RdsCheckboxGroupsModule, RdsCheckboxParentChildModule,
  RdsCollapseModule, RdsColorPickerModule, RdsDatepickerModule, RdsDoubleRangeModule, RdsDropdownlistModule,
  RdsTextEditorModule, RdsFileUploaderModule, RdsIllustrationModule, RdsInputGroupModule, RdsInputModule,
  RdsListGroupModule, RdsModalModule, RdsNavTabModule, RdsOffcanvasModule, RdsPaginationModule, RdsPopoverModule,
  RdsRadioButtonModule, RdsProgressbarModule, RdsSearchInputModule, RdsSpinnerModule, RdsSelectListModule,
  RdsTableModule, RdsTagsModule, RdsTextareaModule, RdsToastsModule, RdsCounterModule,
  RdsChartAreaModule, RdsChartBarHorizontalModule, RdsChartBoolModule, RdsChartBubbleModule, RdsChartMixedModule,
  RdsChartDoughnutModule, RdsChartPieModule, RdsChartPolarAreaModule, RdsChartRadarModule, RdsChartScatterModule,
  RdsChartLineModule, RdsChartStackedModule, RdsVideoPlayerModule
} from "@libs/rds-elements";
import { RdsIconModule } from 'raaghu-themes/rds-icons'


@NgModule({
  declarations: [
    RdsCompDemouiComponent
  ],
  exports: [
    RdsCompDemouiComponent
  ],
  imports: [
    CommonModule,
    // FormsModule,
    RdsAccordionModule,
    RdsButtonModule,
    RdsButtonGroupModule,
    RdsAlertModule,
    RdsAvatarModule,
    RdsBadgeModule,
    RdsIconModule,
    RdsBannerModule,
    RdsWidgetModule,
    RdsBigNumberWidgetModule,
    RdsBreadcrumbModule,
    RdsCardModule,
    RdsCarouselModule,
    RdsCheckboxModule,
    RdsCheckboxGroupsModule,
    RdsCheckboxParentChildModule,
    RdsCollapseModule,
    RdsColorPickerModule,
    RdsDatepickerModule,
    RdsDoubleRangeModule,
    RdsDropdownlistModule,
    RdsTextEditorModule,
    RdsFileUploaderModule,
    RdsIllustrationModule,
    RdsInputGroupModule,
    RdsInputModule,
    RdsListGroupModule,
    RdsModalModule,
    RdsNavTabModule,
    RdsOffcanvasModule,
    RdsPaginationModule,
    RdsPopoverModule,
    RdsRadioButtonModule,
    RdsProgressbarModule,
    RdsSearchInputModule,
    RdsSpinnerModule,
    RdsSelectListModule,
    RdsTableModule,
    RdsTagsModule,
    RdsTextareaModule,
    RdsToastsModule,
    RdsCounterModule,
    RdsChartAreaModule,
    RdsChartBarHorizontalModule,
    RdsChartBoolModule,
    RdsChartBubbleModule,
    RdsChartMixedModule,
    RdsChartDoughnutModule,
    RdsChartPieModule,
    RdsChartPolarAreaModule,
    RdsChartRadarModule,
    RdsChartScatterModule,
    RdsChartLineModule,
    RdsChartStackedModule,
    RdsVideoPlayerModule
  ]
})
export class RdsCompDemoUiModule { }
