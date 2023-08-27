import React from 'react';

// styling
import '../styles/PhotoDetailsModal.scss';

// components
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

// assets
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {

  const {
    handleCloseModal,
    selectedPhoto,
    favPhotos,
    setFavPhotos,
    photos,
    favClickHandler,
    handleDisplayModalPhoto
  } = props;

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleCloseModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>


      <div className="photo-details_fav-button">
        <PhotoFavButton
          id={selectedPhoto.id}
          favPhotos={favPhotos}
          setFavPhotos={setFavPhotos}
          favClickHandler={favClickHandler}
        />
      </div>

      <div className="photo-details-modal__images">
        <img className="photo-details-modal__image" src={selectedPhoto.imageSource} />
      </div>

      <div className="photo-details-modal__images-container">
        <div className="photo-details__user-details">
          <img className="photo-details-modal__profile" src={selectedPhoto.profile} />
          <div className="photo-details__user-info">
            <p className="photo-details__user-info">{selectedPhoto.username}</p>
            <p className="photo-details__user-location">{selectedPhoto.city}, {selectedPhoto.country}</p>
          </div>
        </div>

        <hr></hr>
        <div className="photo-details-modal__header">
          <span>Similar Photos</span>
        </div>
        <PhotoList
          photos={photos}
          favPhotos={favPhotos}
          setFavPhotos={setFavPhotos}
          favClickHandler={favClickHandler}
          handleDisplayModalPhoto={handleDisplayModalPhoto}
        />
      </div>
    </div >
  );
};

export default PhotoDetailsModal;