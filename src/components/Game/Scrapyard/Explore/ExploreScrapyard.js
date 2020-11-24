// import react
import React from 'react'
import { useRouteMatch } from 'react-router-dom';

function ExploreScrapyard(props) {
    const { url, path } = useRouteMatch();
    // returns 0 - 10 with 10 being very unlikely
    let random = Math.floor(10 * Math.random())
    if (random < 3) {
        props.history.push(`/game/scrapyard/explore/result/1`);
    } else if (random < 8) {
        props.history.push(`/game/scrapyard/explore/result/1`);
    } else if (random < 10) {
        props.history.push(`/game/scrapyard/explore/result/1`);
    } else if (random === 10) {
        props.history.push(`/game/scrapyard/explore/result/1`);
    }
    
}

export default ExploreScrapyard