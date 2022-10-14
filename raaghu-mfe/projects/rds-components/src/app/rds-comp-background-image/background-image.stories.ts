import { RdsButtonModule, RdsLabelModule } from "@libs/rds-elements";
import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { RdsCompBackgroundImageComponent } from "./rds-comp-background-image.component";


export default {
    title: 'Components/Background Image',
    component: RdsCompBackgroundImageComponent,
    decorators: [
        moduleMetadata({
            declarations: [RdsCompBackgroundImageComponent],
            imports: [
                RdsLabelModule,RdsButtonModule
            ],
        })
    ]
} as Meta;
const Template: Story<RdsCompBackgroundImageComponent> = (args: RdsCompBackgroundImageComponent) => ({
    props: {
        ...args
    }
});

export const Default = Template.bind({});

Default.args = {
    imageUrl: 'https://cdn.pixabay.com/photo/2020/12/18/16/56/laptop-5842509_960_720.jpg',
    title: 'New arrivals are here',
    subtitle: 'The new arrivals have, well newly arrived. Check out the latest options from our summer small-batch release while they are still in stock.',
    btnLabel: 'CHECK NEW ARRIVALS HERE',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'

}