import React, {useState,useEffect} from 'react'
import ProgressBar from '../ProgressBar'
import './donate.css'
function Donate() {
  const [other,setOther] = useState(false)
  useEffect(() => {
    document.title = 'Donate | Baitul Mamur Academy';
  });
  function highlight(val){
    
  }
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
  }, []);
  return (
    <div id='donate'>
      <div className='donation-all'>
      <div className='donation'>
        <h2>How much would you like to donate</h2>
        <div className='donation-btns'>
          <button className='donate-btn' onClick={()=>setOther(false)}>£5</button>
          <button className='donate-btn' onClick={()=>setOther(false)}>£10</button>
          <button className='donate-btn' onClick={()=>setOther(false)}>£25</button>
          <button className='donate-btn' onClick={()=>setOther(false)}>£50</button>
          <button className='donate-btn' onClick={()=>setOther(true)}>Other</button>
        </div>
        {other ? <div style={{marginTop:12}}><span>£</span><input type="number" id="quantity" name="quantity" min="1" defaultValue="5"></input></div>:null}
        <h2>Payment method</h2>
        <label htmlFor="">Name on card: </label>
        <input type="text"/>
        <br /><br />
        <label htmlFor="">Card number: </label>
        <input type="text"/>
        <br /> <br />
        <label htmlFor="">Expiry date:</label>
        <input type="date" name="" id=""/>
        <br /> <br />
        <label htmlFor="">Ccv:</label>
        <input type="text" /><br />
        <span>(Apple Pay here)  </span>
        <span>(Google Pay)</span>
        <br />
        <button type="submit" className='btn'>Pay</button>
      </div>
      
      <div className='progress-bars'>
        <div className='progress-bars-child'><ProgressBar title={'Rent'} raised={4000} target={18200} description={"Please donate towards the masjid rent in order to support the masjid and keep it running"}/></div>
        <div className="progress-bars-child"><ProgressBar title={'Council rate'} raised={400} target={5000} description={"Please donate towards the council rent to help finance recurring bills so the staff can spend on bettering masjid services"}/></div>
      </div>
      </div>
      <br /><br />
      <div className='donation-other'>
        <div className='inner-donation-other'>
          <h2 className='d-flex justify-content-center'>Other ways to donate</h2>
          <div className='other-donate'>
            <div className='other-masjid'>Visit the masjid in person and donate through the donation box or card machine left near the entrance/exit of the masjid</div>
            <div className='other-bank'>Donate via online banking <div className='org-name'><div>Organisation name:&nbsp;</div><div>Baitul Mamur Academy</div></div>Acc no. 31643290<br />Sort code: 40-01-18</div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Donate