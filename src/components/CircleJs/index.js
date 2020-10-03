import React, { useRef, useEffect } from 'react';
import { TimelineMax, Power2 } from 'gsap';

import './styl.css';

const CircleJs = () => {
	const yellow = useRef(null);
	const orange = useRef(null);
	const red = useRef(null);
	const block = useRef(null);

	useEffect(() => {
		const tl = new TimelineMax();

		tl
			.to(yellow.current, { x: 220, ease: Power2.easeInOut, duration: 1 })
			.set(orange.current, { visibility: 'visible' } )
			.to(yellow.current, { x: 440, ease: Power2.easeInOut, duration: 1 })
			.set(red.current, { visibility: 'visible' } )
			.to(yellow.current, { x: 660, ease: Power2.easeInOut, duration: 1 })
			.to(block.current, { scale: 0.5, duration: 1, ease: Power2.easeInOut })

		return () => {
			tl.kill();
		};
	}, [])

	return <div className="circle-block-js" ref={block}>
		<div className="circle-js orange-circle-js" ref={orange} />
		<div className="circle-js red-circle-js" ref={red} />
		<div className="circle-js yellow-circle-js" ref={yellow} />
	</div>;
};

export default CircleJs;
