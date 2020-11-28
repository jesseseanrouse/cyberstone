export default function ShockStrike(cun, int, ep, stat, setStat) {
	let attack = 2 * cun + int + Math.floor(int * Math.random());
	ep = ep - attack;
	setStat({ ...stat, ep: ep });
	return ep;
}
