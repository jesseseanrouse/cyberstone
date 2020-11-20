// import React
import React from 'react'

function Intro(props) {
    return (
			<>
                <p>test</p>
				<p>{props.stat.str}</p>
				<p>{props.stat.end}</p>
				<p>{props.stat.wil}</p>
				<p>{props.stat.int}</p>
				<p>{props.stat.cun}</p>
				<p>{props.stat.per}</p>
				<p>{props.stat.agi}</p>
			</>
		);
}

export default Intro