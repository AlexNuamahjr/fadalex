import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './admin/pages/Home';
import Login from './admin/pages/Login';
import Register from './admin/pages/Register';
import ClientHome from './client/pages/Home';
import About from './client/pages/About';
import Service from './client/pages/Service';
import Departments from './client/pages/Departments';


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
        <Route path='/admin/login' element={<Login/>} />  
      </Routes>
    </BrowserRouter>
  )
}

export default App
