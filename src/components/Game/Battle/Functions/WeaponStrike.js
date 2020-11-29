export default function WeaponStrike(first, second, hp, eStat, setStat) {
	let attack = 2 * first + Math.floor(second * Math.random());
	hp = hp - attack;
	setStat({ ...eStat, hp: hp });
	return hp
}
