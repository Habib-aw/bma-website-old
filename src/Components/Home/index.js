import './home.css';
import Carousel from 'react-bootstrap/Carousel'
import itiqaad from "../../Assets/aqeedah.png"
import itiqaad_wide from "../../Assets/aqeedah-wide.png";
import arabic_wide from "../../Assets/arabic-wide.jpg";
import arabic from "../../Assets/arabic.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import Classes from "../Classes";
import Updates from "../Updates";
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
// import PrayerTimes from './PrayerTimes'
function Home({times,scrollNeeded}) {
  const scrollClass = useRef()
  const [smallImg,setSmallImg] = useState(false);
  const [mgrb,setMgrb] = useState();
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
    if (window.innerWidth < 910){
      setMgrb(true)
    }else{
      setMgrb(false)
    }
  });
  useEffect(()=>{
    window.addEventListener("resize",()=>{
      if (window.innerWidth <= 750){
        setSmallImg(true)
      }else{
        setSmallImg(false)
      }
      if (window.innerWidth < 910){
        setMgrb(true)
      }else{
        setMgrb(false)
      }

    })
  },[])
  // console.log(times)
  const styling = "d-block w-100"
  const carouselHeight = 500;
  return (
    <div className=''>
      <div className='salah-times'>
      <div className='bubble bubble1'>
        <h4>Fajr</h4> 
        <span className='start'>{times.Fajr_start}</span> 
        <span className='start'>{times.Fajr_jamaah}</span>
      </div>
      <div className='bubble bubble2'>
        <h4>Zuhr</h4> 
        <span className='start'>{times.Zuhr_start}</span> 
        <span className='start'>{times.Zuhr_jamaah}</span>
      </div>
      <div className='bubble bubble3'>
        <h4>Asr</h4> 
        <span className='start'>{times.Asr_start}</span> 
        <span className='start'>{times.Asr_jamaah}</span>
      </div>
      <div className='bubble bubble4'>
        <h4>{mgrb ? "Mgrb":"Maghrib"}</h4> 
        <span className='start'>{times.Maghrib_start}</span> 
        <span className='start'>{times.Maghrib_jamaah}</span>
      </div>
      <div className='bubble bubble5'>
        <h4>Isha</h4> 
        <span className='start'>{times.Isha_start}</span> 
        <span className='start'>{times.Isha_jamaah}</span>
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
            {smallImg ? null:<><h1 className='book-name'>Lum'atul Itiqaad</h1>
            <h1 className='author'>By Imam Ibn Qudamah</h1>
            <h1 className='teacher'>Taught by Ustadh Muzakkir</h1></>}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={styling}
              src={smallImg ? arabic:arabic_wide}
              alt="Second slide"
              height={carouselHeight}
            />
            {smallImg? 
            <Carousel.Caption className='caption'>
            <h1 className='arabic-caption-title'>Learn arabic</h1>
            <h1>with ustadh Muzakkir</h1>
            <h4>Every monday at 8pm</h4>
          </Carousel.Caption>:<div className='arabic-info'><h1 className='title-arabic'>Learn Arabic</h1>
            <h1 className='time-arabic'>Every Monday at 8pm</h1>
            <h1 className='teacher-arabic'>with Ustadh Muzakkir</h1></div>}
          </Carousel.Item>
        </Carousel>
        {/* <PrayerTimes times={times} times={times}/> */}
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
            <th className='table-entry'>{times.Fajr}</th>
            <th className='table-entry'>{times.Zuhr}</th>
            <th className='table-entry'>{times.Asr}</th>
            <th className='table-entry'>{times.Maghrib}</th>
            <th className='table-entry'>{times.Isha}</th>
          </tr>
          <tr className='table-row'>
            <th className='table-entry'>Jama'ah</th>
            <th className='table-entry'>{times.Fajr}</th>
            <th className='table-entry'>{times.Zuhr}</th>
            <th className='table-entry'>{times.Asr}</th>
            <th className='table-entry'>{times.Maghrib}</th>
            <th className='table-entry'>{times.Isha}</th>
          </tr>
        </table> */}
    </div>
  );
  
}

export default Home;
