import React, {useState, useEffect} from 'react';
import db from '../firebase';
import { query, collection, onSnapshot} from "firebase/firestore"; 
import PalCardTabsStatBar from './PalCardTabsStatBar';
import { Image } from 'react-bootstrap';

function PalCardTabsWork({work}) {

  const getWorkImg = (key) => {
    return `https://firebasestorage.googleapis.com/v0/b/nether-3311f.appspot.com/o/Pal%2Ftypes%2F${key}_icon.png?alt=media&token=41b8469a-827a-4b77-be1b-be66c75f9070`
  }
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  for (const [key, value] of Object.entries(work)) {
    console.log(key, value);
    return (
      <div>
        {key} {value}
      </div>
    )
  }

  // return (
  //   <div className='d-flex flex-wrap'>
  //     test
  //       {(work.kindling>0)&&(
  //         <div className='d-flex justify-content-between'>
  //           <div>
  //             <Image className='work-img' src={getWorkImg(capitalizeFirstLetter("kindling"))} />
  //             {capitalizeFirstLetter("kindling")}
  //           </div>
  //           <div>
  //             Lv<b className='mr-1'>{work.kindling}</b>
  //           </div>
  //         </div>
  //       )}
  //       {(work.watering>0)&&(
  //         <div className="tab-work__div">
  //           <Image className='work-img' src={getWorkImg(capitalizeFirstLetter("watering"))} />
  //           {capitalizeFirstLetter("watering")}
  //           <b className='mr-1'>{work.watering}</b>
  //         </div>
  //       )}
  //       {(work.planting>0)&&(
  //         <div className="tab-work__div">
  //           <Image className='work-img' src={getWorkImg(capitalizeFirstLetter("planting"))} />
  //           {capitalizeFirstLetter("planting")}
  //           <b className='mr-1'>{work.planting}</b>
  //         </div>
  //       )}
  //       {(work.generating_electricity>0)&&(
  //         <div className="tab-work__div">
  //           <Image className='work-img' src={getWorkImg(capitalizeFirstLetter("generating_Electricity"))} />
  //           {capitalizeFirstLetter("generating_Electricity")}
  //           <b className='mr-1'>{work.generating_electricity}</b>
  //         </div>
  //       )}
  //       {(work.handiwork>0)&&(
  //         <div className="tab-work__div">
  //           <Image className='work-img' src={getWorkImg(capitalizeFirstLetter("handiwork"))} />
  //           {capitalizeFirstLetter("handiwork")}
  //           <b className='mr-1'>{work.handiwork}</b>
  //         </div>
  //       )}
  //       {(work.gathering>0)&&(
  //         <div className="tab-work__div">
  //           <Image className='work-img' src={getWorkImg(capitalizeFirstLetter("gathering"))} />
  //           {capitalizeFirstLetter("gathering")}
  //           <b className='mr-1'>{work.gathering}</b>
  //         </div>
  //       )}
  //       {(work.lumbering>0)&&(
  //         <div className="tab-work__div">
  //           <Image className='work-img' src={getWorkImg(capitalizeFirstLetter("lumbering"))} />
  //           {capitalizeFirstLetter("lumbering")}
  //           <b className='mr-1'>{work.lumbering}</b>
  //         </div>
  //       )}
  //       {(work.mining>0)&&(
  //         <div className="tab-work__div">
  //           <Image className='work-img' src={getWorkImg(capitalizeFirstLetter("mining"))} />
  //           {capitalizeFirstLetter("mining")}
  //           <b className='mr-1'>{work.mining}</b>
  //         </div>
  //       )}
  //       {(work.medicine_production>0)&&(
  //         <div className="tab-work__div">
  //           <Image className='work-img' src={getWorkImg(capitalizeFirstLetter("medicine_Production"))} />
  //           {capitalizeFirstLetter("medicine_Production")}
  //           <b className='mr-1'>{work.medicine_production}</b>
  //         </div>
  //       )}
  //       {(work.cooling>0)&&(
  //         <div className="tab-work__div">
  //           <Image className='work-img' src={getWorkImg(capitalizeFirstLetter("cooling"))} />
  //           {capitalizeFirstLetter("cooling")}
  //           <b className='mr-1'>{work.cooling}</b>
  //         </div>
  //       )}
  //       {(work.transporting>0)&&(
  //         <div className="tab-work__div">
  //           <Image className='work-img' src={getWorkImg(capitalizeFirstLetter("transporting"))} />
  //           {capitalizeFirstLetter("transporting")}
  //           <b className='mr-1'>{work.transporting}</b>
  //         </div>
  //       )}
  //       {(work.farming>0)&&(
  //         <div className="tab-work__div">
  //           <Image className='work-img' src={getWorkImg(capitalizeFirstLetter("farming"))} />
  //           {capitalizeFirstLetter("farming")}
  //           <b className='mr-1'>{work.farming}</b>
  //         </div>
  //       )}
  //   </div>
  // );
}

export default PalCardTabsWork;