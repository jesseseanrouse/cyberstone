export default function BowShot(str, wil, ehp, eStat, setEStat, bonus) {
	let attack = 2 * str + wil + bonus + Math.floor(wil * Math.random());
	ehp = ehp - attack;
	setEStat({ ...eStat, hp: ehp });
	return ehp;
}
