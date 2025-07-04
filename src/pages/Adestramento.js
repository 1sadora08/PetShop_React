import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BannerAdestramento from '../imagens/adestramento/banner-adestramento.jpg'
import Accordion from 'react-bootstrap/Accordion';
import adestramento1 from "../imagens/adestramento/adestramento1.jpg"
import adestramento2 from "../imagens/adestramento/adestramento2.jpg"
import adestramento3 from "../imagens/adestramento/adestramento3.jpg"
import adestramento4 from "../imagens/adestramento/adestramento4.jpg"
import adestramento5 from "../imagens/adestramento/adestramento5.jpg"


function Adestramento() {

  const photos = [
    {
      id: 1,
      title:'Imagem de Adestramento 1',
      url: `${adestramento1}`,
    },
    {
      id: 2,
      title:'Imagem de Adestramento 2',
      url: `${adestramento2}`,
    },
    {
      id: 3,
      title:'Imagem de Adestramento 3',
      url: `${adestramento3}`,
    },
    {
      id: 4,
      title:'Imagem de Adestramento 4',
      url: `${adestramento4}`,
    },
    {
      id: 5,
      title:'Imagem de Adestramento 5',
      url: `${adestramento5}`,
    }
  ]
  return (

    <div>
      <Container fluid >
        <Row >
          <Col className='px-0'>
            <img src={BannerAdestramento} alt='Banner do Adestramento' className='w-100'/>
          </Col>
        </Row>
      </Container>

      <Container className='py-5'>
        <Row>
          <Col>
            <p>Aenean ex felis, condimentum at consectetur a, vulputate ut felis. Morbi ullamcorper metus nec nibh pharetra dictum. Integer urna felis, elementum quis eros non, hendrerit consectetur mi. Ut vel elit eget nibh pellentesque pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent in nunc molestie, sodales enim id, porttitor eros. Phasellus tristique nibh vel urna iaculis sagittis. Duis non metus accumsan, scelerisque ligula et, lacinia ipsum. Etiam faucibus nibh sed lorem tempus convallis. Vestibulum bibendum condimentum leo. Vestibulum sit amet diam eget libero egestas aliquet.</p>
            <p>Phasellus lacinia vehicula ex et molestie. Morbi luctus risus id dui accumsan, a dictum odio laoreet. Sed ultrices varius lectus nec malesuada. Maecenas mattis tincidunt est luctus tempor. Morbi sed erat porta, mattis eros congue, elementum lorem. Duis a condimentum erat. Suspendisse sit amet sollicitudin dolor. Nam viverra urna quis commodo viverra. Nunc nibh sapien, suscipit vel feugiat et, faucibus vulputate nisl. Quisque mattis mauris sed sodales faucibus. Duis aliquet faucibus semper.</p>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col className='fotosAdestramento'>
            {
              photos.map((photo) =>(
                <div key={ photo.id }>
                  <img src={ photo.url } alt={ photo.title }/>
                </div>
              ))
            }
          </Col>
        </Row>
      </Container>

      <Container className='py-5'>
        <Row>
          <Col>
            <h2>Perguntas Frequentes</h2>
          </Col>
        </Row>
        <Row>
          <Col>
          <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Qual a melhor idade para adestramento?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Toda a raça pode ser adestrada?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
          </Col>
        </Row>

      </Container>
    </div>
  )
}

export default Adestramento