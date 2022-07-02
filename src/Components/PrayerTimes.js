import React from 'react'
import {useNavigate}  from "react-router-dom";
function PrayerTimes({jamaahTimes, startTimes}) {
  let navigate = useNavigate();
  return (
<div className=' prayertimes'>

        <br />
        {/* <br /> */}
        <div id='donationMsg'>
          Please donate to help support the masjid
          <br />
          <a href='/donate' className='btn bg-primary'>Donate Now</a>
          <br />
          <br />
          
          <a href='https://goo.gl/maps/yZccxG2HzLYUELgQ7' target='_blank' id='address' rel="noreferrer">Address: 191 Roman Rd, E2 0QY</a>
        </div>
    </div>
  )
}

export default PrayerTimes