import { useState } from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Sustainablity from './components/Sustainability/Sustainablity';
import Sponsorship from './components/Sponsorship/Sponsorship';
import Dining from './components/Dining/Dining';
import Meeting from './components/Meeting/Meeting';

function App() {
  
  return (
    <>
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path='/about' element = {<About/>} />
          <Route path='/dining' element = {<Dining/>} />
          <Route path='/meeting' element = {<Meeting/>} />
          <Route path='/sustainability' element = {<Sustainablity/>} />
          <Route path='/sponsorship' element = {<Sponsorship/>} />
        </Routes>
        <Footer/>
      </div>  
    </Router>
    


    </>
  )
}

export default App
