export default function Thunderbolt(cun, int, hp, ep, stat, setStat) {
	attack = 4 * cun + Math.floor(5 * Math.random());
	eAttack = 4 * cun + 2 * int + Math.floor(5 * Math.random());
	let newhp = hp - attack;
	let newep = ep - eAttack;
	setStat({...stat, hp: newhp, ep: newep})
	return;
}
