import React from 'react';

// styling
import '../styles/PhotoDetailsModal.scss';

// components
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {

  const { closeModal, selectedPhoto, favPhotos, setFavPhotos, photos } = props;

  const handleCloseModal = () => {
    closeModal();
  };

  // console.log(selectedPhoto);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleCloseModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-details-modal__image-container">
        <PhotoFavButton 
          id={selectedPhoto.id} 
          favPhotos={favPhotos} 
          setFavPhotos={setFavPhotos}
        />
        <img className="photo-details-modal__image" src={selectedPhoto.imageSource} />
      </div>

      <div className="photo-details__user-details">
        <img className="photo-details-modal__profile" src={selectedPhoto.profile} />
        <div className="photo-details__user-info">
          <p className="photo-details__user-info">{selectedPhoto.username}</p>
          <p className="photo-details__user-location">{selectedPhoto.city}, {selectedPhoto.country}</p>
        </div>
      </div>

      <div className="photo-details-modal__header">
        <span>Similar Photos</span>
      </div>
        <PhotoList
          photos={photos}
          favPhotos={favPhotos}
          setFavPhotos={setFavPhotos}
        />
    </div>
  );
};

export default PhotoDetailsModal;

/*  <div className="photo-list__item">
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

    */