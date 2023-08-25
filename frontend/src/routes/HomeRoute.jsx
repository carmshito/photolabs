import React from 'react';

// consists of top nav bar and photos section

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const { topics, photos } = props
  return (
    <div className="home-route">
      <TopNavigation 
        topics={topics}/>
      <PhotoList 
        photos={photos}/>
    </div>
  );
};

export default HomeRoute;
