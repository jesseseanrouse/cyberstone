export default function ShockAtt(cun, int, hp, ep, stat, setStat) {
    attack = cun + Math.floor(int * Math.random())
    eAttack = 2 * cun + int + Math.floor(cun * Math.random())
    let newhp = hp - attack
    let newep = ep - eAttack
    setStat({...stat, hp: newhp, ep: newep})
    return
}