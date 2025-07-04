import React from 'react'
import { Col, Container, Row } from "react-bootstrap"

function Rotulo({rotulo}) {
    return (
      <Container fluid className='px-0 py-5'>
        <Row>
            <Col>
                <h1 className='rotulo'>{ rotulo }</h1>
            </Col>
        </Row>
      </Container>
    )
  }
  
  export default Rotulo