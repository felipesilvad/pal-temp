import React from 'react';
import { Image } from 'react-bootstrap';

function PalCard({pal}) {
  const getWorkImg = (work) => {
    return `https://firebasestorage.googleapis.com/v0/b/nether-3311f.appspot.com/o/Pal%2Ftypes%2F${work}_icon.png?alt=media&token=41b8469a-827a-4b77-be1b-be66c75f9070`
  }
  
  if (pal) {
    return (
      <div className='d-flex'>
        {pal.kindling&&(
          <>
            <Image className='work-img' src={getWorkImg(("Kindling").toUpperCase())} />
            Lv. {pal.kindling}
          </>
        )}
        {pal.kindling&&(
          <>
            <Image className='work-img' src={getWorkImg(("Kindling").toUpperCase())} />
            Lv. {pal.kindling}
          </>
        )}
      </div>
    );
  }
}

export default PalCard;