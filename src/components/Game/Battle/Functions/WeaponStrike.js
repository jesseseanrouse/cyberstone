export default function WeaponStrike(first, second, ehp, eStat, setEStat) {
	let attack = 2 * first + Math.floor(second * Math.random());
	let newhp = ehp - attack;
	setEStat({ ...eStat, hp: newhp });
	return;
}
