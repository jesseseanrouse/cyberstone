export default function ShieldBash(str, end, hp, stat, setStat) {
	let attack = 3 * str + Math.floor(2 * end * Math.random());
	hp = hp - attack;
	setStat({ ...stat, hp: hp });
	return hp
}
