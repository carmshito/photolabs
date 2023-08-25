import React from 'react';
import { useState } from 'react';

// consists of top nav bar and photos section

// styling
import '../styles/HomeRoute.scss';

// components
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {

  const { topics, photos, openModal, favPhotos, setFavPhotos } = props

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
      />
    </div>
  );
};

export default HomeRoute;
