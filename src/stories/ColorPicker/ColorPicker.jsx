import React, {useState} from "react";
import PropTypes from "prop-types";
import {ColorOption} from "../ColorOption/ColorOption";
import "./ColorPicker.css";

export const ColorPicker = ({options, selected, ...props}) => {

    const [color, setColor] = useState(selected ? selected : '');

    return (
        <div className="color-picker" {...props}>
            {
                options.map((option, index) => {
                    return <ColorOption color={option.color} title={option.title} selected={option.color === color} key={`color-option-${index}`} onSelect={(color) => setColor(color)} />
                })
            }
        </div>
    )
}

ColorPicker.propTypes = {
    /**
     * A set of colors with hexadecimal value and title
     */
    options: PropTypes.array
}

ColorPicker.defaultProps = {
    options: {
        color: '#FFFFFF',
        title: 'White'
    }
}