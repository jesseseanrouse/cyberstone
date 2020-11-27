export default function PopShot(cun, int, ep, stat, setStat) {
	let attack = cun + Math.floor(int * Math.random());
	ep = ep - attack;
	setStat({ ...stat, ep: ep });
	return ep;
}
