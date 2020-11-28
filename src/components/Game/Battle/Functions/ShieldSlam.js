export default function ShieldBash(str, end, hp, stat, setStat) {
	let attack = 3 * end + Math.floor(str * Math.random());
	hp = hp - attack;
	setStat({ ...stat, hp: hp });
	return hp
}
