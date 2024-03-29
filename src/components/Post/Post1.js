import React from 'react';
import { Link } from 'react-router-dom';
import './Posts.scss'

const Post1 = props => {
    return (
        <div className="container">
            <div className="container-inner">
                <div className="post1">
                    <div className="grid-1">
                        <div>
                            <img src={props.image} alt="banner" />
                        </div>
                        <h4>{props.title}</h4>
                        <p>{props.content}</p>
                        <p>{props.content2}</p>
                        <Link to="/" className="text-link"><button className="primary-btn">Read More</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post1;
