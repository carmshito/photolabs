import React from 'react';

// styling
import '../styles/PhotoDetailsModal.scss'

import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {

  const { closeModal, photo } = props;

  const handleCloseModal = () => {
    closeModal()
  };

  console.log(photo)

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleCloseModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
