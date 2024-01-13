import Navbar from './Navbar';
import Home from './Home'
import Map from './Map'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../index.css';


function App() {
  return (
    <div id='app'>
      <BrowserRouter>
        <Routes>
        <Route path = '/' element={<Home />} ></Route>
        <Route path='/Map' element={<Map />}> </Route>
        </Routes>
        </BrowserRouter>
    </div>
    
  )
  }

export default App;

