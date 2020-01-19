import React from 'react';
import './banner.scss';
import PropTypes from 'prop-types';

function Banner(props) {
    return (
        <section className="banner" style={{backgroundImage: `url("${props.image}")`}}>
            <div className="titleContainer">
                <h1>{props.title}</h1>
            </div>
        </section>
    );
}

Banner.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export { Banner };