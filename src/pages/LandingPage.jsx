import { NavLink } from "react-router-dom";
import './landingPage.css'
import { Container, Row, Col, Card } from 'react-bootstrap'

const LandingPage = () => {
  return (
    <Container fluid id='landingPage'>
      <Row className='min-vh-100 align-items-center'>
        <Col className='ps-5'>
          <Card className='bg-transparent border-0 text-white ps-5'>
            <Card.Body>
              <Card.Title>
                <h1 className='display-3 fw-semibold'>Build. Manage. <br /> Scale. Effortlessly.</h1>
              </Card.Title>
              <Card.Text className='fw-semibold fs-5'>DevDash is a modern dashboard template for developers and teams. Save time, ship faster and focus on what matters most.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className='pe-5'>
          <Card className='pe-5 bg-transparent border-0'>
            <Card.Body>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default LandingPage