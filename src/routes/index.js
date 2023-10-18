import { Route, Routes } from 'react-router-dom';
import Login from '../components/auth/login';
import HomePage from '../pages/HomePage';
import Signup from '../components/auth/signup';
import AppLayout from '../layouts/AppLayout';
import Bookings from '../pages/Bookings';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/bookings" element={<Bookings />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
