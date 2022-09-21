import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsNavTabComponent } from './rds-nav-tab.component';

export default {
    title: 'Elements/Navtabs',
    component: RdsNavTabComponent,
    decorators: [
        moduleMetadata({
            imports: [RdsIconModule],
        }),
    ],
    argTypes: {
    },
} as Meta;

const Template: Story<RdsNavTabComponent> = (args: RdsNavTabComponent) => ({
    props: args,
});
export const Default: Story<RdsNavTabComponent> = (args) => ({
    props: args,
    template:
        `
        <rds-nav-tab 
        [navtabsItems]="navtabsItems"
        horizontalAlignment="start"
        [verticalAlignment]="verticalAlignment"
        [pills]="pills"
        [tabs]="tabs"
        [fill]="fill"
        [justified]="justified"
        [flex]="false"
        ></rds-nav-tab>
       
    `,

});
Default.args = {
    navtabsItems: [
        { label: 'Active', tablink: '#nav-home', ariacontrols: 'nav-home', icon: 'administration', subText: 'Active subtext' },
        { label: 'Link', tablink: '#nav-profile', ariacontrols: 'nav-profile' },
        { label: 'Link', tablink: '#nav-contact', ariacontrols: 'nav-contact', icon: 'setting', subText: 'Home subtext' },
        { label: 'Disabled', tablink: '#nav-deabled', disabled: "true", icon: 'users', subText: 'Disble subtext' },
    ]
}
export const Tabs: Story<RdsNavTabComponent> = (args) => ({
    props: args,
    template:
        `
        <rds-nav-tab 
        [navtabsItems]="navtabsItems"
        horizontalAlignment="start"
        [verticalAlignment]="verticalAlignment"
        [pills]="pills"
        [tabs]="true"
        [fill]="fill"
        [justified]="justified"
        [flex]="false"
        [tabsWithBorderTop]="true"
        ></rds-nav-tab>
        
    `,

});
Tabs.args = {
     tabs: true,
    navtabsItems: [
        { label: 'Active', tablink: '#nav-home', ariacontrols: 'nav-home' },
        { label: 'Link', tablink: '#nav-profile', ariacontrols: 'nav-profile' },
        { label: 'Link', tablink: '#nav-contact', ariacontrols: 'nav-contact' },
        { label: 'Disabled', tablink: '#nav-deabled', disabled: "true" },
    ]
}
export const Pills: Story<RdsNavTabComponent> = (args) => ({
    props: args,
    template:
        `
        <rds-nav-tab 
        [navtabsItems]="navtabsItems"
        [horizontalAlignment]="horizontalAlignment"
        [verticalAlignment]="verticalAlignment"
        [tabs]="tabs"
        [pills]="true"  
        ></rds-nav-tab>
        
    `,

});
Pills.args = {
    pills: true,
    navtabsItems: [
        { label: 'Active', tablink: '#nav-home', ariacontrols: 'nav-home' },
        { label: 'Link', tablink: '#nav-profile', ariacontrols: 'nav-profile' },
        { label: 'Link', tablink: '#nav-contact', ariacontrols: 'nav-contact' },
        { label: 'Disabled', tablink: '#nav-deabled', disabled: "true" },
    ]
}

export const Vertical: Story<RdsNavTabComponent> = (args) => ({
    props: args,
    template:
        `
        <rds-nav-tab 
        class="tab-elements"
        [navtabsItems]="navtabsItems"
        [flex]="false"
        [verticalAlignment]="true"
        [pills]="pills"
        [tabs]="tabs"
        [fill]="fill"
        [justified]="justified"
        [flex]="true"
        ></rds-nav-tab>
        
    `,
    

});
Vertical.args = {
     verticalAlignment: true,
    navtabsItems: [
        { label: 'Active', tablink: '#nav-home', ariacontrols: 'nav-home' },
        { label: 'Link', tablink: '#nav-profile', ariacontrols: 'nav-profile' },
        { label: 'Link', tablink: '#nav-contact', ariacontrols: 'nav-contact' },
        { label: 'Disabled', tablink: '#nav-deabled', disabled: "true" },
    ]
}


