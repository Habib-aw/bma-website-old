import React,{useEffect} from 'react'
import './about.css'
function About() {
  useEffect(() => {
    document.title = 'About | Baitul Mamur Academy';
  });
  return (
    <div>
      <h1 className='d-flex justify-content-center'>About</h1>
        <div className='img'>

        </div>
        {/* <img src={history} alt="" className='img'/> */}
        <div className='about'>
          <h2 className='heading'>History of Baitul Mamur Academy</h2>
          <div className='content'>
            <section>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </section>
            <section>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </section>
          </div>
        </div>
        <div className='img'>

        </div>
        {/* <img src={vision} alt="" className='img'/> */}
        <div className='about'>
          <h2 className='heading'>Vision of Baitul Mamur Academy</h2>
          <section className='content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </section>
        </div>
    </div>
  )
}
export default About