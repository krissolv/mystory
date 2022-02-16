import React from "react";
import { ColorPicker } from "./ColorPicker";

export default {
    title: 'Color Picker',
    component: ColorPicker,
    argTypes: {
    }
};

const Template = (args) => <ColorPicker {...args} />;

export const Default = Template.bind({});
Default.args = {
    options: [
        {
            color: '#FFFFFF',
            title: 'White'
        },
        {
            color: '#00FF00',
            title: 'Green'
        },
        {
            color: '#FF0000',
            title: 'Red'
        }
    ]
}

export const WithSelected = Template.bind({});
WithSelected.args = {
    selected: '#00FF00',
    options: [
        {
            color: '#FFFFFF',
            title: 'White'
        },
        {
            color: '#00FF00',
            title: 'Green'
        },
        {
            color: '#FF0000',
            title: 'Red',
            selected: true
        }
    ]
}
