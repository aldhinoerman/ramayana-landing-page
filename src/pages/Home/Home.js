import React from 'react';

import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Feature from '../../components/Feature/Feature';
import Posts from '../../components/Post/Posts';

function Home() {
    return (
        <>
            <Header />
            <Banner />
            <Feature />
            <Posts />
        </>
    )
}

export default Home;