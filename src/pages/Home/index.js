import React from 'react';

import Header from '../../components/Header'
import Banner from '../../components/Banner';
import Feature from '../../components/Feature';
import Posts from '../../components/Post';

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