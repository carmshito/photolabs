import React from 'react';
import { useState } from 'react';

// consists of top nav bar and photos section

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const { topics, photos } = props
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
      />
    </div>
  );
};

export default HomeRoute;
