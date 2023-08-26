// returns an object with four keys


import { useState } from "react";

const useApplicationData = () => {

  // The state object will contain the entire state of the application.

  // The updateToFavPhotoIds action can be used to set the favourite photos.
  const [favPhotos, setFavPhotos] = useState([]);

  // The setPhotoSelected action can be used when the user selects a photo.
  const [selectedPhoto, setSelectedPhoto] = useState({});

  // The onClosePhotoDetailsModal action can be used to close the modal.
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (selectedPhoto) => {
    setSelectedPhoto(selectedPhoto);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return {
    favPhotos,
    setFavPhotos,
    selectedPhoto,
    isOpen,
    openModal,
    closeModal
  };
};

export default useApplicationData;