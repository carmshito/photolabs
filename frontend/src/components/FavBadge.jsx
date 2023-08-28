import React from 'react';

// styling
import '../styles/FavBadge.scss';

// components
import FavIcon from './FavIcon';

const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!isFavPhotoExist} fill={"#C80000"} />
    </div>
  );
};

export default FavBadge;