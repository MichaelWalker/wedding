import React from 'react';
import './Button.scss';
import * as PropTypes from 'prop-types';

export function LinkButton(props) {
    return (
        <a href={props.href} className="button">
            {props.children}
        </a>
    );
}

LinkButton.propTypes = {
    href: PropTypes.string.isRequired,
};