import { BrowserRouter } from 'react-router-dom';
import { About, Footer, Hero, Navbar, MovieSearcher, StarsCanvas } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <MovieSearcher />
        <div className='relative z-0'>
          <Footer />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App
