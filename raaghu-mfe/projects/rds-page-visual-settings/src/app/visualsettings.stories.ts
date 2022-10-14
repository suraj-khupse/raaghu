import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCheckboxModule, RdsIconModule, RdsNavTabModule, RdsSelectListModule } from '@libs/rds-elements';
import { NgxTranslateModule } from '@libs/shared';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RdsCompVisualSettingsComponent } from 'projects/rds-components/src/app/rds-comp-visual-settings/rds-comp-visual-settings.component';
import { StoreModule } from '@ngrx/store';

export default {
    title: 'Pages/Visual Settings',
    component: RdsCompVisualSettingsComponent,
    decorators: [
        moduleMetadata({
            declarations: [
                RdsCompVisualSettingsComponent],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                RdsIconModule,
                RdsNavTabModule,
                RdsSelectListModule,
                RdsCheckboxModule,
                RdsButtonModule,
                CommonModule,
                StoreModule.forRoot({}),
                NgxTranslateModule.forRoot()
            ],
        })
    ]
} as Meta;

const Template: Story<RdsCompVisualSettingsComponent> = (args: RdsCompVisualSettingsComponent) => ({
    props: {
        ...args
    }
});

export const Default = Template.bind({});
Default.args = {
    visualsettingsItem: [{
        footer: { fixedFooter: false }
        , header: { desktopFixedHeader: true, mobileFixedHeader: true, headerSkin: null, minimizeDesktopHeaderType: null }
        , layout: { layoutType: "fluid" }
        , menu: { allowAsideMinimizing: false, asideSkin: "dark", defaultMinimizedAside: false, enableSecondary: false, fixedAside: false
            ,hoverableAside: false, position: "tab", searchActive: false, submenuToggle: null }
        ,subHeader:{containerStyle: "subheader py-2 py-lg-4  subheader-transparent",fixedSubHeader: false,subheaderSize: 5,subheaderStyle: null
            ,titleStlye: "text-dark font-weight-bold my-2 mr-5"}
        ,theme: "theme1"
    }
    ,{
        footer: { fixedFooter: false }
        , header: { desktopFixedHeader: true, mobileFixedHeader: true, headerSkin: null, minimizeDesktopHeaderType: null }
        , layout: { layoutType: "fluid" }
        , menu: { allowAsideMinimizing: false, asideSkin: "dark", defaultMinimizedAside: false, enableSecondary: false, fixedAside: false
            ,hoverableAside: false, position: "tab", searchActive: false, submenuToggle: null }
        ,subHeader:{containerStyle: "subheader py-2 py-lg-4  subheader-transparent",fixedSubHeader: false,subheaderSize: 5,subheaderStyle: null
            ,titleStlye: "text-dark font-weight-bold my-2 mr-5"}
        ,theme: "theme2"
    }
    ,{
        footer: { fixedFooter: true }
        , header: { desktopFixedHeader: true, mobileFixedHeader: true, headerSkin: null, minimizeDesktopHeaderType: null }
        , layout: { layoutType: "fluid" }
        , menu: { allowAsideMinimizing: false, asideSkin: "dark", defaultMinimizedAside: false, enableSecondary: false, fixedAside: false
            ,hoverableAside: false, position: "tab", searchActive: false, submenuToggle: null }
        ,subHeader:{containerStyle: "subheader py-2 py-lg-4  subheader-transparent",fixedSubHeader: false,subheaderSize: 5,subheaderStyle: null
            ,titleStlye: "text-dark font-weight-bold my-2 mr-5"}
        ,theme: "default"
    }],
    navtabItems: [
        { label: 'Header Bar', tablink: '#nav-headerbar', ariacontrols: 'nav-headerbar' },
        { label: 'Subheader', tablink: '#nav-subheader', ariacontrols: 'nav-subheader' },
        { label: 'Menu', tablink: '#nav-Menu', ariacontrols: 'nav-Menu' },
        { label: 'Footer', tablink: '#nav-footer', ariacontrols: 'nav-footer' },
      ]
      ,listskin: [
        { value: 'dark', displayText: 'Dark'},
        { value: 'light', displayText: 'Light' },
      ]
      ,listSubmenu: [
        { value: 'false', displayText: 'Accordian'},
        { value: 'true', displayText: 'Dropdown'},
      ]
}
