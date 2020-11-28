export default function Bite(str, wil, hp, stat, setStat) {
	let attack = 2 * str + Math.floor(wil * Math.random());
	hp = hp - attack;
	setStat({ ...stat, hp: hp });
	return hp
}
