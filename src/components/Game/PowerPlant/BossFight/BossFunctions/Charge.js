export default function Charge(
	cun,
	int,
	ep,
	stat,
	setStat,
	crackleState,
	setCrackleState,
	location,
    message,
    check
) {
	let attack = 0;
	if (crackleState === 0) {
		let random = Math.floor(2 * Math.random());
		if (random === 1) {
			if (location === 2) {
				setCrackleState(2);
			} else {
				setCrackleState(1);
			}
		} else {
			setCrackleState(1);
		}
		message =
			'Dr. Crackle starts to fiddle with his console, he seems to be up to something. ';
	} else if (crackleState === 1) {
		attack = 3 * cun + 2 * int + Math.floor(2 * int * Math.random());
		message =
			'Dr. Crackle unleashes power straight from the power generator and strikes you with it. ';
	} else if (crackleState === 2) {
        check = true
		attack = 2 * cun + int + Math.floor(int * Math.random());
		message =
			'Dr. Crackle unleashes power straight from the power generator into the catwalk electrifying you. You fall off the catwalk and land near Dr. Crackle.';
	}
	ep = ep - attack;
	setStat({ ...stat, ep: ep });
	return ep, message, check;
}
