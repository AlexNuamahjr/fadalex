import {BrowserRouter, Routes, Route} from 'react-router-dom'
// Admin Pages
import Home from './admin/pages/Home';
import Login from './admin/pages/Login';
import Register from './admin/pages/Register';
import AdminService from './admin/pages/Services';
import AdminDepartment from './admin/pages/Departments';
import AdminDoctors from './admin/pages/Doctors';
// Admin Pages
// Client Pages
import ClientHome from './client/pages/Home';
import About from './client/pages/About';
import Service from './client/pages/Service';
import Departments from './client/pages/Departments';
// Client Pages

const App = ()=> {
  

  return (
    <BrowserRouter>
      <Routes>
        {/* Client routes */}
        <Route path='/' element={<ClientHome />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/services' element={<Service />} />
        <Route path='/departments' element={<Departments />} />

        {/* Admin routes */}
        <Route path='/admin' element={<Home />}/>
        <Route path='/admin/register' element={<Register />} />
        <Route path='/admin/login' element={<Login />} />
        <Route path='/admin/services' element={<AdminService />} />
        <Route path='/admin/departments' element={<AdminDepartment />} />
        <Route path='/admin/doctors' element={<AdminDoctors />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
