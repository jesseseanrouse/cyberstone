export default function ShieldBash(str, end, hp, stat, setStat) {
	let attack = 2 * str + Math.floor(end * Math.random());
	let newhp = hp - attack;
	setStat({ ...stat, hp: newhp});
	return;
}
