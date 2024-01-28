import React from 'react';
import { Image } from 'react-bootstrap';
import PalCardTabsStats from './PalCardTabsStats';

function PalCardTabs({pal}) {

  if (pal) {
    return (
      <div>
        <PalCardTabsStats pal={pal} />
      </div>
    );
  }
}

export default PalCardTabs;