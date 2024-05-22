import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Topnavbar from './components/topnavbar'

import Home from './pages/home'
import Products from './pages/product';


function App() {
  return (
    <div className="App">
     <Topnavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}


// export default App;
export default App

