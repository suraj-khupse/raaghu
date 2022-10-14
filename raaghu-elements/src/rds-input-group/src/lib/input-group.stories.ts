
import { Story, Meta } from '@storybook/angular';
import { RdsInputGroupComponent } from './rds-input-group.component';

export default {

    title: 'Elements/Input Group',
    component: RdsInputGroupComponent,
    // decorators: [
    //     moduleMetadata({
    //         declarations: [RdsInputComponent, RdsSelectListComponent],
    //         schemas: [CUSTOM_ELEMENTS_SCHEMA],
    //     }),
    // ],
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: { type: 'select' }
        },
         colorVariant: {
            options:['warning' , 'danger' , 'success' , 'info' , 'primary' , 'secondary' , 'dark' , 'light'],
            control: { type: 'select' }}

    },
} as Meta;

export const Default: Story<RdsInputGroupComponent> = (args) => ({
    props: args, 
});
Default.args = {
    
}



// template: `<rds-input-group>
// <input   type="text" class="form-control"  id="Errormessage" placeholder="placeholder">
// <button class="btn btn-outline-secondary" type="button" id="button-addon1">Button</button>
// </rds-input-group>`

  // template:   `<rds-input-group>
    //                 <label>{{label}}</label>
    //                     <div class="input-group mb-2 " [ngClass]="{'input-group-sm': size == 'sm', 'input-group-lg': size == 'lg'}">
    //                         <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="button-addon1" placeholder="placeholder">
    //                         <button class="btn btn-secondary" type="button" id="button-addon1">Button</button>
    //                     </div>
    //             </rds-input-group>`