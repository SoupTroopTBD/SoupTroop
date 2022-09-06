import Navigation from './components/navigation';
import LandingPage from './components/landingPage';
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
         <Route path='/SoupTroop' exact element={(
            <div style={{ display: 'flex', flexFlow: 'column', height: '100vh' }}>
              <div style={{ height: '10vh', background: '#121212' }}>
                <Navigation />
              </div>
              <div style={{ flex: '1 1 auto', background: '#323232' }}>
                <LandingPage />
              </div>
              <div style={{ height: '10vh', background: '#121212' }}>
                <Footer />
              </div>
            </div>
         )}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
