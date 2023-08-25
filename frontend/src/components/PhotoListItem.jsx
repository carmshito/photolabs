import React from "react";

// styling
import "../styles/PhotoListItem.scss";

// components
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {

  const { favPhotos, setFavPhotos, openModal } = props;

  const handleOpenModal = () => {
    openModal();
  }

  return (
    <div className="photo-list__item">
      <PhotoFavButton id={props.id} favPhotos={favPhotos} setFavPhotos={setFavPhotos}/>
      <img className="photo-list__image" src={props.imageSource} onClick={handleOpenModal}/>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.profile} />
        <div className="photo-list__user-info">
          <p className="photo-list__user-details">{props.username}</p>
          <p className="photo-list__user-location">{props.city}, {props.country}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
