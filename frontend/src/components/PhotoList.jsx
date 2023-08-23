import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  let photoList = [];
  for (const photo of props.photos) {
    photoList.push((
      <li key={photo.id}>
        <PhotoListItem 
          city={photo.location.city}
          country={photo.location.country}
          imageSource={photo.urls.full}
          username={photo.user.name}
          profile={photo.user.profile}
        />
      </li>
    ));
  }
  return (
    <ul className="photo-list">
      {photoList}
    </ul>
  );
};

export default PhotoList;
