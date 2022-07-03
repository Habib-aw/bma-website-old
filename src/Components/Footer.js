import React from 'react'
import './Footer.css'
function Footer() {
    return (
    <div>
        <h1 className="fundraisers d-flex justify-content-center">Please donate to the fundraises below</h1>
        <div className='d-flex justify-content-center'>
            <a className="btn bg-primary"  href='/donate'>Learn more</a>
        </div>
        <p className='footer '>Baitul Mamur Academy © 2022</p>
    </div>
    )
}

export default Footer