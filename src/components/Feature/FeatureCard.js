import React from 'react';
import './Feature.css';

const FeatureCard = props => {
    return (
        <div className={props.class}>
            <div className="feature__icon"></div>
            <h4>{props.title}</h4>
            <p>{props.content}</p>
        </div>
    )
}

export default FeatureCard
