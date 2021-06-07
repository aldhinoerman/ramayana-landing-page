import React from 'react';
import { Link } from 'react-router-dom';
import './Posts.scss';

const Post2 = props => {
    return (
        <div className="container">
            <div className="post2">
                <div className="row">
                    <div className="col-3-l">
                        <img src={props.image} alt="banner" />
                    </div>
                    <div className="col-3-l">
                        <h4>{props.title}</h4>
                        <p>{props.content1}</p>
                        <p>{props.content2}</p>
                        <Link to="/" className="text-link"><button className="primary-btn">Read More</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post2;
