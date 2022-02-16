import React from "react";
import { ColorOption } from "../components/ColorOption/ColorOption";

export default {
    title: 'Color Option',
    component: ColorOption,
    argTypes: {
        color: {
            control: 'color'
        }
    }
}

const Template = (args) => <ColorOption {...args} onSelect={() => {}}/>;

export const Default = Template.bind({});
Default.args = {
    color: '#FFFFFF',
    title: 'White',
    selected: false
}

export const Selected = Template.bind({});
Selected.args = {
    color: '#FFFFFF',
    title: 'White',
    selected: true
}