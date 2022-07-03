import './App.css';
import logo from "./Assets/logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Donate from './Components/Donate';
import Home from './Components/Home'
import ErrorPage from './Components/ErrorPage';
import About from './Components/About';
import Contact from './Components/Contact';
import { useState,useEffect } from 'react';
import data from "./data/times.json";
import Footer from './Components/Footer';
function App() {
  const [startTimes,setStartTimes] = useState("");
  const [jamaahTimes,setJamaahTimes] = useState("");
  const [showMenuItems,setShowMenuItems] = useState(false);
  const date = new Date()
  const currentDate = date.toLocaleString("en-GB", { day : '2-digit'})+"-"+date.toLocaleString("en-GB", { month: "short" })+"-"+(new Date().getFullYear()).toString().substring(2);
  const [scrollTop,setScrollTop] = useState(false);
  useEffect(()=>{
    for (let i = 0; i < data[0].length; i++) {
      if(currentDate.toString()===data[0][i].Date){
        setStartTimes(data[0][i])
        setJamaahTimes(data[1][i])
        break
      }
    }
  },[])
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY>100){
        setScrollTop(true)
      }else{
        setScrollTop(false)
      }
    })
  })
  useEffect(()=>{
    window.addEventListener('resize',()=>{
      setShowMenuItems(false)
    })
  })
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
  return (
    <Router>
      <div className=''>
          <nav className='nav'>
            <div className='logo'>
              {/* some */}
              <img src={logo} width="75" height="55" alt="logo" />
              <p>Baitul Mamur Academy</p>
            </div>
            <div onClick={()=>setShowMenuItems(!showMenuItems)}  className='menu'>
              <span className='menu-item'></span>
              <span className='menu-item'></span>
              <span className='menu-item'></span>
            </div>
            <div className='nav-links' id={showMenuItems? "":"hide"}>
              <ul>
                <li onClick={()=>setShowMenuItems(false)}><Link to="/">Home</Link></li>
                <li onClick={()=>setShowMenuItems(false)}><Link to="/about">About</Link></li>
                <li onClick={()=>setShowMenuItems(false)}><Link to="/donate">Donate</Link></li>
                <li onClick={()=>setShowMenuItems(false)}><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </nav>
          {scrollTop ? <button className="toTop" onClick={scrollToTop}>^</button>:null}
          <Routes>
            <Route path="/" element={<Home jamaahTimes={jamaahTimes} startTimes={startTimes}/>} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<Donate />} />
            {/* <Route path="/classes" element={<Home jamaahTimes={jamaahTimes} startTimes={startTimes} scrollNeeded={true}/>} /> */}
            <Route path="*" element={<Home jamaahTimes={jamaahTimes} startTimes={startTimes}/>} />
          </Routes>
          <Footer/>
      </div>
    </Router>
  );
}

export default App;
