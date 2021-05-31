import React from 'react';
import './ScrollButton.css';
import * as BsIcons from 'react-icons/bs';
import { IconContext } from 'react-icons/lib';

class ScrollButton extends React.Component {
    constructor() {
        super();

        this.state = {
            intervalId: 0
        };
    }

    scrollStep() {
        if (window.scrollY === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.scrollY - this.props.scrollStepInPx);
    }

    scroll() {
        let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
        //store the intervalId inside the state, 
        //so we can use it later to cancel the scrolling
        this.setState({ intervalId: intervalId });
    }

    render() {
        return <button href='#' title='Back to top'
            id='scroll' className='primary-btn btt'
            onClick={(event) => {
                event.preventDefault();
                this.scroll();
            }}>
            <IconContext.Provider value={{ className: "back-to-top" }}>
                <BsIcons.BsChevronCompactUp />
            </IconContext.Provider>
        </button>
    }
}

export default ScrollButton;