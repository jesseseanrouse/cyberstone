export default function ShieldBash(str, end, hp, stat, setStat) {
	let attack = 2 * str + Math.floor(end * Math.random());
	hp = hp - attack;
	setStat({ ...stat, hp: hp});
	return hp
}
