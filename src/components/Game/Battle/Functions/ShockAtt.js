export default function ShockAtt(cun, int, hp, ep, stat, setStat) {
    let attack = cun + Math.floor(int * Math.random())
    let eAttack = 2 * cun + int + Math.floor(cun * Math.random())
    let newhp = hp - attack
    let newep = ep - eAttack
    setStat({...stat, hp: newhp, ep: newep})
    return
}