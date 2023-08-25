import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { id, favPhotos, setFavPhotos} = props;

  const isFav = favPhotos.includes(id);

  const favHandler = () => {
    if (isFav) {
      setFavPhotos(favPhotos.filter((photoId) => photoId !== id));
    } else {
      setFavPhotos([...favPhotos, id]);
    }
  };

  // console.log(isFav);

  return (
    <div className="photo-list__fav-icon" onClick={favHandler}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon fill={isFav ? "#C80000" : "EEEEEE"}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;