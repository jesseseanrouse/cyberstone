export default function WeaponStrike(first, second, ehp, eStat, setStat) {
	let attack = 2 * first + Math.floor(second * Math.random());
	ehp = ehp - attack;
	setStat({ ...eStat, hp: ehp });
	return ehp
}
