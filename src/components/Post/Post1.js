import React from 'react';
import './Posts.css'

const Post1 = props => {
    return (
        <div className="post1 container">
            <div className="row">
                <div className="col-1">
                    <img src={props.image} alt="banner" />
                    <h4>{props.title}</h4>
                    <p>{props.content}</p>
                    <button className="primary-btn">Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Post1;
