// import react
import React from 'react'
import { useRouteMatch } from 'react-router-dom';

function Recover(props) {
    const { url, path } = useRouteMatch();
    let check1 = false
    let check2 = false
    let newStat = props.stat
    let newHp = 0
    let newEp = 0
    if (props.stat.hp < (props.stat.hpMax / 2)) {
        check1 = true
        newHp = props.stat.hpMax / 2
    }
    if (props.stat.ep < (props.stat.epMax / 2)) {
        check2 = true
        newEp = props.stat.epMax / 2
    }
    if (check1 === true && check2 === true) {
        props.setStat({...newStat, hp: newHp, ep: newEp})
    } else if (check1 === true) {
        props.setStat({ ...newStat, hp: newHp});
    } else if (check2 === true) {
        props.setStat({ ...newStat, ep: newEp });
    }
    props.history.push(`/game/scrapyard/wakeup`);
    return null
}

export default Recover