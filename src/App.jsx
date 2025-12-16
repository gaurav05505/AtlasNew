import React from 'react';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Countries from './pages/Countries';
import Report from './pages/Report';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import CountriesDetails from './pages/CountriesDetails';
import MainLayout from './layout/MainLayout';

 
const App = () => {

  return (
    <>

    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/countries' element={<Countries />} />
        <Route path='/Report' element={<Report />} />
      </Route>

      <Route path='/details/:code' element={<CountriesDetails />} />
    </Routes>

    </>
  )
}

export default App
