import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Posts.scss';

import RightImg from '../../assets/images/right-image.jpg';
import Post1 from './Post1';

const Post3 = props => {
    const [isResponsive, setResponsive] = useState(window.innerWidth > 992);

    useEffect(() => {
        window.addEventListener("resize", () => {
            const isresponsive = window.innerWidth > 992;
            if (isresponsive !== isResponsive) setResponsive(isresponsive);
        }, false)
    }, [isResponsive]);
    return (
        <>
            {isResponsive ?
                <div className="container">
                    <div className="container-inner">
                        <div className="post2">
                            <div className="grid-2-reverse">
                                    <h4 className="grid-post-title">{props.title}</h4>
                                    <p className="grid-post-content-3">{props.content1}</p>
                                    <p className="grid-post-content-4">{props.content2}</p>
                                    <Link to="/" className="text-link grid-post-btt"><button className="primary-btn">Read More</button></Link>
                                    <img className="grid-post-1" src={props.image} alt="banner" />
                            </div>
                        </div>
                    </div>
                </div> :

                <Post1 image={RightImg} title="Ante Interdum Raclette" content="Lorem ipsum dolor amet raclette chambray bitters, hammock celiac slow-carb flexitarian four dollar toast food truck health goth. Air plant brunch food truck vegan scenester organic crucifix irony pour-over pop-up austin hexagon kitsch swag. Godard literally humblebrag cloud bread vice master cleanse chambray typewriter put a bird on it brooklyn forage." content2="Air plant brunch food truck vegan scenester organic crucifix irony pour-over pop-up austin hexagon kitsch swag. Godard literally humblebrag cloud bread vice master cleanse chambray typewriter put bird brooklyn" />
            }
        </>
    );
}

export default Post3;
