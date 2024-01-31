import React, {useState, useEffect} from 'react';
import { doc, onSnapshot} from "firebase/firestore"; 
import db from '../../firebase';
import { Image } from 'react-bootstrap';

function PalCardTabsPSkill({skillID}) {
  const [skill, setSkill] = useState([])
  useEffect(() => {
    onSnapshot(doc(db, "/dbs/Pal/partnerSkills/", skillID), (doc) => {
      setSkill(doc.data());
    });
  }, [skillID]);

  return (
    <div className='p-1'>
      <div className='pskill-title__div px-1'>
        {skill.title}
      </div>
      <div className='d-flex'>
        <div className='w-20'>
          <div className='pskill-img__div'>
            {skill.img_id&&(
              <Image className='pskill-img' src={`https://firebasestorage.googleapis.com/v0/b/nether-3311f.appspot.com/o/Pal%2Fskills%2FT_icon_skill_pal_${skill.img_id.replace(" ", "").replace(" ", "")}.png?alt=media`} />
            )}
          </div>
        </div>
        <div className='pskill-ability'>
          {skill.ability}
        </div>
      </div>
    </div>
  );
}

export default PalCardTabsPSkill;