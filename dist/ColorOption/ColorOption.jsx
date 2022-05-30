import React from 'react';
import PropTypes from "prop-types";
import './ColorOption.css';

/**
 * Color option in color picker component
 */
export const ColorOption = ({color, title, selected, ...props}) => {

    const mode = selected ? "color-option--selected" : "";

    return (
        <div className={["color-option", mode].join(" ")} {...props} onClick={() => props.onSelect(color)}>
            <div className="color-option__color" style={{backgroundColor: color}} />
            <div className="color-option__title">Color: {title}</div>
        </div>
    )

};

ColorOption.propTypes = {
    /**
     * The hexadecimal color value
     */
    color: PropTypes.string,
    /**
     * The title of the color
     */
    title: PropTypes.string,
    /**
     * Color option is selected
     */
    selected: PropTypes.bool
}

ColorOption.defaultProps = {
    color: '#FFFFFF',
    title: 'White',
    selected: false
}