export default function RifleCore(
	int,
	str,
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
		let attack = 2 * int + str + Math.floor(str * Math.random());
		ehp = ehp - attack;
		setEStat({ ...eStat, hp: ehp });
		message = 'You shoot Dr. Crackle with your rifle. ';
	} else if (core === 2) {
		let attack = int + Math.floor(end * Math.random());
		ehp = ehp - attack;
		let eAttack = 2 * cun + Math.floor(int * Math.random());
		eep = eep - eAttack;
		setEStat({ ...eStat, hp: ehp, ep: eep });
		message = 'You shoot Dr. Crackle with your rifle. ';
	} else if (core === 3) {
		let attack = wil + int + Math.floor(int * Math.random());
		ehp = ehp - attack;
		setEStat({ ...eStat, hp: ehp });
		let fire = onFire + 1;
		setOnFire(fire);
		if (onFire === 0) {
			message = 'You shoot Dr. Crackle with your rifle. He is now on fire. ';
		} else {
			message =
				'You shoot Dr. Crackle with your rifle. The fire is now hotter. ';
		}
	}

	return ehp, eep, message;
}
