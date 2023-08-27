import React from "react";

// styling
import "../styles/PhotoListItem.scss";

// components
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {

  const {
    id,
    imageSource,
    profile,
    username,
    city,
    country,
    favPhotos,
    setFavPhotos,
    favClickHandler,
    handleDisplayModalPhoto,
    isOpen
  } = props;

  return (
    <div className="photo-list__item">
      <PhotoFavButton id={id} favPhotos={favPhotos} setFavPhotos={setFavPhotos} favClickHandler={favClickHandler} />
      <img className="photo-list__image" src={imageSource} onClick={() => !isOpen && handleDisplayModalPhoto({ id, imageSource, profile, username, city, country})} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile} />
        <div className="photo-list__user-info">
          <p className="photo-list__user-details">{username}</p>
          <p className="photo-list__user-location">{city}, {country}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
