import React from 'react';
import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';
import SoundSection from './components/SoundSection';
import DisplaySection from './components/DisplaySection';
import WebgiViewer from './components/WebgiViewer';
import Loader from './components/Loader';

function App() {
  const webgiViewerRef = React.useRef();
  const contentRef = React.useRef();

  const handlePreview = () => {
    webgiViewerRef.current.triggerPreview();
  }

  return (
    <div className='App'>
      <Loader />
      <div ref={contentRef} id='content'>
        <Nav />
        <Jumbotron />
        <SoundSection />
        <DisplaySection
          triggerPreview={() => handlePreview()}
        />
      </div>
      <WebgiViewer
        contentRef={contentRef}
        ref={webgiViewerRef}
      />
    </div>
  );
}

export default App;
