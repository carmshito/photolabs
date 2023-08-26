import React from 'react';

// styling
import '../styles/TopNavigationBar.scss'

// components
import TopicList from './TopicList';
import FavBadge from './FavBadge';


const TopNavigation = (props) => {

  const { topics, favPhotos } = props;
  
  // check favPhotos array to see if photos exist in array
  const isFavPhotoExist = favPhotos.length;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} />
      <FavBadge isFavPhotoExist={isFavPhotoExist}/>
    </div>
  )
}

export default TopNavigation;