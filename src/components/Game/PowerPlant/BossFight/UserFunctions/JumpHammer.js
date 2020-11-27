export default function JumpHammer(str, end, ehp, eStat, setEStat) {
	let attack = 2 * str + 3 * end + Math.floor(str * Math.random());
	ehp = ehp - attack;
	setEStat({ ...eStat, hp: ehp });
	return ehp
}
