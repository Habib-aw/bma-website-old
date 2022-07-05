import React from 'react'
import './style.css'
import eid_adha_2022 from "../../Assets/eid-adha-2022.jpg"
function index() {
    const images = [
        eid_adha_2022,
        eid_adha_2022,
        eid_adha_2022,
        eid_adha_2022,
        eid_adha_2022,
        eid_adha_2022,
        eid_adha_2022
    ]
    return (
        <div>
        <h1 className='updates-title'>News and Updates</h1>
        <div className='updates-container snap'>
            {images.map((img)=>{
                return(
                    <div className='updates-img'>
                        <img src={img} alt="" srcset="" height={550}/>
                    </div>
                )
            })}
        </div>
    </div>
    )
}

export default index