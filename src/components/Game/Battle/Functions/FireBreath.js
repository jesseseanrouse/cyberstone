export default function FireBreath(int, wil, hp, stat, setStat) {
	let attack = 3 * int + Math.floor(wil * Math.random());
	let newhp = hp - attack;
	setStat({ ...stat, hp: newhp });
	return;
}
