export default function FlameClaw(str, wil, hp, stat, setStat) {
	let attack = 2 * wil + Math.floor(str * Math.random());
	hp = hp - attack;
	setStat({ ...stat, hp: hp });
	return hp
}
