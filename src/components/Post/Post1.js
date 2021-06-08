import React from 'react';
import { Link } from 'react-router-dom';
import './Posts.scss'

const Post1 = props => {
    return (
        <div className="container">
            <div className="post1">
                <div className="row">
                    <div className="col-1">
                        <img src={props.image} alt="banner" />
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
