import { Story, Meta } from '@storybook/angular';
import { RdsChartRadarComponent } from './rds-chart-radar.component';

export default {
    title: 'Charts/Radar Chart',
    component: RdsChartRadarComponent,
    argTypes: {
        canvasBackgroundColor: { control: 'color' },
        chartStyle: {
            options: ['Dark', 'light'],
            control: 'radio'
        }
    },
} as Meta;

const Template: Story<RdsChartRadarComponent> = (args: RdsChartRadarComponent) => ({
    props: args,
});

export const Default = Template.bind({});
Default.args = {

    chartDataSets: [
        {
            label: 'Dataset 1',
            data: [0.5, 0.8, 0.4, 0.6, 0.7, 0.2, 0.9],
            borderColor: ['#ff9f40'],
            backgroundColor: ['rgba(255, 99, 132, 0.2)'],
            fill: false,
            pointStyle: 'circle',
            pointRadius: 2,

        },
        {
            label: 'Dataset 2',
            data: [0.9, 0.3, 0.8, 0.9, 0.1, 0.7, 0.2],
            borderColor: ['#ff6384'],
            backgroundColor: ['rgba(255, 206, 86, 0.2)'],
            fill: true,
            pointStyle: 'circle',
            pointRadius: 2,

        },
        {
            label: 'Dataset 3',
            data: [0.7, 0.2, 0.1, 0.9, 0.8, 0.4, 0.7],
            borderColor: ['#83BE5A'],
            backgroundColor: ['rgba(255, 240, 204, 0.2)'],
            fill: false,
            pointStyle: 'circle',
            pointRadius: 2,
        }
    ],
    chartLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July'],
    chartWidth: 400,
    chartHeight: 400,
    chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        chartArea: {
            backgroundColor: 'rgba(251, 85, 85, 0.4)'
        },
        plugins: {

            title: {
                display: true,
                text: 'Radar Chart'
            },
            legend: {
                position: 'top',
                align: "center",

                pointStyle: 'rectRot',
                pointRadius: 5,
                labels: {

                    usePointStyle: true
                }

            },
            tooltip: {
                usePointStyle: true,
            },
            scale: {
                type: 'line',
                angleLines: {
                    display: true
                },
            },

        },

    },

};





