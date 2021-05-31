import React from 'react';
import './Feature.css';
import FeatureCard from './FeatureCard';

const Feature = () => {
    return (
        <div className="feature container">
            <div className="row">
                <div className="col-3">
                    <FeatureCard class="feature__card card__one" title="Web Design" content="Credit goes to Pexels and Raw Pixel for images used in this template. Thank you." />
                </div>
                <div className="col-3">
                    <FeatureCard class="feature__card card__two" title="Bootstrap 4" content="Proin aliquam facilisis ante interdum. Sed nulla feugiat tempus aliquam." />
                </div>
                <div className="col-3">
                    <FeatureCard class="feature__card card__three" title="HTML CSS" content="Proin aliquam facilisis ante interdum. Sed nulla feugiat tempus aliquam." />
                </div>
                <div className="col-3">
                    <FeatureCard class="feature__card card__four" title="Download Free" content="We have many free to use CSS web templates on our site for you." />
                </div>
                <div className="col-3">
                    <FeatureCard class="feature__card card__five" title="Get in touch" content="You can get the fastest response from templatemo facebook page." />
                </div>
                <div className="col-3">
                    <FeatureCard class="feature__card card__six" title="Spread a word" content="Please tell your friends about our website. This is very helpful." />
                </div>
            </div>
        </div>
    )
}

export default Feature;
