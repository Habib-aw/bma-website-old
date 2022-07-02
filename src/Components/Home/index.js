import './home.css';
import Carousel from 'react-bootstrap/Carousel'
import itiqaad from "../../Assets/aqeedah.png"
import temp from "../../Assets/temp.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import Classes from "../Classes";
import { useRef } from 'react';
import { useEffect } from 'react';
// import PrayerTimes from './PrayerTimes'
function Home({startTimes, jamaahTimes,scrollNeeded}) {
  const scrollClass = useRef()
  useEffect(()=>{
    if(scrollNeeded){
        scrollClass.current.scrollIntoView({behavior: "smooth"})
    }
  })
  useEffect(() => {
    document.title = 'Baitul Mamur Academy';
  });
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
              src={itiqaad}
              alt="First slide"
              height={carouselHeight}
            />
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={styling}
              src={temp}
              alt="Second slide"
              height={carouselHeight}
            />

            {/* <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
        {/* <PrayerTimes jamaahTimes={jamaahTimes} startTimes={startTimes}/> */}
      </div>
    <section id='abcdef'> 
        <h1 className='news-title'>News and Updates</h1>
          <div className='news-container'>
            

          </div>
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
