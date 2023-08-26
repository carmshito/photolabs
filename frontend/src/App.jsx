import React from 'react';

// styling
import './App.scss';

// mock data
import photos from 'mocks/photos';
import topics from 'mocks/topics';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const {
    favPhotos,
    setFavPhotos,
    selectedPhoto,
    isOpen,
    openModal,
    closeModal
  } = useApplicationData();

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
