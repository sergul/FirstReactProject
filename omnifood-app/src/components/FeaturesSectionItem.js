import React from 'react';
import PropTypes from 'prop-types';

const FeaturesSectionItem = ({icon, title, text}) => {
    return (
        <div className="feature-section-item">
            <i className={icon}></i>
            <h3 className="margin-top">{ title }</h3>
            <p className="margin-top">
                { text }
            </p>
        </div>
    );
};

FeaturesSectionItem.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string
};

export { FeaturesSectionItem };