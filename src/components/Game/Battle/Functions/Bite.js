export default function Bite(str, wil, hp, stat, setStat) {
	let attack = 2 * str + Math.floor(wil * Math.random());
	let newhp = hp - attack;
	setStat({ ...stat, hp: newhp });
	return;
}
