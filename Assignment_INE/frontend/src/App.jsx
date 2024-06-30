import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authorize from './screens/Authorize';
import User from './screens/User';
import Staff from './screens/Staff';
import Reload from './screens/Reload';

function App() {
  return ( 
    <BrowserRouter>
      <Routes>
      {/* The landing page  */}
        <Route path="/" element={<Authorize/>}/> 
        <Route path="/user" element={<User/>}/> 
        <Route path="/staff" element={<Staff/>} /> 
        <Route path="/reload" element={<Reload/>} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App