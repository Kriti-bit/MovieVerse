import React, { useState } from 'react';
import ImageGrid from './comps/ImageGrid';

function App() {

  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title/>
      <ImageGrid setSelectedImg={setSelectedImg}/>
    </div>
  );
}

export default App;
