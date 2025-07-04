import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Rotulo from '../components/Rotulo'
import hs1 from '../imagens/fotos-resort/thumbnail/brincadeiras-resort.jpg'
import hs2 from '../imagens/fotos-resort/thumbnail/cascata-resort.jpg'
import hs3 from '../imagens/fotos-resort/thumbnail/creche-resort.jpg'
import hs4 from '../imagens/fotos-resort/thumbnail/equipe-resort.jpg'
import hs5 from '../imagens/fotos-resort/thumbnail/equipe2-resort.jpg'
import hs6 from '../imagens/fotos-resort/thumbnail/hotel-para-cachorros.jpg'
import hs7 from '../imagens/fotos-resort/thumbnail/niver-resort.jpg'
import hs8 from '../imagens/fotos-resort/thumbnail/parque-resort.jpg'


function HotelResort() {

  const fotos = [
   {
    id:1,
    alt: 'imagem Hotel Resort 1',
    src: `${hs1}`,
   },
   {
    id:2,
    alt: 'imagem Hotel Resort 2',
    src: `${hs2}`,
   }, 
   {
    id:3,
    alt: 'imagem Hotel Resort 3',
    src: `${hs3}`,
   }, 
   {
    id:4,
    alt: 'imagem Hotel Resort 4',
    src: `${hs4}`,
   }, 
   {
    id:5,
    alt: 'imagem Hotel Resort 5',
    src: `${hs5}`,
   }, 
   {
    id:6,
    alt: 'imagem Hotel Resort 6',
    src: `${hs6}`,
   }, 
   {
    id:7,
    alt: 'imagem Hotel Resort 7',
    src: `${hs7}`,
   }, 
   {
    id:8,
    alt: 'imagem Hotel Resort 8',
    src: `${hs8}`,
   }, 

  ]
  return (
    <div>
    <Container fluid>
      <Row>
        <Col>
          <Rotulo rotulo='Hotel Resort' />
        </Col>
      </Row>
    </Container>
    
    <Container className='pb-5'>
      <Row>
        <Col>
          <p>Aenean ex felis, condimentum at consectetur a, vulputate ut felis. Morbi ullamcorper metus nec nibh pharetra dictum. Integer urna felis, elementum quis eros non, hendrerit consectetur mi. Ut vel elit eget nibh pellentesque pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent in nunc molestie, sodales enim id, porttitor eros. Phasellus tristique nibh vel urna iaculis sagittis. Duis non metus accumsan, scelerisque ligula et, lacinia ipsum. Etiam faucibus nibh sed lorem tempus convallis. Vestibulum bibendum condimentum leo. Vestibulum sit amet diam eget libero egestas aliquet.</p>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2>Conheça nosso espaço:</h2>
        </Col>
      </Row>

      <Row>
        <Col className= 'fotosHotelResort'>
        {
          fotos.map((foto) =>(
            <div key={ foto.id }>
             <img src={ foto.src } alt={ foto.alt }/>
            </div>
          ))
        }
        </Col>
      </Row>
    </Container>
    
    </div>
  )
}

export default HotelResort