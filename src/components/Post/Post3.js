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
                    <div className="post2">
                        <div className="row">
                            <div className="col-3-l">
                                <h4>{props.title}</h4>
                                <p>{props.content1}</p>
                                <p>{props.content2}</p>
                                <Link to="/" className="text-link"><button className="primary-btn">Read More</button></Link>
                            </div>
                            <div className="col-3-l">
                                <img className="img2" src={props.image} alt="banner" />
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
