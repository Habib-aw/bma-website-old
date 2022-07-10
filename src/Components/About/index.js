import React,{useEffect} from 'react'
import './about.css'
import history  from '../../Assets/arab-history1.PNG';
import future  from '../../Assets/future.jpg';
import { useState } from 'react';
function About() {
  const num = 1.71111111
  const [img,setImg] = useState(window.innerWidth/num)
  useEffect(() => {
    document.title = 'About | Baitul Mamur Academy';
    window.addEventListener("resize",()=>{
      if(window.innerWidth>3240){
        setImg(window.innerWidth/0.95) 
      }else{
        setImg(window.innerWidth/num)}
      }
    )
  },[]);
  return (
    <div>
          <div className='d-flex'>
        <div className='t'>
            <h1 className='history-title'>History of <br /> <p>Baitul<br />Mamur<br />Academy</p></h1>
        </div>
        <div className='img'>
          <img src={history} alt="" width={img} className='history-img' />
          <p className='history-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur excepturi possimus harum enim blanditiis cum quos dolor debitis et facilis. Provident voluptates ut esse, ad commodi neque ullam enim. Asperiores ut eligendi quas, ipsa sint veniam accusamus fugiat ab tempore aperiam fuga porro consequuntur possimus doloribus error adipisci vitae nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit.  Excepturi, aliquam voluptatibus? Ea reiciendis est labore reprehenderit! Iure asperiores fugiat itaque voluptatibus eum veniam ipsam necessitatibus eos consequatur, temporibus facere, reiciendis aliquid dolore sunt architecto unde voluptatum laudantium. Quasi dignissimos molestias, consectetur neque aperiam, ullam earum mollitia, sapiente natus harum cum?</p>

        </div> 
        </div>
        <div className='t'>
            <h1 className='history-title'>Vision of <br /> <p>Baitul<br />Mamur<br />Academy</p></h1>
            <div className='future'>
              <img src={future} alt="" width={img-150} className='abc'/>
              <p className='future-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, aliquam voluptatibus? Ea reiciendis est labore reprehenderit! Iure asperiores fugiat itaque voluptatibus eum veniam ipsam necessitatibus eos consequatur, temporibus facere, reiciendis aliquid dolore sunt architecto unde voluptatum laudantium. Quasi dignissimos molestias, consectetur neque aperiam, ullam earum mollitia, sapiente natus harum cum?</p>
            </div> 
        </div>
    </div>
  )
}
export default About