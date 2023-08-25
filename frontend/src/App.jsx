import React, { useState } from 'react';

// styling
import './App.scss';

// mock data
import photos from 'mocks/photos';
import topics from 'mocks/topics';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {

  // state for selected photo in modal
  const [selectedPhoto, setSelectedPhoto] = useState({});

  // state for fav photos
  const [ favPhotos, setFavPhotos ] = useState([]);

  // state for modal
  const [isOpen, setIsOpen] = useState(false);
  
  const openModal = (selectedPhoto) => {
    setSelectedPhoto(selectedPhoto);
    setIsOpen(true);
  }
  
  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <div className="App">
      <HomeRoute 
        topics={topics}
        photos={photos}
        openModal={openModal}
        favPhotos={favPhotos}
        setFavPhotos={setFavPhotos}
      />
      { isOpen ? <PhotoDetailsModal closeModal={closeModal} selectedPhoto={selectedPhoto} favPhotos={favPhotos} setFavPhotos={setFavPhotos} photos={photos} /> : null }
  
    </div>
  );
};

export default App;
