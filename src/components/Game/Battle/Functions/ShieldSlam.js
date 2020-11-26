export default function ShieldBash(str, end, hp, stat, setStat) {
	let attack = 3 * end + Math.floor(str * Math.random());
	let newhp = hp - attack;
	setStat({ ...stat, hp: newhp });
	return;
}
