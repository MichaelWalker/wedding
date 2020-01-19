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

export function SubmitButton(props) {
    return (
        <button className="button">{props.children}</button>
    );
}

LinkButton.propTypes = {
    href: PropTypes.string.isRequired,
};