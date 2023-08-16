import React from 'react';
import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';

function App() {

  return (
    <React.Fragment>
      <div className='App'>
        <Nav />
        <Jumbotron />
      </div>
    </React.Fragment>
  )
}

export default App