export default function RifleShot(int, cun, ehp, eStat, setEStat, bonus) {
	let attack = 2 * int + cun + bonus + Math.floor(cun * Math.random());
	ehp = ehp - attack;
	setEStat({ ...eStat, hp: ehp });
	return ehp;
}
