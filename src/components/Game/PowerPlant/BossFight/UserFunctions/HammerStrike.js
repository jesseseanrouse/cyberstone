export default function HammerStrike(str, end, ehp, eStat, setEStat) {
	let attack = 2 * str + end + Math.floor(end * Math.random());
	ehp = ehp - attack;
	setEStat({ ...eStat, hp: ehp });
	return ehp;
}
