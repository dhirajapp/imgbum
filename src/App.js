import React, { useState } from 'react';
import Navbar from './comps/Navbar/Navbar';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Footer from './comps/Footer';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Navbar />
      <Title/>
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
      <Footer />
    </div>
  );
}

export default App;
