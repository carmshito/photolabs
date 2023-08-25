import React, { useState } from 'react';

// styling
import './App.scss';

// mock data
import photos from 'mocks/photos';
import topics from 'mocks/topics';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  
  const openModal = () => {
    setIsOpen(true);
  }
  
  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <div className="App">
      <HomeRoute 
        topics={topics}
        photos={photos}
        openModal={openModal}
      />
      { isOpen ? <PhotoDetailsModal closeModal={closeModal}/> : null }
    </div>
  );
};

export default App;
