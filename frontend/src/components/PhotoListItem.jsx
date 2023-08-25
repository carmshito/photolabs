import React from "react";

// styling
import "../styles/PhotoListItem.scss";

// components
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {

  const { id, imageSource, profile, username, city, country, favPhotos, setFavPhotos, openModal } = props;

  const handleOpenModal = () => {
    openModal({
      id, 
      imageSource,
      profile,
      username,
      city,
      country
    });
  }

  return (
    <div className="photo-list__item">
      <PhotoFavButton id={id} favPhotos={favPhotos} setFavPhotos={setFavPhotos}/>
      <img className="photo-list__image" src={imageSource} onClick={handleOpenModal}/>
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
