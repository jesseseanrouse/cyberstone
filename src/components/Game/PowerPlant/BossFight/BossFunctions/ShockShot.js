export default function ShockShot(cun, int, ep, stat, setStat) {
	let attack = 2 * int + cun + Math.floor(cun * Math.random());
	ep = ep - attack;
	setStat({ ...stat, ep: ep });
	return ep;
}
