import React from 'react';

import DownloadIcon from '../assets/icon-downloads.png'
import Rating from '../assets/icon-ratings.png'
const AppCard = ({app}) => {
    let {image,title,companyName,downloads,ratingAvg}=app;
  
    return (
        <div className='hover:scale-103 transition ease-in-out'>
          
                       <div className='card w-[348px]  p-[16px] bg-white'>
           <img src={image} className='mb-[10px] rounded-[10px] bg-center bg-c w-[316px] h-[316px]  bg-cover bg-no-repeat ' alt="" />
           <p className='text-[20px] text-start mb-[10px] font-medium'>{companyName}: {title}</p>
           <div className='flex justify-between'>
               <div className='text-[#00D390] gap-[5px] flex p-[6px]'><img className='w-[16px] h-auto' src={DownloadIcon} alt="" /> <p>{downloads}M</p></div>
               <div className='text-[#FF8811] flex gap-[5px] p-[6px]'><img className='w-[16px] h-auto' src={Rating} alt="" /> <p>{ratingAvg}</p></div>
           </div>
           
                       </div>
                      </div>
                
       
    );
};

export default AppCard;