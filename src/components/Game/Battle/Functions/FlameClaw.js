export default function FlameClaw(str, wil, hp, stat, setStat) {
	let attack = 2 * wil + Math.floor(str * Math.random());
	let newhp = hp - attack;
	setStat({ ...stat, hp: newhp });
	return;
}
