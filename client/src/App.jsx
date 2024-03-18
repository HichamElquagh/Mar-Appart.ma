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


function App() {



  

  return (  
    <BrowserRouter>
    
      <Routes>
        <Route path="/dashboard" element={ <ProtectedRoute><Dash /></ProtectedRoute>} >
        <Route path="/dashboard/" element={<UserTable />} />
        <Route path="/dashboard/profile" element={<DashProfile />} />
          <Route path="/dashboard/users" element={<UserTable />} />
          <Route path="/dashboard/apartments" element={<ApartmentsTable />} />
          <Route path="/dashboard/calendar" element={<Calendar />} />
        </Route>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/home" element={<Homepage />} />
        <Route path="/home/reservation" element={<ReservationPage />} />
        <Route path="/home/contactus" element={<ContactUspage />} />
        <Route path="/home/filter" element={<FilterPage/>}/>
        <Route path="/home/apartmentdetail" element={<ApartmentDetail/>}/>

        
              </Routes>
    </BrowserRouter>

  );
}

export default App;
