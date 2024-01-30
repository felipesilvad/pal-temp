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
      <div className='d-flex flex-wrap'>
        {(pal.work.kindling>0)&&(
          <div className='work-m__bg'>
            <Image className='work-img' src={getWorkImg(capitalizeFirstLetter("kindling"))} />
            <b className='mr-1'>{pal.work.kindling}</b>
          </div>
        )}
        {(pal.work.watering>0)&&(
          <div className="work-m__bg">
            <Image className='work-img' src={getWorkImg(capitalizeFirstLetter("watering"))} />
            <b className='mr-1'>{pal.work.watering}</b>
          </div>
        )}
        {(pal.work.planting>0)&&(
          <div className="work-m__bg">
            <Image className='work-img' src={getWorkImg(capitalizeFirstLetter("planting"))} />
            <b className='mr-1'>{pal.work.planting}</b>
          </div>
        )}
        {(pal.work.generating_electricity>0)&&(
          <div className="work-m__bg">
            <Image className='work-img' src={getWorkImg(capitalizeFirstLetter("generating_Electricity"))} />
            <b className='mr-1'>{pal.work.generating_electricity}</b>
          </div>
        )}
        {(pal.work.handiwork>0)&&(
          <div className="work-m__bg">
            <Image className='work-img' src={getWorkImg(capitalizeFirstLetter("handiwork"))} />
            <b className='mr-1'>{pal.work.handiwork}</b>
          </div>
        )}
        {(pal.work.gathering>0)&&(
          <div className="work-m__bg">
            <Image className='work-img' src={getWorkImg(capitalizeFirstLetter("gathering"))} />
            <b className='mr-1'>{pal.work.gathering}</b>
          </div>
        )}
        {(pal.work.mining>0)&&(
          <div className="work-m__bg">
            <Image className='work-img' src={getWorkImg(capitalizeFirstLetter("mining"))} />
            <b className='mr-1'>{pal.work.mining}</b>
          </div>
        )}
        {(pal.work.medicine_production>0)&&(
          <div className="work-m__bg">
            <Image className='work-img' src={getWorkImg(capitalizeFirstLetter("medicine_Production"))} />
            <b className='mr-1'>{pal.work.medicine_production}</b>
          </div>
        )}
        {(pal.work.cooling>0)&&(
          <div className="work-m__bg">
            <Image className='work-img' src={getWorkImg(capitalizeFirstLetter("cooling"))} />
            <b className='mr-1'>{pal.work.cooling}</b>
          </div>
        )}
        {(pal.work.transporting>0)&&(
          <div className="work-m__bg">
            <Image className='work-img' src={getWorkImg(capitalizeFirstLetter("transporting"))} />
            <b className='mr-1'>{pal.work.transporting}</b>
          </div>
        )}
        {(pal.work.farming>0)&&(
          <div className="work-m__bg">
            <Image className='work-img' src={getWorkImg(capitalizeFirstLetter("farming"))} />
            <b className='mr-1'>{pal.work.farming}</b>
          </div>
        )}
      </div>
    );
  }
}

export default PalWork;