import React from 'react';
import * as PropTypes from 'prop-types';
import './Section.scss';

export function Section(props) {
    return (
        <section className={props.className ? `section ${props.className}` : "section"}>
            <h2 className="heading">{props.title}</h2>
            <div className="content">
                {props.children}
            </div>
        </section>
    );
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
};

