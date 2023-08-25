import React from 'react';

import './App.scss';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import HomeRoute from 'routes/HomeRoute';

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <HomeRoute 
        topics={topics}
        photos={photos}
      />
    </div>
  );
};

export default App;
