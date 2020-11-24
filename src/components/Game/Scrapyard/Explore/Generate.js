// import react
import React from 'react';
import { useRouteMatch } from 'react-router-dom';

function Generate(props) {
    const { url, path } = useRouteMatch();
    // set att move set electric, fire, physical
    let random = Math.floor(3 * Math.random());
    if (random === 0) {
        props.setEAttSet(0)
        props.setEName('Electric Mouse')
        props.setEStat({
					str: 1,
					end: 1,
					wil: 1,
					int: 1,
					cun: 1,
					per: 3,
					agi: 1,
				});
    } else if (random === 1) {
        props.setEAttSet(1)
        props.setEName('Hell Hound')
        props.setEStat({
					str: 1,
					end: 1,
					wil: 1,
					int: 1,
					cun: 1,
					per: 6,
					agi: 1,
				});
    } else {
        props.setEAttSet(2)
        props.setEName('Armored Squire')
        props.setEStat({
					str: 1,
					end: 1,
					wil: 1,
					int: 1,
					cun: 1,
					per: 2,
					agi: 1,
				});
    }
    props.history.push(`/game/battle`);
    return null
}

export default Generate