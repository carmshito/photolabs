import React from 'react';
import { useState } from 'react';

// consists of top nav bar and photos section

// styling
import '../styles/HomeRoute.scss';

// components
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {

  const { topics, photos, openModal } = props

  const [ favPhotos, setFavPhotos ] = useState([]);

  return (
    <div className="home-route">
      <TopNavigation 
        topics={topics}
        favPhotos={favPhotos}
      />
      <PhotoList 
        photos={photos}
        favPhotos={favPhotos}
        setFavPhotos={setFavPhotos}
        openModal={openModal}
      />
    </div>
  );
};

export default HomeRoute;
