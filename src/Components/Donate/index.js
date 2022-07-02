import React, {useState,useEffect} from 'react'
import ProgressBar from '../ProgressBar'
import './donate.css'
function Donate() {
  const [other,setOther] = useState(false)
  useEffect(() => {
    document.title = 'Donate | Baitul Mamur Academy';
  });
  return (
    <div id='donate'>
      <div className='donation-all'>
      <div className='donation'>
        <h2>How much would you like to donate</h2>
        <button className='btn' onClick={()=>setOther(false)}>£5</button>
        <button className='btn' onClick={()=>setOther(false)}>£10</button>
        <button className='btn' onClick={()=>setOther(false)}>£25</button>
        <button className='btn' onClick={()=>setOther(false)}>£50</button>
        <br />
        <button className='btn' onClick={()=>setOther(true)}>Other</button>
        {other ? <><span>£</span><input type="number" id="quantity" name="quantity" min="1" defaultValue="5"></input></>:null}
        <h2>Payment method</h2>
        <div>(Visa/mastercard Payment here)</div>
        <span>(Apple Pay here)  </span>
        <span>(Google Pay)</span>
        <br />
        <button type="submit" className='btn'>Pay</button>
      </div>
      
      <div className='progress-bars'>
        <ProgressBar title={'Rent'} raised={4000} target={18200} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minima aliquid doloribus, tenetur optio praesentium consequuntur quod? Harum, nesciunt ut."}/>
        <ProgressBar title={'Council rate'} raised={400} target={5000} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minima aliquid doloribus, tenetur optio praesentium consequuntur quod? Harum, nesciunt ut."}/>
      </div>
      </div>
      <br /><br />
      <div className='donation-other'>
        <div className='inner-donation-other'>
          <h2 className='d-flex justify-content-center'>Other ways to donate</h2>
          <div className='other-donate'>
            <div className='other-masjid'>Visit the masjid in person and donate through the donation box or card machine left near the entrance/exit of the masjid</div>
            <div className='other-bank'>Donate via online banking <br /> Organisation name: Baitul Mamur Academy <br />Acc no. 31643290, Sort code: 40-01-18</div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Donate