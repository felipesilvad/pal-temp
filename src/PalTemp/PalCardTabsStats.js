import React, {useState, useEffect} from 'react';
import db from '../firebase';
import { query, collection, onSnapshot} from "firebase/firestore"; 
import PalCardTabsStatBar from './PalCardTabsStatBar';

function PalCardTabsStats({pal, speed}) {
  
  const [maxStats, setMaxStats] = useState([])
  useEffect (() => {
    onSnapshot(query(collection(db, `/dbs/Pal/maxStats`)), (snapshot) => {
      setMaxStats(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
    });
  }, [])

  if (pal) {
    if (speed) {      
      return (
        <div>
          <PalCardTabsStatBar value={pal.speed.walk} field={"walk"} label={"Walk"} maxStats={maxStats} />
          <PalCardTabsStatBar value={pal.speed.run} field={"run"} label={"Run"} maxStats={maxStats} />
          <PalCardTabsStatBar value={pal.speed.slow_walk} field={"slow_walk"} label={"Slow Walk"} maxStats={maxStats} />
          {pal.speed.mount&&(
            <PalCardTabsStatBar value={pal.speed.mount} field={"atk"} label={"Mount"} maxStats={maxStats} />
          )}
          <PalCardTabsStatBar value={pal.speed.craft} field={"craft"} label={"Craft"} maxStats={maxStats} />
          {pal.speed.transporting&&(
            <PalCardTabsStatBar value={pal.speed.transporting} field={"stamina"} label={"Transporting"} maxStats={maxStats} />
          )}
        </div>
      );
    } else {
      return (
        <div>
          <PalCardTabsStatBar value={pal.main_stats.hp} field={"hp"} label={"HP"} maxStats={maxStats} />
          <PalCardTabsStatBar value={pal.main_stats.melee} field={"atk"} label={"ATK"} maxStats={maxStats} />
          <PalCardTabsStatBar value={pal.main_stats.def} field={"def"} label={"DEF"} maxStats={maxStats} />
          <PalCardTabsStatBar value={pal.main_stats.shot} field={"shot"} label={"Shot"} maxStats={maxStats} />
          <PalCardTabsStatBar value={pal.main_stats.support} field={"support"} label={"Support"} maxStats={maxStats} />
          <PalCardTabsStatBar value={pal.main_stats.stamina} field={"stamina"} label={"Stamina"} maxStats={maxStats} />
        </div>
      );
    }
  }
}

export default PalCardTabsStats;