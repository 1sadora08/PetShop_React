import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


function ContentImgLeft({imagem, textoimagem, texto}) {
    return (
      <Container className='pb-5'>
        <Row>
            <Col lg='6' md='6' sm='12'>
                <img src={ imagem } alt={ textoimagem }/>
            </Col>

            <Col lg='6' md='6' sm='12'>
                <p>{texto}</p>
            </Col>
        </Row>
      </Container>
    )
  }
  
  export default ContentImgLeft