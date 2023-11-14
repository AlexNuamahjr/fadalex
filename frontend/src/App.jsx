import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './admin/pages/Home';
import Login from './admin/pages/Login';


const App = ()=> {
  

  return (
    <BrowserRouter>
      <Routes>
        {/* Client routes */}


        {/* Admin routes */}
        <Route path='/admin' element={<Home />}/>
        <Route path='/admin/login' element={<Login/>} />  
      </Routes>
    </BrowserRouter>
  )
}

export default App
