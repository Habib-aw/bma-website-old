import './home.css';
import Carousel from 'react-bootstrap/Carousel'
import itiqaad from "../../Assets/aqeedah.png"
import itiqaad_wide from "../../Assets/aqeedah-wide.png";
import temp from "../../Assets/temp.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import Classes from "../Classes";
import Updates from "../Updates";
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
// import PrayerTimes from './PrayerTimes'
function Home({startTimes, jamaahTimes,scrollNeeded}) {
  const scrollClass = useRef()
  const [smallImg,setSmallImg] = useState(false);
  useEffect(()=>{
    if(scrollNeeded){
        scrollClass.current.scrollIntoView({behavior: "smooth"})
    }
  })
  useEffect(() => {
    document.title = 'Baitul Mamur Academy';
    if (window.innerWidth <= 750){
      setSmallImg(true)
    }else{
      setSmallImg(false)
    }
  });
  useEffect(()=>{
    window.addEventListener("resize",()=>{
      if (window.innerWidth <= 750){
        setSmallImg(true)
      }else{
        setSmallImg(false)
      }
    })
  },[])
  const styling = "d-block w-100"
  const carouselHeight = 500;
  return (
    <div className=''>
      <div className='salah-times'>
      <div className='bubble bubble1'>
        <h4>Fajr</h4> 
        <span className='start'>{startTimes.Fajr}</span> 
        <span className='start'>{jamaahTimes.Fajr}</span>
      </div>
      <div className='bubble bubble2'>
        <h4>Zuhr</h4> 
        <span className='start'>{startTimes.Zuhr}</span> 
        <span className='start'>{jamaahTimes.Zuhr}</span>
      </div>
      <div className='bubble bubble3'>
        <h4>Asr</h4> 
        <span className='start'>{startTimes.Asr}</span> 
        <span className='start'>{jamaahTimes.Asr}</span>
      </div>
      <div className='bubble bubble4'>
        <h4>Mgrb</h4> 
        <span className='start'>{startTimes.Maghrib}</span> 
        <span className='start'>{jamaahTimes.Maghrib}</span>
      </div>
      <div className='bubble bubble5'>
        <h4>Isha</h4> 
        <span className='start'>{startTimes.Isha}</span> 
        <span className='start'>{jamaahTimes.Isha}</span>
      </div>
      </div>
      <div className='carousel'>
        <Carousel className="">
          <Carousel.Item>
            <img
              className={styling}
              src={smallImg ? itiqaad:itiqaad_wide}
              alt="First slide"
              height={carouselHeight}
            />
            {smallImg ? null:<h1 className='book-name'>Lum'atul Itiqaad</h1>}
            {smallImg ? null:<h1 className='author'>By Imam Ibn Qudamah</h1>}
            {smallImg ? null:<h1 className='teacher'>Taught by Ustadh Muzakkir</h1>}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={styling}
              src={temp}
              alt="Second slide"
              height={carouselHeight}
            />
          </Carousel.Item>
        </Carousel>
        {/* <PrayerTimes jamaahTimes={jamaahTimes} startTimes={startTimes}/> */}
      </div>
    <section > 
        <Updates />
    </section>
    <section ref={scrollClass}>
      <Classes />
    </section>
    
    {/* <table  className="table">
          <tr className='table-row'>
            <th className='table-entry'></th>
            <th className='table-entry'>Fajr</th> 
            <th className='table-entry'>Zuhr</th>
            <th className='table-entry'>Asr</th>
            <th className='table-entry'>Maghrib</th>
            <th className='table-entry'>Isha</th>
          </tr>
          <tr className='table-row'>
            <th className='table-entry'>Start</th>
            <th className='table-entry'>{startTimes.Fajr}</th>
            <th className='table-entry'>{startTimes.Zuhr}</th>
            <th className='table-entry'>{startTimes.Asr}</th>
            <th className='table-entry'>{startTimes.Maghrib}</th>
            <th className='table-entry'>{startTimes.Isha}</th>
          </tr>
          <tr className='table-row'>
            <th className='table-entry'>Jama'ah</th>
            <th className='table-entry'>{jamaahTimes.Fajr}</th>
            <th className='table-entry'>{jamaahTimes.Zuhr}</th>
            <th className='table-entry'>{jamaahTimes.Asr}</th>
            <th className='table-entry'>{jamaahTimes.Maghrib}</th>
            <th className='table-entry'>{jamaahTimes.Isha}</th>
          </tr>
        </table> */}
    </div>
  );
  
}

export default Home;
