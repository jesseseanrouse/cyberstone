export default function FireBreath(int, wil, hp, stat, setStat) {
	let attack = 3 * int + Math.floor(wil * Math.random());
	hp = hp - attack;
	setStat({ ...stat, hp: hp });
	return hp
}
