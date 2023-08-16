import React from 'react';
import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';
import SoundSection from './components/SoundSection';

function App() {

  return (
    <React.Fragment>
      <div className='App'>
        <Nav />
        <Jumbotron />
        <SoundSection />
      </div>
    </React.Fragment>
  )
}

export default App