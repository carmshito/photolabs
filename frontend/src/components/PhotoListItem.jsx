import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {

  const { favPhotos, setFavPhotos} = props
  return (
    <div className="photo-list__item">
      <PhotoFavButton id={props.id} favPhotos={favPhotos} setFavPhotos={setFavPhotos}/>
      <img className="photo-list__image" src={props.imageSource} />
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
