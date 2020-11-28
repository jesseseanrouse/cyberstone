export default function Bash(str, end, ehp, eStat, setEStat) {
	let attack =  str + end + Math.floor(str * Math.random());
	ehp = ehp - attack;
	setEStat({ ...eStat, hp: ehp });
	return ehp;
}
