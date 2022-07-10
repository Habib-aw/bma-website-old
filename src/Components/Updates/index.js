import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import './style.css'
import eid_adha_2022 from "../../Assets/eid-adha-2022.jpg"
import sacrifice_hijjah from "../../Assets/sacrifice-hijjah.jpeg"
import ramadan_reflection from "../../Assets/ramadan-reflection.jpg"
import takbeer_tashreeq from "../../Assets/takbeer-tashreeq.jpeg"
import bengali_dates from "../../Assets/bengali-dates-water.jpeg"
import arafat from "../../Assets/arafat.jpeg"
import eid_fitr from "../../Assets/eid-fitr.jpg"
function Updates() {
    const [small,setSmall]= useState(false);
    useEffect(()=>{
        if(window.innerWidth<600){
            setSmall(true)
        }else{
            setSmall(false)
        }
        window.addEventListener("resize",()=>{
            if(window.innerWidth<600){
                setSmall(true)
            }else{
                setSmall(false)
            }
        })
    })
    const images = [
        eid_adha_2022,
        arafat,
        takbeer_tashreeq,
        bengali_dates,
        sacrifice_hijjah,
        ramadan_reflection,
        eid_fitr
    ]
    return (
        <div>
        <div className="blue-bar"></div>
        <h1 className='updates-title'>Information and Updates</h1>
        <div className='updates-container snap'>
            {images.map((img)=>{
                return(
                    <div className='updates-img'>
                        <img src={img} alt="" srcset="" height={small ? 350:550}/>
                    </div>
                )
            })}
        </div>
    </div>
    )
}

export default Updates