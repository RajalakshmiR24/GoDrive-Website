import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Drive from './components/Drive';
import About from './components/About';
import Help from './components/Help';
import Home from './components/Home';
import Contact from './components/Contact';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drive" element={<Drive />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="/contact" element={<Contact />} />

        {/* Add other routes as needed */}
      </Routes>
    </>
  );
}

export default App;
