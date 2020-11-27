export default function Counter(cun, int, ep, stat, setStat) {
	let attack = 2 * cun + Math.floor(int * Math.random());
	ep = ep - attack;
	setStat({ ...stat, ep: ep });
	return ep;
}
