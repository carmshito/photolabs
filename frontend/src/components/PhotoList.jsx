import React from "react";

// styling
import "../styles/PhotoList.scss";

// components
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {

  const {
    photos,
    favPhotos,
    setFavPhotos,
    openModal,
    closeModal,
    favClickHandler,
    handleDisplayModalPhoto,
    isOpen,
  } = props;

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
              openModal={openModal}
              closeModal={closeModal}
              favClickHandler={favClickHandler}
              handleDisplayModalPhoto={handleDisplayModalPhoto}
              isOpen={isOpen}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default PhotoList;
