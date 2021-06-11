import React, { useState } from 'react'
import './Sidenav.scss';

import CarouselImg from '../../assets/images/simple-post.jpg';
import TopImg from '../../assets/images/right-image.jpg';

function ImageSlider() {
    const [style, setStyle] = useState("slides");

    return (
        <>
        <div className="slider" onClick={() => setStyle('slides fade')}>

            <a href="#slide-1">1</a>
            <a href="#slide-2">2</a>
            <a href="#slide-3">3</a>

            <div className={style}>
                <div id="slide-1">
                    <img src={CarouselImg} alt="carousel-img" />
                </div>
                <div id="slide-2">
                    <img src={TopImg} alt="carousel-img" />
                </div>
                <div id="slide-3">
                    <img src={CarouselImg} alt="carousel-img" />
                </div>
            </div>
        </div>
        </>
    )
}

export default ImageSlider;
