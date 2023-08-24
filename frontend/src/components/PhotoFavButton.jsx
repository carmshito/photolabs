import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [fav, setFav] = useState(false);

  // click handler to toggle setFav state
  const clickHandler = () => {
    console.log(fav);
    setFav(!fav);
  }

  return (
    <div className="photo-list__fav-icon" onClick={clickHandler}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon fill={fav ? "#C80000" : "EEEEEE"}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;