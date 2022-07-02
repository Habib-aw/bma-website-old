import React from 'react'
import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'
import itiqaad from "../../Assets/aqeedah.png"
import temp from "../../Assets/temp.png"
import './classes.css'
function Classes() {
  return (
    <div className='classes'>
      <h1 className='title'><p className='cla'>Cla</p><p className='sses'>sses</p> </h1>
    <div className='card-stack'>
      <Card style={{ width: '18rem' }} className="card">
  <Card.Img variant="top" src={temp} />
  <Card.Body>
    <Card.Title>Maktab</Card.Title>
    <Card.Text>
      Enroll your child to be taught the basics of their religion ages ?-??
      <br /><br />Time: Mon-Thurs 5-7
      <br />Pricing: £?? per month 
    </Card.Text>
    {/* <Button variant="primary">Go somewhere</Button> */}
  </Card.Body>
</Card>
      <Card style={{ width: '18rem' }} className="card">
  <Card.Img variant="top" src={itiqaad} />
  <Card.Body>
    <Card.Title>Aqeedah class</Card.Title>
    <Card.Text>
      Join us for our weekly aqeedah class taught by Ustadh Muzhakkir
      <br /><br />Time: Every Wednesday at 8pm*
      <br />Pricing: Free
    </Card.Text>
    {/* <Button variant="primary">Go somewhere</Button> */}
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }} className="card">
  <Card.Img variant="top" src={temp} />
  <Card.Body>
    <Card.Title>Arabic class</Card.Title>
    <Card.Text>
      Join us for our regular arabic class taught by Ustadh Muzhakkir
      <br /><br />Time: Every Monday at 8pm*
      <br />Pricing: Free
    </Card.Text>
    {/* <Button variant="primary">Go somewhere</Button> */}
  </Card.Body>
</Card>
    </div>
    <div className='class-bottom'></div>
    </div>
  )
}

export default Classes