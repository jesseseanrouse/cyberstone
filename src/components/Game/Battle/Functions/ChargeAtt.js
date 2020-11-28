export default function ChargeAtt(cun, int, ep, eep, emaxEp, stat, setStat, eStat, setEStat) {
    let neweep = eep + 20
    let attack = 0
    if (neweep > emaxEp || neweep === emaxEp) {
        attack = 4 * cun + int + Math.floor(4 * Math.random())
        setEStat({...eStat, ep: emaxEp})
    } else {
        attack = cun + Math.floor(int * Math.random());
        setEStat({...eStat, ep: neweep});
    }
	ep = ep - attack;
	setStat({...stat, ep: ep})
	return ep
}
