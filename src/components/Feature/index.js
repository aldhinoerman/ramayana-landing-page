import React from 'react';
import './Feature.scss';
import FeatureCard from './FeatureCard';

import Icon1 from '../../assets/images/icon_01.png';
import Icon2 from '../../assets/images/icon_02.png';
import Icon3 from '../../assets/images/icon_03.png';
import Icon4 from '../../assets/images/icon_04.png';
import Icon5 from '../../assets/images/icon_05.png';
import Icon6 from '../../assets/images/icon_06.png';

const Feature = () => {
    return (
        <div className="container">
            <div className="container-inner">
                <div className="feature">
                    <div className="grid-3">
                        <FeatureCard icon={Icon1} title="Web Design" content="Credit goes to Pexels and Raw Pixel for images used in this template. Thank you." />
                        <FeatureCard icon={Icon2} title="Bootstrap 4" content="Proin aliquam facilisis ante interdum. Sed nulla feugiat tempus aliquam." />
                        <FeatureCard icon={Icon3} title="HTML CSS" content="Proin aliquam facilisis ante interdum. Sed nulla feugiat tempus aliquam." />
                        <FeatureCard icon={Icon4} title="Download Free" content="We have many free to use CSS web templates on our site for you." />
                        <FeatureCard icon={Icon5} title="Get in touch" content="You can get the fastest response from templatemo facebook page." />
                        <FeatureCard icon={Icon6} title="Spread a word" content="Please tell your friends about our website. This is very helpful." />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature;
