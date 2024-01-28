import React, {useState, useEffect} from 'react';
import db from '../firebase';
import { query, collection, onSnapshot} from "firebase/firestore"; 
import PalCardTabsStatBar from './PalCardTabsStatBar';

function PalCardTabsStats({pal}) {
  
  const [maxStats, setMaxStats] = useState([])
  useEffect (() => {
    onSnapshot(query(collection(db, `/dbs/Pal/maxStats`)), (snapshot) => {
      setMaxStats(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
    });
  }, [])

  if (pal) {
    return (
      <div className='pct__bg'>
        <PalCardTabsStatBar value={pal.hp} field={"hp"} label={"HP"} maxStats={maxStats} />
        <PalCardTabsStatBar value={pal.melee} field={"atk"} label={"ATK"} maxStats={maxStats} />
        <PalCardTabsStatBar value={pal.defence} field={"def"} label={"DEF"} maxStats={maxStats} />
        <PalCardTabsStatBar value={pal.shot} field={"shot"} label={"Shot"} maxStats={maxStats} />
      </div>
    );
  }
}

export default PalCardTabsStats;