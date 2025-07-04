
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function CallToAction({texto}) {
  return (
    <Container className='call'>
        <Row>
            <Col>
                <h1>{texto}</h1>
            </Col>
        </Row>
    </Container>
  )
}

export default CallToAction