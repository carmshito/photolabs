import React from 'react';

// styling
import '../styles/TopNavigationBar.scss';

// components
import TopicList from './TopicList';
import FavBadge from './FavBadge';


const TopNavigation = (props) => {

  const { topics, favPhotos, fetchTopicPhotos } = props;

  // check favPhotos array to see if photos exist in array
  const isFavPhotoExist = favPhotos.length;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar__topics">
        <TopicList topics={topics} fetchTopicPhotos={fetchTopicPhotos}/>
      </div>
      <FavBadge isFavPhotoExist={isFavPhotoExist} />
    </div>
  );
};

export default TopNavigation;