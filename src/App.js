import { useState, useEffect } from 'react';
import './App.css';
import Navigation from './components/navigation';
import LandingPage from './components/landingPage';
import Footer from './components/footer';
import Cipher from './components/theTest/cipher';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [testMode, setTestMode] = useState(false);
  const [width, setWindowWidth] = useState(0);

  const updateDimensions = () => {
    const width = window.innerWidth
    setWindowWidth(width)
  }
  
  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => 
      window.removeEventListener('resize',updateDimensions);
  }, [])

  return (
    <div className="App">
      <Router>
        <Routes>
         <Route path='/SoupTroop' exact element={(
            <div style={{ display: 'flex', flexFlow: 'column', height: '100vh' }}>
              <img className={testMode ? 'fadeOut' : 'active'} src={require('./img/hotSoup.png')} alt='Hot Soup' />
              <div style={{ height: width < 1023 ? '6vh' : '10vh', background: '#121212' }}>
                <Navigation />
              </div>
              <div style={{ flex: '1 1 auto', background: '#323232' }}>
                <LandingPage screenWidth={width} setTestMode={setTestMode} />
              </div>
              <div style={{ height: width < 1023 ? '6vh' : '10vh', background: '#121212' }}>
                <Footer />
              </div>
            </div>
         )}/>
         <Route path='/SoupTroop/whatthedogdo' exact element={(<Cipher />)}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
