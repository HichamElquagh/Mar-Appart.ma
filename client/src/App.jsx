import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import Dash from './pages/dashboard/sidebar';
import UserTable from './components/tables/usertable';
import ApartmentsTable from './components/tables/apartmentTable';
import Homepage from './pages/home/Homepage';
import DashProfile from './components/myn/DashProfile';
import Calendar from './pages/dashboard/calendar';
import ContactUspage from './pages/home/ContactUspage';
import FilterPage from './pages/home/FilterPage';
import ApartmentModal from './components/modals/ApartmentModal';

function App() {



  

  return (  
    <BrowserRouter>
    
      <Routes>
        <Route path="/dashboard" element={<Dash />} >
        <Route path="/dashboard/" element={<UserTable />} />
        <Route path="/dashboard/profile" element={<DashProfile />} />
          <Route path="/dashboard/users" element={<UserTable />} />
          <Route path="/dashboard/apartments" element={<ApartmentsTable />} />
          <Route path="/dashboard/calendar" element={<Calendar />} />
        </Route>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/home" element={<Homepage />} />
        <Route path="/contactus" element={<ContactUspage />} />
        <Route path="/filter" element={<FilterPage/>}/>
        <Route path="/modal" element={<ApartmentModal />} />

        
              </Routes>
    </BrowserRouter>

  );
}

export default App;
