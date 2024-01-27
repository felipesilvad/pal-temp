import React from 'react';
import { Image } from 'react-bootstrap';

function PalCardTabs({pal}) {
  const img = `https://firebasestorage.googleapis.com/v0/b/nether-3311f.appspot.com/o/Pal%2Fpals%2F${pal.name&&(pal.name.replace(" ", "_"))}_icon.png?alt=media`
  
  if (pal) {
    return (
      <div className='pct__bg'>
        <div className='d-flex'>
          <div className='pct__stat-field'>HP</div>
          <div className='stat-hp'>
            {pal.hp}
          </div>
        </div>
      </div>
    );
  }
}

export default PalCardTabs;