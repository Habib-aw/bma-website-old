import "./App.css";
import logo from "./Assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Donate from "./Components/Donate";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Calendar from "./Components/Calendar";
import { useState, useEffect } from "react";
import data from "./data/times.json";
import Footer from "./Components/Footer";
import toTopImg from "./Assets/to-top.png";
function App() {
  const [times, setTimes] = useState("");
  const [showMenuItems, setShowMenuItems] = useState(false);
  const date = new Date();
  const currentDate =
    date.toLocaleString("en-GB", { day: "2-digit" }) +
    "-" +
    date.toLocaleString("en-GB", { month: "short" }).substring(0, 3) +
    "-" +
    new Date().getFullYear().toString().substring(2);
  const month = date.getMonth();
  const [scrollTop, setScrollTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100 && showMenuItems === false) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    });
  });

  useEffect(() => {
    for (let i = 0; i < data[month].length; i++) {
      if (data[month][i].Date === currentDate.toString()) {
        setTimes(data[month][i]);
        break;
      }
    }
  });
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 909) {
        setShowMenuItems(false);
      }
    });
  });
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Router>
      <div id="app">
        <nav className="nav">
          <div className="logo">
            <img src={logo} width="75" height="55" alt="logo" />
            <p className="nav-title">
              <div>Baitul</div>&nbsp;<div>Mamur</div>&nbsp;<div>Academy</div>
            </p>
          </div>
          <div
            onClick={() => setShowMenuItems(!showMenuItems)}
            className="menu"
          >
            <span
              className={
                (showMenuItems ? "menu-clicked" : "menu-unclicked") +
                " menu-item"
              }
            ></span>
            <span
              className={
                (showMenuItems ? "menu-clicked" : "menu-unclicked") +
                " menu-item"
              }
            ></span>
            <span
              className={
                (showMenuItems ? "menu-clicked" : "menu-unclicked") +
                " menu-item"
              }
            ></span>
          </div>
          <div className=" nav-links" id={showMenuItems ? "" : "hide"}>
            <ul className={showMenuItems ? "h100" : ""}>
              <li onClick={() => setShowMenuItems(false)}>
                <Link to="/">Home</Link>
              </li>
              <li onClick={() => setShowMenuItems(false)}>
                <Link to="/about">About</Link>
              </li>
              <li onClick={() => setShowMenuItems(false)}>
                <Link to="/donate">Donate</Link>
              </li>
              <li onClick={() => setShowMenuItems(false)}>
                <Link to="/calendar">Calendar</Link>
              </li>
              <li onClick={() => setShowMenuItems(false)}>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
        {scrollTop ? (
          <img
            src={toTopImg}
            alt="^"
            className="toTop"
            onClick={scrollToTop}
            width={75}
          />
        ) : null}
        <div className="routes">
          <Routes>
            <Route
              path="/"
              element={showMenuItems ? null : <Home times={times} />}
            />
            <Route path="/about" element={showMenuItems ? null : <About />} />
            <Route
              path="/contact"
              element={showMenuItems ? null : <Contact />}
            />
            <Route path="/donate" element={showMenuItems ? null : <Donate />} />
            <Route
              path="/calendar"
              element={showMenuItems ? null : <Calendar />}
            />
            {/* <Route path="/classes" element={<Home jamaahTimes={jamaahTimes} startTimes={startTimes} scrollNeeded={true}/>} /> */}
            <Route
              path="*"
              element={showMenuItems ? null : <Home times={times} />}
            />
          </Routes>
          {showMenuItems ? null : <Footer />}
        </div>
      </div>
    </Router>
  );
}

export default App;
