import React from 'react';
import Post1 from './Post1';
import TopImg from '../../assets/images/top-image.jpg';
import LeftImg from '../../assets/images/left-image.jpg';
import RightImg from '../../assets/images/right-image.jpg';
import Post2 from './Post2';
import Post3 from './Post3';

const Posts = () => {
    return (
        <>
            <div className="posts">
                <Post1 image={TopImg} title="Ante Interdum Chambray" content="Lorem ipsum dolor amet raclette chambray bitters, hammock celiac slow-carb flexitarian four dollar toast food truck health goth. Air plant brunch food truck vegan scenester organic crucifix irony pour-over pop-up austin hexagon kitsch swag. Godard literally humblebrag cloud bread vice master cleanse chambray typewriter put a bird on it brooklyn forage." />

                <Post2 image={LeftImg} title="Ante Interdum Raclette" content1="Lorem ipsum dolor amet raclette chambray bitters, hammock celiac slow-carb flexitarian four dollar toast food truck health goth. Air plant brunch food truck vegan scenester organic crucifix irony pour-over pop-up austin hexagon kitsch swag. Godard literally humblebrag cloud bread vice master cleanse chambray typewriter put a bird on it brooklyn forage." content2="Air plant brunch food truck vegan scenester organic crucifix irony pour-over pop-up austin hexagon kitsch swag. Godard literally humblebrag cloud bread vice master cleanse chambray typewriter put bird brooklyn" />

                <Post3 image={RightImg} title="Ante Interdum Raclette" content1="Lorem ipsum dolor amet raclette chambray bitters, hammock celiac slow-carb flexitarian four dollar toast food truck health goth. Air plant brunch food truck vegan scenester organic crucifix irony pour-over pop-up austin hexagon kitsch swag. Godard literally humblebrag cloud bread vice master cleanse chambray typewriter put a bird on it brooklyn forage." content2="Air plant brunch food truck vegan scenester organic crucifix irony pour-over pop-up austin hexagon kitsch swag. Godard literally humblebrag cloud bread vice master cleanse chambray typewriter put bird brooklyn" />
            </div>
        </>
    )
}

export default Posts;
