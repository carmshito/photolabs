import React from 'react';

// styling
import '../styles/HomeRoute.scss';

// components
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';


const HomeRoute = (props) => {

  const {
    topics,
    photos,
    openModal,
    favPhotos,
    setFavPhotos,
    favClickHandler,
    handleDisplayModalPhoto 
  } = props

  return (
    <div className="home-route">
      <TopNavigation 
        topics={topics}
        favPhotos={favPhotos}
      />
      <PhotoList 
        photos={photos}
        openModal={openModal}
        favPhotos={favPhotos}
        setFavPhotos={setFavPhotos}
        favClickHandler={favClickHandler}
        handleDisplayModalPhoto={handleDisplayModalPhoto}
      />
    </div>
  );
};

export default HomeRoute;
