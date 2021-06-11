import React from 'react';
import './Feature.scss';

const FeatureCard = props => {
    return (
        <div className="feature__card">
            <div className="feature__icon">
                <img src={props.icon} alt="feature-icon" />
            </div>
            <h4>{props.title}</h4>
            <p>{props.content}</p>
        </div>
    )
}

export default FeatureCard
