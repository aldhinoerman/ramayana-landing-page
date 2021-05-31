import React from 'react';
import './Banner.css'

export const Banner = () => {
    return (
        <div className="banner container">
            <div className="banner__card">
                <h1>Hello, this is your <em>Ramayana</em> Theme.</h1>
                <span>AWESOME HTML & CSS TEMPLATE</span>
                <p>Do you know that <b>Ramayana</b> is a free to use Bootstrap 4 CSS template by <b>templatemo</b>? You can edit and add more pages as you wanted for your personal or corporate websites.</p>
                <button class="primary-btn">Read More</button>
            </div>
        </div>
    )
}

export default Banner;
