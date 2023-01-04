
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsButtonModule } from '@libs/rds-button';
import { RdsAppDetailsModule, RdsInputModule } from '@libs/rds-elements';
import { RdsLabelModule } from '@libs/rds-label';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsCompAppDetailsComponent } from '../rds-comp-app-details/rds-comp-app-details.component';
import { RdsCompIntegrationComponent } from './rds-comp-integration.component';


export default {
    title: 'Components/ Integration',
    component: RdsCompIntegrationComponent,
    decorators: [
        moduleMetadata({
            declarations: [RdsCompIntegrationComponent, RdsCompAppDetailsComponent],

            imports: [
                CommonModule,
                FormsModule,
                RdsLabelModule,
                RdsInputModule,
                RdsButtonModule,
                RdsAppDetailsModule
            ]
        })
    ]
} as Meta;


const Template: Story<RdsCompIntegrationComponent> = (args: RdsCompIntegrationComponent) => ({
    props: {
        ...args
    }});

export const integration = Template.bind({});
integration.args = {
    integrationList: [
        {
            title: 'Zapier', subtitle: 'Build custom automation and intefrations with app', icon: 'zapier', route: '/home', selected: true, iconHeight: '25px', iconWidth: '25px', iconStroke: true, iconFill: false
        },
        {
            title: 'Adobe XD', subtitle: 'Build custom automation and intefrations with app', icon: 'xd_colored', route: '/home', selected: true, iconHeight: '25px', iconWidth: '25px', iconStroke: false, iconFill: false
        },
        {
            title: 'Figma', subtitle: 'Build custom automation and intefrations with app', icon: 'figma_colored', route: '/home', selected: true, iconHeight: '25px', iconWidth: '25px', iconStroke: false, iconFill: false
        },
        {
            title: 'Dropbox', subtitle: 'Build custom automation and intefrations with app', icon: 'dropbox_colored', route: '/home', selected: true, iconHeight: '25px', iconWidth: '25px', iconStroke: false, iconFill: false
        },
        {
            title: 'Jira', subtitle: 'Build custom automation and intefrations with app', icon: 'jira_colored', route: '/home', selected: true, iconHeight: '25px', iconWidth: '25px', iconStroke: false, iconFill: false
        },
        {
            title: 'Notion', subtitle: 'Build custom automation and intefrations with app', icon: 'notion_colored', route: '/home', selected: true, iconHeight: '25px', iconWidth: '25px', iconStroke: true, iconFill: false
        },
        {
            title: 'GitHub', subtitle: 'Build custom automation and intefrations with app', icon: 'github_colored', route: '/home', selected: true, iconHeight: '25px', iconWidth: '25px', iconStroke: true, iconFill: false
        },
        {
            title: 'Slack', subtitle: 'Build custom automation and intefrations with app', icon: 'slack_colored', route: '/home', selected: true, iconHeight: '25px', iconWidth: '25px', iconStroke: false, iconFill: false
        },
        {
            title: 'Linear', subtitle: 'Build custom automation and intefrations with app', icon: 'linear_colored', route: '/home', selected: true, iconHeight: '25px', iconWidth: '25px', iconStroke: false, iconFill: false
        }]
}
