import React from 'react';
import { Image } from 'react-bootstrap';
import PalCardTabsStats from './PalCardTabsStats';

function PalCardTabs({pal, cardTab, setCardTab}) {

  if (pal) {
    return (
      <div className='pct__bg'>
        <div className='tab-select'>
          <div className={`tab-select-option ${(cardTab===1)&&('active')}`} onClick={() => setCardTab(1)}>Stats</div>
          <div className={`tab-select-option ${(cardTab===2)&&('active')}`} onClick={() => setCardTab(2)}>Speed</div>
        </div>
        {(cardTab===1)&&(
          <PalCardTabsStats pal={pal} />
        )}
        {(cardTab===2)&&(
          <PalCardTabsStats pal={pal} speed={true} />
        )}
      </div>
    );
  }
}

export default PalCardTabs;