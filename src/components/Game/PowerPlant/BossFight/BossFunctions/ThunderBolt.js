export default function Thunderbolt(cun, int, hp, ep, stat, setStat) {
	let attack = cun + Math.floor(int* Math.random());
	let eAttack = 2 * cun + 2 * int + Math.floor(int * Math.random());
	hp = hp - attack;
	ep = ep - eAttack;
	setStat({ ...stat, hp: hp, ep: ep });
	return hp, ep;
}
