import React from "react";

import { Select } from "../components/Select/Select";

export default {
    title: 'Select',
    component: Select,
    argTypes: {
    }
};

const Template = (args) => <Select {...args} />;

export const Single = Template.bind({});
Single.args = {
    label: 'Single select',
    options: [
        {
            label: 'Option One',
            value: 'one'
        }
    ]
}

export const Multiple = Template.bind({});
Multiple.args = {
    label: 'Multiple select',
    options: [
        {
            label: 'Option One',
            value: 'one'
        },
        {
            label: 'Option Two',
            value: 'Two'
        },
        {
            label: 'Option Three',
            value: 'three'
        }
    ],
    multiple: true
}