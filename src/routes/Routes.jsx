import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '../components/Common/Navbar';
import About from '../components/Pages/About';
import Help from '../components/Pages/Help';
import Home from '../components/Pages/Home';
import Contact from '../components/Pages/Contact';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import ForgotPassword from '../components/Auth/ForgotPassword';
import NotFound from '../components/Pages/NotFound';

function AppRoutes() {
  const location = useLocation();

  const hideNavbarPaths = ['/signin', '/signup', '/forgot-password'];
  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
