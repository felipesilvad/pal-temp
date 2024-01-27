import React from 'react';
import { Image } from 'react-bootstrap';

function PalWork({pal}) {
  const getWorkImg = (work) => {
    return `https://firebasestorage.googleapis.com/v0/b/nether-3311f.appspot.com/o/Pal%2Ftypes%2F${work}_icon.png?alt=media&token=41b8469a-827a-4b77-be1b-be66c75f9070`
  }
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  if (pal) {
    return (
      <div className='d-flex'>
        {(pal.kindling>0)&&(
          <div className='work-m__bg'>
            <Image className='work-img' src={getWorkImg(capitalizeFirstLetter("kindling"))} />
            <b className='ardela mr-1'>{pal.kindling}</b>
          </div>
        )}
        {(pal.watering>0)&&(
          <div className="work-m__bg">
            <Image className='work-img' src={getWorkImg(capitalizeFirstLetter("watering"))} />
            <b className='ardela mr-1'>{pal.watering}</b>
          </div>
        )}
        {(pal.planting>0)&&(
          <div className="work-m__bg">
            <Image className='work-img' src={getWorkImg(capitalizeFirstLetter("planting"))} />
            <b className='ardela mr-1'>{pal.planting}</b>
          </div>
        )}
        {(pal.generating_electricity>0)&&(
          <div className="work-m__bg">
            <Image className='work-img' src={getWorkImg(capitalizeFirstLetter("generating_Electricity"))} />
            <b className='ardela mr-1'>{pal.generating_electricity}</b>
          </div>
        )}
        {(pal.handiwork>0)&&(
          <div className="work-m__bg">
            <Image className='work-img' src={getWorkImg(capitalizeFirstLetter("handiwork"))} />
            <b className='ardela mr-1'>{pal.handiwork}</b>
          </div>
        )}
        {(pal.gathering>0)&&(
          <div className="work-m__bg">
            <Image className='work-img' src={getWorkImg(capitalizeFirstLetter("gathering"))} />
            <b className='ardela mr-1'>{pal.gathering}</b>
          </div>
        )}
        {(pal.mining>0)&&(
          <div className="work-m__bg">
            <Image className='work-img' src={getWorkImg(capitalizeFirstLetter("mining"))} />
            <b className='ardela mr-1'>{pal.mining}</b>
          </div>
        )}
        {(pal.medicine_production>0)&&(
          <div className="work-m__bg">
            <Image className='work-img' src={getWorkImg(capitalizeFirstLetter("medicine_Production"))} />
            <b className='ardela mr-1'>{pal.medicine_production}</b>
          </div>
        )}
        {(pal.cooling>0)&&(
          <div className="work-m__bg">
            <Image className='work-img' src={getWorkImg(capitalizeFirstLetter("cooling"))} />
            <b className='ardela mr-1'>{pal.cooling}</b>
          </div>
        )}
        {(pal.transporting>0)&&(
          <div className="work-m__bg">
            <Image className='work-img' src={getWorkImg(capitalizeFirstLetter("transporting"))} />
            <b className='ardela mr-1'>{pal.transporting}</b>
          </div>
        )}
        {(pal.farming>0)&&(
          <div className="work-m__bg">
            <Image className='work-img' src={getWorkImg(capitalizeFirstLetter("farming"))} />
            <b className='ardela mr-1'>{pal.farming}</b>
          </div>
        )}
      </div>
    );
  }
}

export default PalWork;