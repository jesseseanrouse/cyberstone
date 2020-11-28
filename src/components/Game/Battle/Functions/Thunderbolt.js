export default function Thunderbolt(cun, int, hp, ep, stat, setStat) {
	let attack = 4 * cun + Math.floor(5 * Math.random());
	let eAttack = 4 * cun + 2 * int + Math.floor(5 * Math.random());
	hp = hp - attack;
	ep = ep - eAttack;
	setStat({...stat, hp: hp, ep: ep})
	return (hp, ep)
}
