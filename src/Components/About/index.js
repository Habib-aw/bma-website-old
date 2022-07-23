import React,{useEffect} from 'react'
import './about.css'
import history  from '../../Assets/About/arab-history.png';
import historySlim  from '../../Assets/About/arab-history-slim.png';
import future  from '../../Assets/About/future.jpg';
import { useState } from 'react';
function About() {
  const [img,setImg] = useState(history)
  const [historyPaddingSm,setHistoryPaddingSm] = useState({})
  const [futurePaddingSm,setFuturePaddingSm] = useState({})
  // ratio in height/width
  const historyImgRatio = 0.60980699008
  const futureImgRatio = 0.6671875
  useEffect(() => {

    document.title = 'About | Baitul Mamur Academy';
    if(window.innerWidth>910){
      setImg(history) 
      setHistoryPaddingSm({})
      setFuturePaddingSm({})
    }else{
      setImg(historySlim)
      setHistoryPaddingSm({"padding-top":((window.innerWidth*historyImgRatio)+30)})
      setFuturePaddingSm({"padding-top":((window.innerWidth*futureImgRatio)+40)})
    }
    window.addEventListener("resize",()=>{
      if(window.innerWidth>910){
        setImg(history) 
        setHistoryPaddingSm({})
        setFuturePaddingSm({})
      }else{
        setImg(historySlim)
        setHistoryPaddingSm({"padding-top":((window.innerWidth*historyImgRatio)+55)})
        setFuturePaddingSm({"padding-top":((window.innerWidth*futureImgRatio)+40)})
      }

    })
  },[]);
  return (
    <div>
        <div className='about-container' >
            <h1 className='history-title about-title' >History of <br /> <p className='about-bma'>Baitul<br />Mamur<br />Academy</p></h1>
        <div className='about-inner-container history-inner-container'>
          <img src={img} alt=""  className='about-img history-img' />
          <p className='about-text history-text' style={historyPaddingSm}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur excepturi possimus harum enim blanditiis cum quos dolor debitis et facilis. Provident voluptates ut esse, ad commodi neque ullam enim. Asperiores ut eligendi quas, ipsa sint veniam accusamus fugiat ab tempore aperiam fuga porro consequuntur possimus doloribus error adipisci vitae nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit.  Excepturi, aliquam voluptatibus? Ea reiciendis est labore reprehenderit! Iure asperiores fugiat itaque voluptatibus eum veniam ipsam necessitatibus eos consequatur, temporibus facere, reiciendis aliquid dolore sunt architecto unde voluptatum laudantium. Quasi dignissimos molestias, consectetur neque aperiam, ullam earum mollitia, sapiente natus harum cum?</p>
        </div> 
        </div>
        <div className='about-container'>
            <h1 className='future-title about-title' >Vision of <br /> <p className='about-bma'>Baitul<br />Mamur<br />Academy</p></h1>
            <div className='about-inner-container future-inner-container'>
              <img src={future} alt=""  className='about-img future-img'/>
              <p className='about-text future-text' style={futurePaddingSm}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, aliquam voluptatibus? Ea reiciendis est labore reprehenderit! Iure asperiores fugiat itaque voluptatibus eum veniam ipsam necessitatibus eos consequatur, temporibus facere, reiciendis aliquid dolore sunt architecto unde voluptatum laudantium. Quasi dignissimos molestias, consectetur neque aperiam, ullam earum mollitia, sapiente natus harum cum?</p>
            </div> 
        </div>
    </div>
  )
}
export default About