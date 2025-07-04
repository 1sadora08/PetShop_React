import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


function ContentImgRight({imagem, textoimagem, texto}) {
    return (
      <Container className='pb-5'>
        <Row>
            <Col lg='9' md='6' sm='12'>
                <p>{texto}</p>
            </Col>

            <Col lg='3' md='6' sm='12'>
                <img src={ imagem } alt={ textoimagem }/>
            </Col>
        </Row>
      </Container>
    )
  }
  
  export default ContentImgRight