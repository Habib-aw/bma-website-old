import React,{useEffect,useState} from 'react'
import '../App.css'
function ProgressBar({title,raised,target,description}) {
    const [Style,setStyle] = useState(null)
    const percentage =Math.floor(raised/target *100)

    useEffect(()=>{
        setTimeout(()=>{
            const style={
                opacity:1,
                width:`${percentage}%`, 
                backgroundImage: 'linear-gradient(90deg, rgba(111,197,82,1) 50%, rgba(9,121,69,1) 100%)'
            }
            setStyle(style)
        },0)
    },[])
    function addComma(num){
        
    }
    return (
        <div style={{textAlign:'center'}}>
            <h2>{title}</h2>
            <p className='progress-description-small'>{description}</p>
            <div className='progress-info'>
                <div className='d-flex'>
                    <div>
                        <h5>Raised</h5> 
                        <span>£{raised.toLocaleString()}</span>
                    </div>
                <div className='vr'></div>
                </div>
                <p className='progress-description'>{description}</p>
                <div className='d-flex'>
                    <div className='vr'></div>
                    <div>
                        <h5>Target</h5> 
                        <span>£{target.toLocaleString()}</span>
                    </div>
                </div>
            </div>
            <div className='progress-both-bar progress-outer-bar'>
                <div className='progress-both-bar progress-inner-bar d-flex justify-content-center align-items-center' style={Style}>{percentage}%</div>
            </div>
        </div>
    )
}

export default ProgressBar