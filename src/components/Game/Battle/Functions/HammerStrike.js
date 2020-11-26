export default function ShieldBash(str, end, hp, stat, setStat) {
	let attack = 3 * str + Math.floor(2 * end * Math.random());
	let newhp = hp - attack;
	setStat({ ...stat, hp: newhp });
	return;
}
