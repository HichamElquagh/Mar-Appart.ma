import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import Dash from './pages/dashboard/sidebar';
import UserTable from './components/tables/usertable';
import ApartmentsTable from './components/tables/apartmentTable';
import Homepage from './pages/home/Homepage';
import DashProfile from './components/dash/DashProfile';
import Calendar from './pages/dashboard/calendar';
import ContactUspage from './pages/home/ContactUspage';
import FilterPage from './pages/home/FilterPage';
import ApartmentModal from './components/modals/ApartmentModal';
import ReservationPage from './pages/home/ReservationPage';
import ProtectedRoute from './protectedRoutes/ProtectedRoute ';
import ApartmentDetail from './pages/home/ApartmentDetail';
import ReservationTable from './components/tables/reservationTable';
import DashCard from './components/dash/DashCard';
import PageNotFound from './components/error/PageNotFound';
import GuestRoute from './protectedRoutes/IsAuth';


function App() {



  

  return (  
    <BrowserRouter>
    
      <Routes>
        <Route path="/dashboard" element={ <ProtectedRoute><Dash /></ProtectedRoute>} >
        <Route path="/dashboard/" element={ <ReservationTable />} />
        <Route path="/dashboard/profile" element={<DashProfile />} />
          <Route path="/dashboard/users" element={<UserTable />} />
          <Route path="/dashboard/apartments" element={<ApartmentsTable />} />
          <Route path="/dashboard/calendar" element={<Calendar />} />
        </Route>
        <Route path="/register" element={<GuestRoute><RegisterPage /></GuestRoute>} />
        <Route path="/login" element={<GuestRoute><LoginPage /></GuestRoute>} /> 
        <Route path="/" element={<Homepage />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/contactus" element={<ContactUspage />} />
        <Route path="/filter" element={<FilterPage/>}/>
        <Route path="/apartmentdetail" element={<ApartmentDetail/>}/>
        <Route path="*" element={<PageNotFound/>} />

        
              </Routes>
    </BrowserRouter>

  );
}

export default App;
