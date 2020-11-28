export default function BowCore(
	str,
	end,
	cun,
	wil,
	ehp,
	eep,
	eStat,
	setEStat,
	core,
	onFire,
	setOnFire,
	message
) {
	if (core === 1) {
		let attack = 2 * str + wil + Math.floor(str * Math.random());
		ehp = ehp - attack;
		setEStat({ ...eStat, hp: ehp });
		message = 'You shoot Dr. Crackle with your bow. ';
	} else if (core === 2) {
		let attack = str + Math.floor(end * Math.random());
		ehp = ehp - attack;
		let eAttack = 2 * cun + Math.floor(str * Math.random());
		eep = eep - eAttack;
		setEStat({ ...eStat, hp: ehp, ep: eep });
		message = 'You shoot Dr. Crackle with your bow. ';
	} else if (core === 3) {
		let attack = wil + str + Math.floor(str * Math.random());
		ehp = ehp - attack;
		setEStat({ ...eStat, hp: ehp });
		let fire = onFire + 1;
		setOnFire(fire);
		if (onFire === 0) {
			message = 'You shoot Dr. Crackle with your bow. He is now on fire. ';
		} else {
			message = 'You shoot Dr. Crackle with your bow. The fire is now hotter. ';
		}
	}

	return ehp, eep, message;
}
