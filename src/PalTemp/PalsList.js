import React, { useState, useEffect } from 'react';
import { query, collection, onSnapshot} from "firebase/firestore"; 
import db from '../firebase';
import {Container,Row,Col} from 'react-bootstrap';
import PalCard from './PalCard';


function PalsList() {
  const [pals, setPals] = useState([])
  useEffect (() => {
    onSnapshot(query(collection(db, `/dbs/Pal/pals`)), (snapshot) => {
      setPals(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
    });
  }, [])
  console.log(pals)

  return (
    <Container className='new-container'>
      <div className='d-flex flex-wrap'>
        {pals&&(pals.map(pal => (
          <PalCard pal={pal} />
        )))}
      </div>
    </Container>
  )
  
}

export default PalsList;