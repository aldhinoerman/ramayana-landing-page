import React from 'react';
import './Posts.css';

const Post2 = props => {
    return (
        <div className="post2 container">
            <div className="row">
                <div className="col-3-l">
                    <img src={props.image} alt="banner" />
                </div>
                <div className="col-3-l">
                    <h4>{props.title}</h4>
                    <p>{props.content1}</p>
                    <p>{props.content2}</p>
                    <button className="primary-btn">Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Post2;