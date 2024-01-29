import React from 'react';
import { Image } from 'react-bootstrap';
import PalWork from './PalWork';
import PalType from './PalType';
import PalCardTabs from './PalCardTabs';

function PalCardMobile({pal, desktop, cardTab, setCardTab}) {
  const img = `https://firebasestorage.googleapis.com/v0/b/nether-3311f.appspot.com/o/Pal%2Fpals%2F${pal.name&&(pal.name.replace(" ", "_"))}_icon.png?alt=media`
  
  if (pal) {
    return (
      <div className='pcm__card-w'>
        <div className='ardela background-number'>
          #{pal.id.replace("B", "")}
        </div>
        <div className='pcm__card'>
          <div className='d-flex justify-content-between'>
            <div className='pcm__main-info'>
              <h5 className='pcm__name'>{pal.name}</h5>
              <div className='d-flex'>
                <PalType pal={pal} />
              </div>
              {!desktop&&(
                <PalWork pal={pal} />
              )}
            </div>
            <Image className='pcm__img' src={img} />
          </div>
        </div>
        {desktop&&(
          <PalCardTabs pal={pal} cardTab={cardTab} setCardTab={setCardTab}  />
        )}
      </div>
    );
  }
}

export default PalCardMobile;