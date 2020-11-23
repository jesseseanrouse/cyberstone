// import react
import React from 'react';
// import components
import RenderStats from '../RenderStats/RenderStats';

function Scrapyard(props) {
	return (
		<>
			<p>Scrapyard</p>
			<RenderStats name={props.name} stat={props.stat} char={props.char} />
            {/* <RenderStats /> */}
		</>
	);
}

export default Scrapyard;
