import {React,useEffect} from 'react'
import './App.css';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './Pages/About';
import Projects from './Pages/Projects';
import Blogs from './Pages/Blogs';
import BlogsDetails from './Pages/BlogsDetails';
import Aos from 'aos';

function App() {

  Aos.init();

  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 200,
    });
  }, []);


  return (
    <div>
      {/* <Home/> */}

      <BrowserRouter>
        <Routes>
          <Route path='/' index element={<Home />} />
          <Route path='/contact' index element={<Contact />} />
          <Route path='/services' index element={<Services />} />
          <Route path='/about' index element={<About />} />
          <Route path='/projects' index element={<Projects />} />
          <Route path='/blog' index element={<Blogs />} />
          <Route path='/blogdetils' index element={<BlogsDetails />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
