import React from "react";
import PropTypes from "prop-types";
import '../main.scss';

/**
 * Super UI component for user interaction
 */
export const Select = ({ label, options, ...props }) => {
    return (
        <label>{label}
            <select {...props}>
                {
                    options.map((option, index) =>
                        <option value={option.value}>{option.label}</option>
                    )
                }
            </select>
        </label>
    )
}

Select.propTypes = {
    /**
     * Array of select options
     */
    options: PropTypes.array,
    /**
     * Label displayed above select
     */
    label: PropTypes.string.isRequired,
    /**
     * Is this a multiple type select?
     */
    multiple: PropTypes.bool
}

Select.defaultProps = {
    multiple: false
}