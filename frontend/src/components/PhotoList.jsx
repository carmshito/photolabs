import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const { photos, favPhotos, setFavPhotos } = props;
  return (
    <ul className="photo-list">
      {photos.map((photo) => {
        return (
          <li key={photo.id}>
            <PhotoListItem
              id={photo.id}
              key={photo.id}
              city={photo.location.city}
              country={photo.location.country}
              imageSource={photo.urls.full}
              username={photo.user.name}
              profile={photo.user.profile}
              favPhotos={favPhotos}
              setFavPhotos={setFavPhotos}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default PhotoList;
