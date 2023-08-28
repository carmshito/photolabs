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
    handleDisplayModalPhoto,
    isOpen,
    fetchTopicPhotos,
    fetchAllPhotos
  } = props;

  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        favPhotos={favPhotos}
        fetchTopicPhotos={fetchTopicPhotos}
        fetchAllPhotos={fetchAllPhotos}
      />
      <PhotoList
        photos={photos}
        openModal={openModal}
        favPhotos={favPhotos}
        setFavPhotos={setFavPhotos}
        favClickHandler={favClickHandler}
        handleDisplayModalPhoto={handleDisplayModalPhoto}
        isOpen={isOpen}
      />
    </div>
  );
};

export default HomeRoute;
