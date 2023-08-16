import React from 'react';
import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';
import SoundSection from './components/SoundSection';
import DisplaySection from './components/DisplaySection';
import WebgiViewer from './components/WebgiViewer';

function App() {

  return (
    <React.Fragment>
      <div className='App'>
        <Nav />
        <Jumbotron />
        <SoundSection />
        <DisplaySection />
        <WebgiViewer />
      </div>
    </React.Fragment>
  )
}

export default App