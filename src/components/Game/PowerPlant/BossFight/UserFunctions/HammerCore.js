export default function HammerStrike(
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
		let attack = 2 * str + end + Math.floor(str * Math.random());
		ehp = ehp - attack;
        setEStat({ ...eStat, hp: ehp });
        message = 'You strike Dr. Crackle with your hammer. ';
	} else if (core === 2) {
		let attack = str + Math.floor(end * Math.random());
		ehp = ehp - attack;
		let eAttack = 2 * cun + Math.floor(str * Math.random());
		eep = eep - eAttack;
        setEStat({ ...eStat, hp: ehp, ep: eep });
        message = 'You strike Dr. Crackle with your hammer. ';
	} else if (core === 3) {
		let attack = wil + str + Math.floor(str * Math.random());
		ehp = ehp - attack;
		setEStat({ ...eStat, hp: ehp });
		let fire = onFire + 1;
        setOnFire(fire);
        if (onFire === 0) {
            message = 'You strike Dr. Crackle with your hammer. He is now on fire.';
        } else {
            message = 'You strike Dr. Crackle with your hammer. The fire is now hotter. ';
        }
	}

	return ehp, eep, message;
}
