import React from 'react';

// styling
import '../styles/FavBadge.scss';

// components
import FavIcon from './FavIcon';


const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!isFavPhotoExist} fill={!!isFavPhotoExist ? "#C80000" : "#FFFFFF"}/>
    </div>
  ) 
};

export default FavBadge;