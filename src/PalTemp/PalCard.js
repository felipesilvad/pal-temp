import React from 'react';
import { Image } from 'react-bootstrap';

function PalCard({pal}) {
  const img = `https://firebasestorage.googleapis.com/v0/b/nether-3311f.appspot.com/o/Pal%2Fpals%2F${pal.name&&(pal.name.replace(" ", "_"))}_icon.png?alt=media`

  const getTypeImg = (type) => {
    return `https://firebasestorage.googleapis.com/v0/b/nether-3311f.appspot.com/o/Pal%2Ftypes%2F${type}_icon.png?alt=media&token=41b8469a-827a-4b77-be1b-be66c75f9070`
  }
  
  if (pal) {
    return (
      <div className='pc__card-w'>
        <div className='pc__card'>
          <div className='d-flex justify-content-between'>
            <div className='pc__main-info'>
              <h5 className='Roboto'>{pal.name}</h5>
              <div className='d-flex'>
                <div>
                  <Image className='type-img' src={getTypeImg(pal.type1)} />
                </div>
                {pal.type2&&(
                  <div>
                    <Image className='type-img' src={getTypeImg(pal.type2)} />
                  </div>
                )}
              </div>
            </div>
            <Image className='pc__img' src={img} />
          </div>
        </div>
      </div>
    );
  }
}

export default PalCard;