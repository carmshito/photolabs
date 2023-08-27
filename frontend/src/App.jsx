import React from 'react';

// styling
import './App.scss';

// routes
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// hooks
import useApplicationData from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const {
    openModal,
    closeModal,
    handleCloseModal,
    setFavPhotos,
    handleDisplayModalPhoto,
    favClickHandler,
    fetchTopicPhotos,
    favPhotos,
    selectedPhoto,
    isOpen,
    photos,
    topics,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        openModal={openModal}
        favPhotos={favPhotos}
        setFavPhotos={setFavPhotos}
        favClickHandler={favClickHandler}
        handleDisplayModalPhoto={handleDisplayModalPhoto}
        isOpen={isOpen}
        fetchTopicPhotos={fetchTopicPhotos}
      />
      {isOpen ?
        <PhotoDetailsModal
          closeModal={closeModal}
          selectedPhoto={selectedPhoto}
          favPhotos={favPhotos}
          setFavPhotos={setFavPhotos}
          photos={photos}
          handleCloseModal={handleCloseModal}
          handleDisplayModalPhoto={handleDisplayModalPhoto}
          favClickHandler={favClickHandler}
        /> : null}

    </div>
  );
};

export default App;
