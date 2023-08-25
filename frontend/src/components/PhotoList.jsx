import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {props.photos.map((photo) => {
        return (
          <li key={photo.id}>
            <PhotoListItem
              city={photo.location.city}
              country={photo.location.country}
              imageSource={photo.urls.full}
              username={photo.user.name}
              profile={photo.user.profile}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default PhotoList;
