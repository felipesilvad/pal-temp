import React, { useState, useEffect, useRef } from 'react';
import { query, doc, onSnapshot} from "firebase/firestore"; 
import db from '../../firebase';
import {Container,Row,Col} from 'react-bootstrap';

function TacTab() {
  const [technologyTab, setTechnologyTab] = useState([])
  useEffect (() => {
    onSnapshot(query(doc(db, `/dbs/Pal`)), (doc) => {
      setTechnologyTab(doc.data().TechnologyTab)
    });
  }, [])

  return (
    <Container className='new-container'>
      {technologyTab.map((item) => (
        item
      ))}
    </Container>
  )
  
}

export default TacTab;