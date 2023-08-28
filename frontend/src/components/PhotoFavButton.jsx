import React, { useCallback, useState } from 'react';

// styling
import '../styles/PhotoFavButton.scss';

// components
import FavIcon from './FavIcon';

function PhotoFavButton(props) {

  const { id, favPhotos, favClickHandler } = props;

  return (
    <div className="photo-list__fav-icon" onClick={() => favClickHandler(id)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon fill={favPhotos.includes(id) ? "#C80000" : "#EEEEEE"} />
      </div>
    </div>
  );
}

export default PhotoFavButton;